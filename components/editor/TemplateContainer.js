import { Empty } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import TitleDivider from "../misc/TitleDivider";

const TemplateContainer = () => {
  const template = useSelector((state) => state.template);
  const { templateHTML } = template;
  return (
    <div>
      <TitleDivider title="Preview Template" level={4} />
      {templateHTML ? (
        <div
          dangerouslySetInnerHTML={{
            __html: templateHTML,
          }}
        />
      ) : (
        <Empty description="Bitte ein Template erstellen, um es ansehen und kopieren zu können." />
      )}
    </div>
  );
};

export default TemplateContainer;
