import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import PrivacyScreen from "../screens/PrivacyScreen";

const privacy = () => {
  return (
    <>
      <TitleAndDesc title="privacy:title" desc="privacy:desc" i18nKey />
      <PrivacyScreen />
    </>
  );
};

export default privacy;
