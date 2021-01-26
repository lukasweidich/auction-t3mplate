import { Form, Row, Col, Switch, Select } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  setSiteId,
  setItemIdIsKnown,
} from "../../actions/applicationSettingsActions";
import eBaySiteIdMappings from "../../src/utils/constants/ebaySiteIdMappings";
import Tooltip from "../../components/misc/Tooltip";

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
    <Row gutter={[32, 32]}>
      <Col sm={12} xs={24}>
        <Form.Item
          label={
            <Tooltip tooltipText="editor:item-input.item-number-known-tip">
              <span>{t("editor:item-input.item-number-known")}</span>
            </Tooltip>
          }
        >
          <Switch
            checked={itemIdIsKnown}
            onChange={itemIdIsKnownToggleHandler}
          />
        </Form.Item>
      </Col>
      <Col sm={12} xs={24}>
        <Form.Item
          label={
            <Tooltip tooltipText="editor:item-input.select-ebay-country-tip">
              <span>{t("editor:item-input.select-ebay-country")}</span>
            </Tooltip>
          }
        >
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
