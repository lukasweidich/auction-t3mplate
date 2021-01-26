import { Button, Result } from "antd";
import React from "react";
import ExternalLink from "../components/misc/ExternalLink";
import InternalLink from "../components/misc/InternalLink";

const NotFoundScreen = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={[
        <InternalLink href="/">
          <Button type="primary">Back Home</Button>
        </InternalLink>,
        <ExternalLink href="https://quikk.de/kontakt" noIcon>
          <Button>Contact</Button>
        </ExternalLink>,
      ]}
    />
  );
};

export default NotFoundScreen;
