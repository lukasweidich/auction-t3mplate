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

const Solstorm = ({ item }) => {
  return (
    <>
      <ImagePreview images={item?.PictureURL} />
    </>
  );
};

export default Solstorm;
