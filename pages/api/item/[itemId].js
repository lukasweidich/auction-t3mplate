import Axios from "axios";
import { EBAY_FAILURE } from "../../../src/utils/constants/ebayApiStatusCodes";
import { prettyPrintErrorArray } from "../../../src/utils/functions/prettyPrint";
import { buildEndpointForItem } from "../../../src/utils/functions/ebayEndpointBuilder";

export default async (req, res) => {
  const {
    method,
    query: { itemId, siteId },
  } = req;
  switch (method) {
    case "GET":
      const {
        data: { Item: item, Ack: status, Errors: errorArray },
      } = await Axios.get(buildEndpointForItem({ itemId, siteId }));

      if (item && status !== EBAY_FAILURE) {
        res.status(200).json({ item });
      } else {
        res.status(404).json({ error: prettyPrintErrorArray(errorArray) });
      }

      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).send(`Method ${method} Not Allowed`);
  }
};
