import {
  EBAY_FAILURE,
  EBAY_SUCCESS,
  EBAY_WARNING,
} from "../../../src/utils/constants/ebayApiStatusCodes";
import { buildMessageForSellerItems } from "../../../src/utils/functions/ebayApiResponseMessageBuilder";
import getAllSellerItems from "../../../src/utils/functions/getAllSellerItems";
import { prettyPrintErrorObject } from "../../../src/utils/functions/prettyPrint";

export default async (req, res) => {
  const {
    method,
    query: { sellerId, siteId },
  } = req;
  switch (method) {
    case "GET":
      const { items = [], errorObject, status } = await getAllSellerItems({
        sellerId,
        siteId,
      });

      switch (status) {
        case EBAY_SUCCESS:
          res.status(200).json({
            items,
            message: buildMessageForSellerItems({ items }),
            status,
          });
          break;
        case EBAY_WARNING:
          res.status(200).json({
            items,
            message: prettyPrintErrorObject(errorObject),
            status,
          });
          break;
        case EBAY_FAILURE:
          res
            .status(500)
            .json({ message: prettyPrintErrorObject(errorObject), status });
          break;
        default:
          res.status(204).end();
          break;
      }

      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).send(`Method ${method} Not Allowed`);
  }
};
