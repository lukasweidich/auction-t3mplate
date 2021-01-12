export const GET_SINGLE_ITEM_ENDPOINT =
  "https://open.api.ebay.com/shopping?callname=GetSingleItem";

export const GET_SINGLE_ITEM_SELECTOR =
  "IncludeSelector=Details,Description,TextDescription,ShippingCosts,ItemSpecifics,Variations,Compatibility";

export const GET_SINGLE_ITEM_VERSION = "version=1157";

export const GET_SINGLE_ITEM_RESPONSE_ENCODING = "responseencoding=JSON";

export const GET_SELLER_ITEMS_ENDPOINT =
  "https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsAdvanced";

export const GET_SELLER_ITEMS_SELLER_FILTER =
  "itemFilter(0).name=Seller&itemFilter(0).value(0)";

export const GET_SELLER_ITEMS_PAGE_NUMBER = "paginationInput.pageNumber";

export const GET_SELLER_ITEMS_ENTRIES_PER_PAGE =
  "paginationInput.entriesPerPage";
