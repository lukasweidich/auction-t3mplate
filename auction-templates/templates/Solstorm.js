import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Tabs,
  Tab,
  Badge,
  ListGroup,
} from "react-bootstrap";
import TemplateDescription from "../components/TemplateDescription";
import TemplateHeader from "../components/TemplateHeader";
import ImagePreview from "../components/TemplateImagePreview";
import Head from "next/head";

const Solstorm = ({ item, theme = "flatly", colors = [] }) => {
  return (
    <div id="at">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="../../public/styles/bootstrap.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="../../public/styles/flatly.css"
        />
      </Head>
      <TemplateHeader />
      <ImagePreview images={item?.PictureURL} />
      <TemplateDescription />
    </div>
  );
};

export default Solstorm;
