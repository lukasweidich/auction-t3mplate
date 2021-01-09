import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";

const notFound = () => {
  return (
    <>
      <TitleAndDesc title="404:title" desc="404:desc" i18nKey />
      <p>404</p>
    </>
  );
};

export default notFound;
