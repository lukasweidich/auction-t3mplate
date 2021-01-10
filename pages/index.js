import React from "react";
import TitleAndDesc from "../components/meta/TitleAndDesc";
import IndexScreen from "../screens/IndexScreen";

const index = () => {
  return (
    <>
      <TitleAndDesc title="index:title" desc="index:desc" i18nKey />
      <IndexScreen />
    </>
  );
};

export default index;
