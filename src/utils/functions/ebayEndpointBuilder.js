import {
  DEFAULT_ENTRIES_PER_PAGE,
  DEFAULT_PAGE_NUMBER,
  DEFAULT_SITE_ID,
} from "../constants/ebayApiDefaults";
import {
  GET_SINGLE_ITEM_ENDPOINT,
  GET_SINGLE_ITEM_RESPONSE_ENCODING,
  GET_SINGLE_ITEM_SELECTOR,
  GET_SINGLE_ITEM_VERSION,
  GET_USER_ITEMS_ENDPOINT,
  GET_USER_ITEMS_ENTRIES_PER_PAGE,
  GET_USER_ITEMS_PAGE_NUMBER,
  GET_USER_ITEMS_SELLER_FILTER,
} from "../constants/ebayApiEndpoints";
import { getMappingFromSiteId } from "../constants/ebaySiteIdMappings";
require("dotenv").config();

export const buildEndpointForItem = ({ siteId = DEFAULT_SITE_ID, itemId }) =>
  `${GET_SINGLE_ITEM_ENDPOINT}&appid=${process.env.EBAY_APP_ID}&siteid=${siteId}&ItemID=${itemId}&${GET_SINGLE_ITEM_VERSION}&${GET_SINGLE_ITEM_RESPONSE_ENCODING}&${GET_SINGLE_ITEM_SELECTOR}`;

export const buildEndpointForUserItems = ({
  userId,
  siteId = DEFAULT_SITE_ID,
  pageNumber = DEFAULT_PAGE_NUMBER,
  entriesPerPage = DEFAULT_ENTRIES_PER_PAGE,
}) =>
  `${GET_USER_ITEMS_ENDPOINT}&SECURITY-APPNAME=${
    process.env.EBAY_APP_ID
  }&GLOBAL-ID=${
    getMappingFromSiteId(Number(siteId)).globalId
  }&${GET_USER_ITEMS_SELLER_FILTER}=${userId}&${GET_USER_ITEMS_PAGE_NUMBER}=${pageNumber}&${GET_USER_ITEMS_ENTRIES_PER_PAGE}=${entriesPerPage}`;
