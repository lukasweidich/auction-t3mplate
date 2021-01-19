import { Form, Checkbox, Button } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { buildMessageForStatus } from "../../src/utils/functions/statusMessageBuilder";
import InternalLink from "../misc/InternalLink";
import validate from "../../src/utils/functions/validateAxiosStatusCodes";

const LoadItem = () => {
  const applicationSettings = useSelector((state) => state.applicationSettings);
  const { itemId, siteId } = applicationSettings;

  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const isButtonDisabled = () => {
    return !(itemId && agreedToTerms);
  };

  const handleLoadItemButtonClick = async () => {
    const {
      data: { item, message, status },
    } = await axios.get(`/api/items/${itemId}?siteId=${siteId}`, {
      ...validate,
    });
    buildMessageForStatus({ ...{ status, message } });
    console.log(item);
  };

  return (
    <>
      <Form.Item>
        <Checkbox
          onChange={() => setAgreedToTerms(!agreedToTerms)}
          checked={false}
        >
          Ich habe die{" "}
          <InternalLink href="/terms">
            <a>AGB</a>
          </InternalLink>{" "}
          gelesen und akzeptiere sie.
        </Checkbox>
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "100%" }}
          disabled={isButtonDisabled()}
          onClick={handleLoadItemButtonClick}
        >
          Load item
        </Button>
      </Form.Item>
    </>
  );
};

export default LoadItem;
