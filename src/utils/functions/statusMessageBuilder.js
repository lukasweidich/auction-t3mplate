import { message as antdMessage } from "antd";
import {
  EBAY_FAILURE,
  EBAY_SUCCESS,
  EBAY_WARNING,
} from "../constants/ebayApiStatusCodes";

export const buildMessageForStatus = ({ message, status }) => {
  switch (status) {
    case EBAY_SUCCESS:
      antdMessage.success(message);
      break;
    case EBAY_WARNING:
      antdMessage.warning(message);
      break;
    case EBAY_FAILURE:
      antdMessage.error(message);
      break;
    default:
      break;
  }
};
