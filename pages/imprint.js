import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import ImprintScreen from "../screens/ImprintScreen";

const imprint = () => {
  return (
    <>
      <TitleAndDesc title="imprint:title" desc="imprint:desc" i18nKey />
      <ImprintScreen />
    </>
  );
};

export default imprint;
