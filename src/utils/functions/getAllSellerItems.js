import Axios from "axios";
import { EBAY_FAILURE, EBAY_WARNING } from "../constants/ebayApiStatusCodes";
import { buildEndpointForSellerItems } from "./ebayEndpointBuilder";
import { parseStringPromise } from "xml2js";
import {
  DEFAULT_PAGE_NUMBER,
  DEFAULT_SITE_ID,
} from "../constants/ebayApiDefaults";
import { getMappingFromSiteId } from "../constants/ebaySiteIdMappings";
import { buildErrorMessageForSellerItems } from "../functions/ebayApiResponseMessageBuilder";

const getAllSellerItems = async ({
  pageNumber = DEFAULT_PAGE_NUMBER,
  totalPages = Infinity,
  sellerId,
  siteId = DEFAULT_SITE_ID,
  sellerItems = [],
}) => {
  try {
    const result = await Axios.get(
      buildEndpointForSellerItems({
        sellerId,
        siteId,
        pageNumber: pageNumber,
      })
    );

    const { data: dataInXml } = result;
    const dataInJson = await parseStringPromise(dataInXml, {
      explicitArray: false,
    });

    const {
      findItemsAdvancedResponse,
      findItemsAdvancedResponse: { ack: status, errorMessage: errorObject },
    } = dataInJson;

    if (status !== EBAY_FAILURE) {
      const {
        searchResult: { item: items },
        paginationOutput: { pageNumber, totalPages },
      } = findItemsAdvancedResponse;

      if (items && Array.isArray(items)) {
        sellerItems.push(...items);

        if (pageNumber < totalPages) {
          return getAllSellerItems({
            sellerId,
            siteId,
            totalPages,
            pageNumber: Number(pageNumber) + 1,
            sellerItems,
          });
        }
        return { items: sellerItems, status };
      } else {
        return {
          errorObject: {
            error: {
              message: `Seller ${sellerId} currently has no listings in ${
                getMappingFromSiteId(siteId).siteName
              }.`,
            },
          },
          status: EBAY_WARNING,
        };
      }
    } else {
      return { errorObject, status };
    }
  } catch (err) {
    return {
      status: EBAY_FAILURE,
      errorObject: {
        error: {
          message: buildErrorMessageForSellerItems({
            sellerId,
          }),
        },
      },
    };
  }
};

export default getAllSellerItems;
