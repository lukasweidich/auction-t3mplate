import { combineReducers } from "redux";
import applicationSettingsReducer from "./applicationSettingsReducer";
import itemReducer from "./itemReducer";
import userItemsReducer from "./userItemsReducer";

export const rootReducer = combineReducers({
  applicationSettings: applicationSettingsReducer,
  item: itemReducer,
  userItems: userItemsReducer,
});
