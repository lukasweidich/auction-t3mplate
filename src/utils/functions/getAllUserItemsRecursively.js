import Axios from "axios";
import { EBAY_FAILURE } from "../../../src/utils/constants/ebayApiStatusCodes";
import { buildEndpointForUserItems } from "../../../src/utils/functions/ebayEndpointBuilder";
import { parseStringPromise } from "xml2js";
import { DEFAULT_PAGE_NUMBER } from "../constants/ebayApiDefaults";

const getAllUserItems = async ({
  pageNumber = DEFAULT_PAGE_NUMBER,
  totalPages = Infinity,
  userId,
  siteId,
  allUserItems,
}) => {
  const { data: dataInXml } = await Axios.get(
    buildEndpointForUserItems({
      userId,
      siteId,
      pageNumber: pageNumber,
    })
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
      paginationOutput: { pageNumber, totalPages },
    } = findItemsAdvancedResponse;

    allUserItems.push(...items);

    if (pageNumber < totalPages) {
      return getAllUserItems({
        userId,
        siteId,
        totalPages,
        pageNumber: Number(pageNumber) + 1,
        allUserItems,
      });
    }
    return { items: allUserItems, status };
  } else {
    return { errorObject, status };
  }
};

export default getAllUserItems;
