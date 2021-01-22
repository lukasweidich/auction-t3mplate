import { ExportOutlined } from "@ant-design/icons";
import React from "react";

const ExternalLink = ({
  children,
  noIcon = false,
  internal = false,
  ...rest
}) => {
  return (
    <a
      {...rest}
      target={!internal ? "_blank" : ""}
      rel={!internal ? "noopener noreferrer" : ""}
    >
      {children} {!noIcon && <ExportOutlined />}
    </a>
  );
};

export default ExternalLink;
