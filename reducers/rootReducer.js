import { combineReducers } from "redux";
import generalSettingsReducer from "./generalSettingsReducer";
import itemReducer from "./itemReducer";
import userItemsReducer from "./userItemsReducer";

export const rootReducer = combineReducers({
  generalSettings: generalSettingsReducer,
  item: itemReducer,
  userItems: userItemsReducer,
});
