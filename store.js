import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
const { composeWithDevTools } = require("redux-devtools-extension");
import { getCookie } from "./src/utils/functions/cookieUtils";

const languageFromCookies = getCookie({ key: "language" });

const initialState = {
  applicationSettings: { language: languageFromCookies },
};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
