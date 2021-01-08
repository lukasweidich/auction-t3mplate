import Cookies from "js-cookie";

export const saveCookie = ({ key, value }) => {
  Cookies.set(key, JSON.stringify(value), { expires: 7 });
};

export const getCookie = ({ key }) =>
  Cookies.get(key) ? JSON.parse(Cookies.get(key)) : null;

export const deleteCookie = ({ key }) => {
  Cookies.remove(key);
};
