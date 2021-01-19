import { Form, Row, Col, Switch, Select } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setSiteId,
  setItemIdIsKnown,
} from "../../actions/applicationSettingsActions";
import eBaySiteIdMappings from "../../src/utils/constants/ebaySiteIdMappings";

const ApplicationSettings = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const applicationSettings = useSelector((state) => state.applicationSettings);
  const { siteId, itemIdIsKnown } = applicationSettings;

  const siteIdSelectHandler = (value) => {
    dispatch(setSiteId({ siteId: value }));
  };

  const itemIdIsKnownToggleHandler = () => {
    dispatch(setItemIdIsKnown({ itemIdIsKnown: !itemIdIsKnown }));
  };

  return (
    <Row justify="space-between">
      <Col md={9} sm={11} xs={24}>
        <Form.Item label={t("editor:item-input.item-number-known")}>
          <Switch
            checked={itemIdIsKnown}
            onChange={itemIdIsKnownToggleHandler}
          />
        </Form.Item>
      </Col>
      <Col md={9} sm={11} xs={24}>
        <Form.Item label={t("editor:item-input.select-ebay-country")}>
          <Select
            showSearch
            optionFilterProp="children"
            value={siteId}
            onChange={siteIdSelectHandler}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            {eBaySiteIdMappings
              .sort((a, b) => a.siteName.localeCompare(b.siteName))
              .map((ebaySiteIdMapping) => (
                <Select.Option
                  key={ebaySiteIdMapping.siteId}
                  value={ebaySiteIdMapping.siteId}
                >
                  {ebaySiteIdMapping.siteName}
                </Select.Option>
              ))}
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default ApplicationSettings;
