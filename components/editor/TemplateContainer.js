import { Empty } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import Solstorm from "../../auction-templates/templates/Solstorm";
import ApplyTemplateThemeAndColorsToItem from "./ApplyTemplateThemeAndColorsToItem";
import TemplateRenderer from "./TemplateRenderer";

const TemplateContainer = () => {
  const template = useSelector((state) => state.template);
  const {
    item,
    // config: { templateName, colors, theme },
  } = template;
  return (
    <div>
      {item ? (
        <>
          {/* <TemplateRenderer
          jsxElement={ApplyTemplateThemeAndColorsToItem({
            item,
            // template: templateName,
            // colors,
            // theme,
          })}
        /> */}
          <Solstorm {...{ item }} />
        </>
      ) : (
        <Empty description="Kein Item eingeladen; bitte laden Sie ein Item ein." />
      )}
    </div>
  );
};

export default TemplateContainer;
