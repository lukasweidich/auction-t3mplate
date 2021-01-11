import { EBAY_FAILURE } from "../../../src/utils/constants/ebayApiStatusCodes";
import getAllUserItemsRecursively from "../../../src/utils/functions/getAllUserItemsRecursively";
import { prettyPrintErrorObject } from "../../../src/utils/functions/prettyPrint";

export default async (req, res) => {
  const {
    method,
    query: { userId, siteId },
  } = req;
  switch (method) {
    case "GET":
      const { items, errorObject, status } = await getAllUserItemsRecursively({
        userId,
        siteId,
        allUserItems: [],
      });

      if (items && status !== EBAY_FAILURE) {
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
