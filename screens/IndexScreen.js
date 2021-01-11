import { Button } from "antd";
import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";
import InternalLink from "../components/misc/InternalLink";
import validateAxiosStatusCodes from "../src/utils/functions/validateAxiosStatusCodes";

const IndexScreen = () => {
  const { t } = useTranslation();

  const handleFetch = async () => {
    const { data } = await axios.get("/api/item/233699139420", {
      ...validateAxiosStatusCodes,
    });
    console.log(data);
  };

  return (
    <>
      <h1>{t("index:heading")}</h1>
      <h3>{t("index:subheading")}</h3>
      <Button type="primary">
        <InternalLink href="/editor">
          <a>Create Templates</a>
        </InternalLink>
      </Button>
      <Button type="primary" onClick={handleFetch}>
        FETCH
      </Button>
    </>
  );
};

export default IndexScreen;
