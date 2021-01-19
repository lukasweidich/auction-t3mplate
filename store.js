import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import {
  DEFAULT_LANGUAGE,
  ITEM_ID_COOKIE_NAME,
  ITEM_ID_KNOWN_COOKIE_NAME,
  LANGUAGE_COOKIE_NAME,
  SELLER_COOKIE_NAME,
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

const itemIdIsKnownFromCookies =
  getCookie({ key: ITEM_ID_KNOWN_COOKIE_NAME }) ?? false;

const sellerFromCookies = getCookie({ key: SELLER_COOKIE_NAME });

const initialState = {
  applicationSettings: {
    language: languageFromCookies,
    flagId: getFlagIconIdFromLanguage(languageFromCookies),
    siteId: siteIdFromCookies,
    itemIdIsKnown: itemIdIsKnownFromCookies,
    seller: sellerFromCookies,
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
