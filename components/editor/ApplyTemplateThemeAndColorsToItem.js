import React from "react";
import Solstorm from "../../auction-templates/templates/solstorm";

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
