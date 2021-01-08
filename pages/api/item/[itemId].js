import Axios from "axios";
import {
  GET_SINGLE_ITEM_ENDPOINT,
  GET_SINGLE_ITEM_SELECTOR,
  GET_SINGLE_ITEM_VERSION,
  GET_SINGLE_ITEM_RESPONSE_ENCODING,
} from "../../../src/utils/constants/ebayApiEndpoints";
import { defaultSiteId } from "../../../src/utils/constants/ebayApiDefaults";
import { EBAY_FAILURE } from "../../../src/utils/constants/ebayApiStatusCodes";
import { prettyPrintErrorArray } from "../../../src/utils/functions/prettyPrint";
require("dotenv").config();

export default async (req, res) => {
  const {
    method,
    query: { itemId, siteId },
  } = req;
  switch (method) {
    case "GET":
      const appliedSiteId = siteId ?? defaultSiteId;
      const { data } = await Axios.get(
        `${GET_SINGLE_ITEM_ENDPOINT}&appid=${process.env.EBAY_APP_ID}&siteid=${appliedSiteId}&ItemID=${itemId}&${GET_SINGLE_ITEM_VERSION}&${GET_SINGLE_ITEM_RESPONSE_ENCODING}&${GET_SINGLE_ITEM_SELECTOR}`
      );
      const { Item: item, Ack: status, Errors: errors } = data;
      if (item && status !== EBAY_FAILURE) {
        res.statusCode = 200;
        res.json({ item, status });
      } else {
        res.statusCode = 404;
        res.json({ error: prettyPrintErrorArray(errors), status });
      }
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).send(`Method ${method} Not Allowed`);
  }
};
