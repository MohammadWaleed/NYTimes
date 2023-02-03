import * as React from "react";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import { useFormikContext } from "formik";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { style } from "./style";
import moment from "moment";
import { useTranslation } from "react-i18next";


export const DateField = ({ name, value, label, maximumDate, ...props }) => {

  const { touched, errors, values, setFieldValue } = useFormikContext();
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <View style={style.container(errors[name] && touched[name])}>

      <View style={style.datePickerLabelContainer}>
        <Text>{label}: {values[name] ? moment(values[name]).format("Y/M/D") : t("form.selectDate")}</Text>
        <Button title={t("form.openDateModal")} onPress={() => {
          setOpen(true);
        }} />
      </View>
      <DateTimePickerModal
        maximumDate={maximumDate}
        isVisible={open}
        mode="date"
        onConfirm={date => {
          setFieldValue(name, date);
          setOpen(false);
        }}
        onCancel={() => {
          setOpen(false);
        }}
        locale={i18n.language}
        {...props}
      />
      {errors[name] && touched[name] ? (
        <Text style={style.errorText}>{errors[name]}</Text>
      ) : null}


    </View>
  );

};
