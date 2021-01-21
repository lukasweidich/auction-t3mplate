import React from "react";
import { Tooltip as AntdTooltip } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

const Tooltip = ({ children, tooltipText }) => {
  return (
    <span>
      {children}{" "}
      <span>
        <AntdTooltip title={tooltipText}>
          <QuestionCircleOutlined />
        </AntdTooltip>
      </span>
    </span>
  );
};

export default Tooltip;
