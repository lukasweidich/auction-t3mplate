import { DEFAULT_SITE_ID } from "../constants/ebayApiDefaults";

export const buildMessageForSellerItems = ({ items }) =>
  `Successfully loaded ${items.length} items.`;

export const buildMessageForItem = ({ item }) =>
  `Successfully loaded ${item.Title}.`;

export const buildErrorMessageForSellerItems = ({ sellerId }) =>
  `An error occured when trying to load items of ${sellerId} for this particular eBay country.`;

export const buildErrorMessageForItem = ({ itemId }) =>
  `An error occured when trying to load item ${itemId}.`;
