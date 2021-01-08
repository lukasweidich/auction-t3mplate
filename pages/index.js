import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";

import XD from "../components/i18ntest";

const index = () => {
  return (
    <>
      <TitleAndDesc title="index-title" desc="index-desc" i18nKey />
      <XD />
    </>
  );
};

export default index;
