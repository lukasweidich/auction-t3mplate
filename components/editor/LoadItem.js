import { Form, Checkbox, Button } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buildMessageForStatus } from "../../src/utils/functions/statusMessageBuilder";
import InternalLink from "../misc/InternalLink";
import validate from "../../src/utils/functions/validateAxiosStatusCodes";
import { setItem } from "../../actions/templateActions";

const LoadItem = () => {
  const dispatch = useDispatch();

  const applicationSettings = useSelector((state) => state.applicationSettings);
  const { itemId, siteId } = applicationSettings;

  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const isButtonDisabled = () => {
    return !(itemId && agreedToTerms);
  };

  const handleLoadItemButtonClick = async () => {
    setLoading(true);
    const {
      data: { item, message, status },
    } = await axios.get(`/api/items/${itemId}?siteId=${siteId}`, {
      ...validate,
    });
    buildMessageForStatus({ ...{ status, message } });
    dispatch(setItem({ item }));
    setLoading(false);
  };

  return (
    <>
      <Form.Item>
        <Checkbox
          onChange={() => setAgreedToTerms(!agreedToTerms)}
          checked={agreedToTerms}
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
          loading={loading}
        >
          Load item
        </Button>
      </Form.Item>
    </>
  );
};

export default LoadItem;
