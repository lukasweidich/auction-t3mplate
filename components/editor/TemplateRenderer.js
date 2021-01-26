import React from "react";
import ReactDOMServer from "react-dom/server";

const TemplateRenderer = ({ jsxElement = <p>fill me</p> }) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: ReactDOMServer.renderToString(jsxElement),
      }}
    />
  );
};

export default TemplateRenderer;
