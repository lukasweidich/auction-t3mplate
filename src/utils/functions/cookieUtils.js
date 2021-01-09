import Cookies from "js-cookie";
import { COOKIE_DURATION_IN_DAYS } from "../constants/applicationConstants";

export const saveCookie = ({ key, value }) => {
  Cookies.set(key, JSON.stringify(value), { expires: COOKIE_DURATION_IN_DAYS });
};

export const getCookie = ({ key }) =>
  Cookies.get(key) ? JSON.parse(Cookies.get(key)) : null;

export const deleteCookie = ({ key }) => {
  Cookies.remove(key);
};
