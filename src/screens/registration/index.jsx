import * as React from "react";
import { useContext } from "react";
import { Alert, Button, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import "yup-phone";
import { useTranslation } from "react-i18next";
import { TextField } from "../../components/form/TextField";
import { DateField } from "../../components/form/DateField";
import { GlobalContext } from "../../store/global";
import { useDataStorage } from "../../hooks/useDataStorage";

export const RegistrationScreen = () => {

  const { t } = useTranslation();
  const { setUserInfo } = useContext(GlobalContext);
  const { saveUserInfo } = useDataStorage();

  const storeData = async (values) => {
    try {

      await saveUserInfo(values);

      setUserInfo({
        ...values,
      });

      Alert.alert(t("messages.success"), t("messages.registrationSuccess"), [
        { text: t("ok") },
      ]);

    } catch (e) {
      Alert.alert(t("messages.error"), t("messages.registrationError"), [
        { text: t("ok") },
      ]);
    }
  };


  const registrationSchema = Yup.object().shape({
    id: Yup.string().required(t("form.required")),
    email: Yup.string().email(t("form.emailFormat")).required(t("form.required")),
    phoneNumber: Yup.string().phone("JO", null, t("form.phoneFormat")),
    dateOfBirth: Yup.date().required(t("form.required")),
  });

  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>

      <Formik
        initialValues={{ email: "", phoneNumber: "", id: "", dateOfBirth: null }}
        validationSchema={registrationSchema}
        onSubmit={storeData}
      >
        {({ handleSubmit }) => (
          <View>

            <TextField label={t("form.id")} name={"id"} />

            <TextField label={t("form.email")} name={"email"} />

            <TextField label={t("form.phoneNumber")} name={"phoneNumber"} />

            <DateField label={t("form.dateOfBirth")} name={"dateOfBirth"} maximumDate={new Date()} />

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
};


