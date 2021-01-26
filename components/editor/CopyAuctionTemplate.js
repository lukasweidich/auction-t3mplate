import { Affix, Button } from "antd";
import React from "react";

const CopyAuctionTemplate = () => {
  return (
    <Affix offsetBottom={10}>
      <Button type="primary" onClick={() => alert("xd")}>
        Auktionsvorlage kopieren
      </Button>
    </Affix>
  );
};

export default CopyAuctionTemplate;
