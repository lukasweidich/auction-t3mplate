import { Button, Space } from "antd";
import axios from "axios";
import React from "react";
import { useTranslation } from "react-i18next";
import InternalLink from "../components/misc/InternalLink";
import validateAxiosStatusCodes from "../src/utils/functions/validateAxiosStatusCodes";

const IndexScreen = () => {
  const { t } = useTranslation();

  const handleFetch = async (endpoint) => {
    const { data } = await axios.get(`/api${endpoint}`, {
      ...validateAxiosStatusCodes,
    });
    console.log(data);
  };

  return (
    <>
      {/* <h1>{t("index:heading")}</h1>
      <h3>{t("index:subheading")}</h3>
      <Button type="primary">
        <InternalLink href="/editor">
          <a>Create Templates</a>
        </InternalLink>
      </Button> */}
      <Space>
        <Button onClick={() => handleFetch("/items/xd")}>/api/items/xd</Button>
        <Button onClick={() => handleFetch("/items/254819582666")}>
          /api/items/254819582666
        </Button>
        <Button onClick={() => handleFetch("/items/254819582666?siteId=77")}>
          /api/items/254819582666?siteId=77
        </Button>
      </Space>
      <Space>
        <Button onClick={() => handleFetch("/sellers/trademax---")}>
          /api/sellers/trademax---
        </Button>
        <Button onClick={() => handleFetch("/sellers/trademax24")}>
          /api/sellers/trademax24
        </Button>
        <Button onClick={() => handleFetch("/sellers/trademax24?siteId=77")}>
          /api/sellers/trademax24?siteId=77
        </Button>
      </Space>
    </>
  );
};

export default IndexScreen;
