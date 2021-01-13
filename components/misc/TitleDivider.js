import { Divider, Typography } from "antd";
import React from "react";

const TitleDivider = ({ title, level = 2 }) => {
  return (
    <Divider orientation="left">
      <Typography.Title level={level}>{title}</Typography.Title>
    </Divider>
  );
};

export default TitleDivider;
