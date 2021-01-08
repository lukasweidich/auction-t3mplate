import React from "react";

const ExternalLink = ({ children, noIcon, internal, ...rest }) => {
  return (
    <a
      {...rest}
      target={!internal ? "_blank" : ""}
      rel={!internal ? "noopener noreferrer" : ""}
      style={{ fontWeight: 600 }}
    >
      {children} {!noIcon && <i className="fa fa-external-link-alt" />}
    </a>
  );
};

export default ExternalLink;
