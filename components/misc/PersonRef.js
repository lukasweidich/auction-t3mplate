import React from "react";
import { Card, Avatar, Col } from "antd";
const { Meta } = Card;
import {
  GithubOutlined,
  LinkedinFilled,
  MailOutlined,
} from "@ant-design/icons";
import ExternalLink from "../misc/ExternalLink";
import { useTranslation } from "react-i18next";
const PersonRef = ({
  name,
  github = "",
  linkedin = "",
  avatar = "",
  desc = "",
  mail = "",
}) => {
  const { t } = useTranslation();

  desc = !!desc ? desc : t("about:dev");
  return (
    <Col xs={24} sm={24} md={12}>
      <Card
        actions={[
          <>
            {mail && (
              <ExternalLink href={mail} noIcon>
                <MailOutlined />
              </ExternalLink>
            )}
          </>,
          <>
            {github && (
              <ExternalLink href={github} noIcon>
                <GithubOutlined />
              </ExternalLink>
            )}
          </>,
          <>
            {linkedin && (
              <ExternalLink href={linkedin} noIcon>
                <LinkedinFilled />
              </ExternalLink>
            )}
          </>,
        ]}
      >
        <Meta
          avatar={<Avatar src={avatar} size={42} />}
          title={name}
          description={desc}
        />
      </Card>
    </Col>
  );
};

export default PersonRef;
