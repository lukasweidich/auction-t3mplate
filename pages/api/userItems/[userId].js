import Axios from "axios";
import { EBAY_FAILURE } from "../../../src/utils/constants/ebayApiStatusCodes";
import { prettyPrintErrorObject } from "../../../src/utils/functions/prettyPrint";
import { buildEndpointForUserItems } from "../../../src/utils/functions/ebayEndpointBuilder";
import { parseStringPromise } from "xml2js";

export default async (req, res) => {
  const {
    method,
    query: { userId, siteId },
  } = req;
  switch (method) {
    case "GET":
      const { data: dataInXml } = await Axios.get(
        buildEndpointForUserItems({ userId, siteId })
      );
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
        } = findItemsAdvancedResponse;
        res.status(200).json({ items });
      } else {
        res.status(404).json({ error: prettyPrintErrorObject(errorObject) });
      }

      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).send(`Method ${method} Not Allowed`);
  }
};
