import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import { DEFAULT_LANGUAGE } from "./src/utils/constants/applicationConstants";
const { composeWithDevTools } = require("redux-devtools-extension");
import { getCookie } from "./src/utils/functions/cookieUtils";
import { getFlagIconIdFromLanguage } from "./src/utils/functions/languageUtils";

const languageFromCookies = getCookie({ key: "language" }) ?? DEFAULT_LANGUAGE;

const initialState = {
  applicationSettings: {
    language: languageFromCookies,
    flagId: getFlagIconIdFromLanguage(languageFromCookies),
  },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
