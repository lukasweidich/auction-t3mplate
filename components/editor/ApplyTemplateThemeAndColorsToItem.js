import React from "react";
import Solstorm from "../../auction-templates/templates/Solstorm";

const ApplyTemplateAndColors = ({
  item,
  template = "solstorm",
  theme = "flatly",
  colors = [],
}) => {
  {
    switch (template) {
      case "solstorm":
        return <Solstorm {...{ item, theme, colors }} />;
      default:
        break;
    }
  }
};

export default ApplyTemplateAndColors;
