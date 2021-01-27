import { defaultTheme } from "../constants/AtConstants";
import ReactDOMServer from "react-dom/server";

export const getCompleteHtmlDocumentForTemplate = ({
  template = <></>,
  theme = defaultTheme,
}) => `<html>
<head>        
<link rel="stylesheet" type="text/css" href="https://www.auction-template.com/styles/bootstrap.css"/>
<link rel="stylesheet" type="text/css" href="https://www.auction-template.com/styles/${theme}.css"/>
</head>
<body>
${ReactDOMServer.renderToString(template)}
</body>
</html>`;
