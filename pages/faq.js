import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import FAQScreen from "../screens/FAQScreen";

const faq = () => {
  return (
    <>
      <TitleAndDesc title="faq:title" desc="faq:desc" i18nKey />
      <FAQScreen />
    </>
  );
};

export default faq;
