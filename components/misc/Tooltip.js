import React from "react";
import { Tooltip as AntdTooltip } from "antd";
import { QuestionOutlined } from "@ant-design/icons";

const Tooltip = ({ children, tooltipText }) => {
  return (
    <>
      {children}{" "}
      <AntdTooltip title={tooltipText}>
        <QuestionOutlined />
      </AntdTooltip>
    </>
  );
};

export default Tooltip;
