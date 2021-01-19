import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { loadApplicationSettings } from "../../actions/applicationSettingsActions";
import ApplicationSettings from "./ApplicationSettings";
import LoadItem from "./LoadItem";
import SelectItem from "./SelectItem";

const ItemInput = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loadApplicationSettings());
    setLoading(false);
  }, [dispatch]);

  return (
    !loading && (
      <Form layout="vertical">
        <h2>{t("editor:item-input.heading")}</h2>
        <ApplicationSettings />
        <SelectItem />
        <LoadItem />
      </Form>
    )
  );
};

export default ItemInput;
