export const buildMessageForSellerItems = ({ items }) =>
  `Successfully loaded ${items.length} items.`;

export const buildMessageForItem = ({ item }) =>
  `Successfully loaded ${item.Title}.`;

export const buildErrorMessageForSellerItems = ({ sellerId }) =>
  `An error occured when trying to load items of ${sellerId}.`;
