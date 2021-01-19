import Cookies from "js-cookie";
import {
  COOKIE_CONSENT_NAME,
  COOKIE_DURATION_IN_DAYS,
} from "../constants/applicationConstants";

export const saveCookie = ({ key, value, cc = false }) => {
  if (isCookieAvailable({ key: COOKIE_CONSENT_NAME }) || cc) {
    console.log(`saved cookie ${key}: ${value}`);
    Cookies.set(key, JSON.stringify(value), {
      expires: COOKIE_DURATION_IN_DAYS,
    });
  }
};

export const getCookie = ({ key }) =>
  Cookies.get(key) ? JSON.parse(Cookies.get(key)) : null;

export const isCookieAvailable = ({ key }) => Boolean(getCookie({ key }));

export const deleteCookie = ({ key }) => {
  Cookies.remove(key);
};

export const deleteAllCookies = () => {
  const allCookies = Cookies.get();
  const allCookieKeys = Array.from(Object.keys(allCookies));
  allCookieKeys.forEach((cookieKey) => {
    deleteCookie({ key: cookieKey });
  });
};
