import { combineReducers } from "redux";
import applicationSettingsReducer from "./applicationSettingsReducer";
import templateReducer from "./templateReducer";

export const rootReducer = combineReducers({
  applicationSettings: applicationSettingsReducer,
  template: templateReducer,
});
