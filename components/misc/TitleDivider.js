import { Divider, Typography } from "antd";
import React from "react";

const TitleDivider = ({ title, level = 2, onlyTitle = false }) => {
  const Title = () => {
    return <Typography.Title level={level}>{title}</Typography.Title>;
  };
  return (
    <>
      {onlyTitle ? (
        <Title />
      ) : (
        <Divider orientation="left">
          <Title />
        </Divider>
      )}
    </>
  );
};

export default TitleDivider;
