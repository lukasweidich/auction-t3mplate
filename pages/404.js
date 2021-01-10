import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import NotFoundScreen from "../screens/404Screen";

const notFound = () => {
  return (
    <>
      <TitleAndDesc title="404:title" desc="404:desc" i18nKey />
      <NotFoundScreen />
    </>
  );
};

export default notFound;
