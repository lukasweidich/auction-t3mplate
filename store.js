import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_COOKIE_NAME,
  SITE_ID_COOKIE_NAME,
} from "./src/utils/constants/applicationConstants";
import { DEFAULT_SITE_ID } from "./src/utils/constants/ebayApiDefaults";
const { composeWithDevTools } = require("redux-devtools-extension");
import { getCookie } from "./src/utils/functions/cookieUtils";
import { getFlagIconIdFromLanguage } from "./src/utils/functions/languageUtils";

const languageFromCookies =
  getCookie({ key: LANGUAGE_COOKIE_NAME }) ?? DEFAULT_LANGUAGE;

const siteIdFromCookies =
  getCookie({ key: SITE_ID_COOKIE_NAME }) ?? DEFAULT_SITE_ID;

const initialState = {
  applicationSettings: {
    language: languageFromCookies,
    flagId: getFlagIconIdFromLanguage(languageFromCookies),
    siteId: siteIdFromCookies,
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
