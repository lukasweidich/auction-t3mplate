import { Empty } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Solstorm from "../../auction-templates/templates/solstorm";

const TemplateContainer = () => {
  const template = useSelector((state) => state.template);
  const { item } = template;
  return (
    <div>
      {item ? (
        <Solstorm item={item} />
      ) : (
        <Empty description="Kein Item eingeladen; bitte laden Sie ein Item ein." />
      )}
    </div>
  );
};

export default TemplateContainer;
