import { Empty } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import TitleDivider from "../misc/TitleDivider";

const ContentCustomizer = () => {
  const template = useSelector((state) => state.template);
  const { item } = template;
  return (
    <>
      <TitleDivider title="Customize Content" level={4} />
      {item && <p>coming soon!</p>}
    </>
  );
};

export default ContentCustomizer;
