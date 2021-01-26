import { Affix, Button, message } from "antd";
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useSelector } from "react-redux";

const CopyAuctionTemplate = () => {
  const template = useSelector((state) => state.template);
  const { templateHTML } = template;
  return (
    <Affix offsetBottom={10}>
      <CopyToClipboard
        text={templateHTML}
        onCopy={() => message.success("Auction Template copied")}
      >
        <Button type="primary">Auktionsvorlage kopieren</Button>
      </CopyToClipboard>
    </Affix>
  );
};

export default CopyAuctionTemplate;
