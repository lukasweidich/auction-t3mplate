import Axios from "axios";
import {
  GET_SELLERS_ITEMS_ENDPOINT,
  GET_SELLERS_ITEMS_SELLER_FILTER,
  GET_SELLERS_ITEMS_PAGE_NUMBER,
  GET_SELLERS_ITEMS_ENTRIES_PER_PAGE,
} from "../../../src/utils/constants/ebayApiEndpoints";
import { getMappingFromSiteId } from "../../../src/utils/constants/ebaySiteIdMappings";
import { defaultSiteId } from "../../../src/utils/constants/ebayApiDefaults";
import { EBAY_FAILURE } from "../../../src/utils/constants/ebayApiStatusCodes";
import { prettyPrintErrorObject } from "../../../src/utils/functions/prettyPrint";
import { parseStringPromise } from "xml2js";
require("dotenv").config();

export default async (req, res) => {
  const {
    method,
    query: { userId, globalId },
  } = req;
  switch (method) {
    case "GET":
      const appliedGlobalId =
        globalId ?? getMappingFromSiteId(defaultSiteId).globalId;

      let completeSellerList = [];
      const { status, items, errorMessage } = await getCompleteSellerList(
        userId,
        appliedGlobalId,
        null,
        null,
        completeSellerList
      );
      if (items && status !== EBAY_FAILURE) {
        res.statusCode = 200;
        res.json({ items, status });
      } else {
        res.statusCode = 200;
        res.json({ error: prettyPrintErrorObject(errorMessage), status });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).send(`Method ${method} Not Allowed`);
  }
};

const getCompleteSellerList = async (
  sellerId,
  appliedGlobalId,
  pageNumber,
  entriesPerPage,
  completeSellerList
) => {
  const pagination =
    pageNumber && entriesPerPage
      ? `&${GET_SELLERS_ITEMS_PAGE_NUMBER}=${pageNumber}&${GET_SELLERS_ITEMS_ENTRIES_PER_PAGE}=${entriesPerPage}`
      : "";
  const { data } = await Axios.get(
    `${GET_SELLERS_ITEMS_ENDPOINT}&SECURITY-APPNAME=${process.env.EBAY_APP_ID}&${GET_SELLERS_ITEMS_SELLER_FILTER}=${sellerId}&GLOBAL-ID=${appliedGlobalId}${pagination}`
  );
  const dataJson = await parseStringPromise(data, { explicitArray: false });
  const {
    findItemsAdvancedResponse: {
      ack: status,
      searchResult: items,
      paginationOutput,
      errorMessage,
    },
  } = dataJson;

  if (status !== EBAY_FAILURE) {
    completeSellerList = completeSellerList.concat(items.item);
    if (paginationOutput.totalPages > paginationOutput.pageNumber) {
      const { items } = await getCompleteSellerList(
        sellerId,
        appliedGlobalId,
        Number(paginationOutput.pageNumber) + 1,
        paginationOutput.entriesPerPage,
        completeSellerList
      );
      completeSellerList = completeSellerList.concat(items);
    }
  }
  return { status, items: completeSellerList, errorMessage };
};
