import { Col, Empty, Row, Select, Form, Button, Card } from "antd";
const { Meta } = Card;
const { Option } = Select;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTemplate,
  setTemplateTheme,
} from "../../actions/templateActions";
import TitleDivider from "../misc/TitleDivider";
import { capitalizeFirstLetter } from "../../src/utils/functions/prettyPrint";
import { themes } from "../../src/utils/constants/AtConstants";
import Solstorm from "../../auction-templates/templates/Solstorm";
import { getCompleteHtmlDocumentForTemplate } from "../../src/utils/functions/auctionTemplateHelper";

const TemplateConfigurator = () => {
  const dispatch = useDispatch();
  const template = useSelector((state) => state.template);
  const { item, templateTheme } = template;

  function handleChange(value) {
    console.log(`selected ${value}`);
    dispatch(setTemplateTheme({ templateTheme: value }));
  }

  const handleCreateTemplate = () => {
    dispatch(
      createTemplate({
        templateHTML: getCompleteHtmlDocumentForTemplate({
          template: <Solstorm item={item} />,
          theme: templateTheme,
        }),
      })
    );
  };

  return (
    <>
      <TitleDivider title="Configure Template" level={4} />
      {item && (
        <Row gutter={[32, 32]}>
          <Col sm={12} xs={24}>
            <Form.Item label="Select theme for template">
              <Select
                style={{ width: "100%" }}
                showSearch
                placeholder="Select theme for template"
                optionFilterProp="children"
                onChange={handleChange}
                value={templateTheme ?? null}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
              >
                {themes
                  .sort((a, b) => a.localeCompare(b))
                  .map((themeName) => (
                    <Select.Option key={themeName} value={themeName}>
                      {capitalizeFirstLetter(themeName)}
                    </Select.Option>
                  ))}
              </Select>
            </Form.Item>
          </Col>
          <Col sm={12} xs={24}>
            <Form.Item>
              <Button
                type="primary"
                style={{ width: "100%" }}
                onClick={handleCreateTemplate}
              >
                Template erstellen
              </Button>
            </Form.Item>
          </Col>
        </Row>
      )}
    </>
  );
};

export default TemplateConfigurator;
