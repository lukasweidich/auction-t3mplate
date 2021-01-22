import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import CookiesScreen from "../screens/CookiesScreen";

const cookies = () => {
  return (
    <>
      <TitleAndDesc title="cookies:title" desc="cookies:desc" i18nKey />
      <CookiesScreen />
    </>
  );
};

export default cookies;
