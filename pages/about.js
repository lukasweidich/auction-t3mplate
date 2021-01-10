import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import AboutScreen from "../screens/AboutScreen";

const about = () => {
  return (
    <>
      <TitleAndDesc title="about:title" desc="about:desc" i18nKey />
      <AboutScreen />
    </>
  );
};

export default about;
