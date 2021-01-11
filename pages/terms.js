import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import TermsScreen from "../screens/TermsScreen";

const terms = () => {
  return (
    <>
      <TitleAndDesc title="terms:title" desc="terms:desc" i18nKey />
      <TermsScreen />
    </>
  );
};

export default terms;
