import Axios from "axios";
import {
  EBAY_FAILURE,
  EBAY_SUCCESS,
  EBAY_WARNING,
} from "../../../src/utils/constants/ebayApiStatusCodes";
import { prettyPrintErrorArray } from "../../../src/utils/functions/prettyPrint";
import { buildEndpointForItem } from "../../../src/utils/functions/ebayEndpointBuilder";
import {
  buildMessageForItem,
  buildErrorMessageForItem,
} from "../../../src/utils/functions/ebayApiResponseMessageBuilder";

export default async (req, res) => {
  const {
    method,
    query: { itemId, siteId },
  } = req;

  try {
    switch (method) {
      case "GET":
        const {
          data: { Item: item, Ack: status, Errors: errorArray },
        } = await Axios.get(buildEndpointForItem({ itemId, siteId }));

        switch (status) {
          case EBAY_SUCCESS:
            res
              .status(200)
              .json({ item, message: buildMessageForItem({ item }), status });
            break;
          case EBAY_WARNING:
            res.status(200).json({
              item,
              message: prettyPrintErrorArray(errorArray),
              status,
            });
            break;
          case EBAY_FAILURE:
            res
              .status(500)
              .json({ message: prettyPrintErrorArray(errorArray), status });
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
  } catch (error) {
    res.status(500).json({
      message: buildErrorMessageForItem({ itemId }),
      status: EBAY_FAILURE,
    });
  }
};
