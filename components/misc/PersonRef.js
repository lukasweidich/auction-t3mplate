import React from "react";

import { GithubOutlined, LinkedinFilled } from "@ant-design/icons";
import ExternalLink from "../misc/ExternalLink";

const PersonRef = ({ name, github, linkedin }) => {
  return (
    <p style={{ margin: 0 }}>
      {name}{" "}
      <ExternalLink href={linkedin} noIcon>
        <LinkedinFilled />
      </ExternalLink>{" "}
      <ExternalLink href={github} noIcon>
        <GithubOutlined />
      </ExternalLink>
    </p>
  );
};

export default PersonRef;
