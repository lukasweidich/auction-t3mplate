import { combineReducers } from "redux";
import applicationSettingsReducer from "./applicationSettingsReducer";

export const rootReducer = combineReducers({
  applicationSettings: applicationSettingsReducer,
});
