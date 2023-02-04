import * as React from "react";
import { Alert, Button, DevSettings, Text, View } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../../store/global";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { style } from "./style";
import { HorizontalLine } from "../../components/HorizontalLine";
import { useDataStorage } from "../../hooks/useDataStorage";

export const MoreScreen = () => {

  const { userInfo,setUserInfo} = useContext(GlobalContext);

  const { t, i18n } = useTranslation();

  const { saveLanguage, clearUserInfo } = useDataStorage();

  const setLanguage = async (language) => {
    await saveLanguage(language);
    DevSettings.reload();
  };

  const setArabicLanguage = () => {
    setLanguage("ar");
  };

  const setEnglishLanguage = () => {
    setLanguage("en");
  };

  const logout = async ()=>{
    await clearUserInfo();
    setUserInfo(null);

    Alert.alert(t("messages.success"), t("messages.logoutSuccess"), [
      { text: t("ok") },
    ]);

  }

  return (
    <View style={{ flex: 1, justifyContent: "center", paddingHorizontal: 20 }}>

      <View style={style.infoContainer}>
        <Text style={style.infoText}>{t("form.id")}: {userInfo.id}</Text>
        <Text style={style.infoText}>{t("form.email")}: {userInfo.email}</Text>
        <Text style={style.infoText}>{t("form.phoneNumber")}: {userInfo.phoneNumber}</Text>
        <Text style={style.infoText}>{t("form.dateOfBirth")}: {moment(userInfo.dateOfBirth).format("Y/M/d")}</Text>
      </View>

      <HorizontalLine />

      <View style={style.optionsContainer}>

        <View style={style.languageContainer}>
          <Text style={style.languageText}>{t("selectLanguage")}</Text>
          <View style={style.languageButtonsContainer}>
            <Button disabled={i18n.language == "en"} onPress={setEnglishLanguage} title={t("en")} />
            <Button disabled={i18n.language == "ar"} onPress={setArabicLanguage} title={t("ar")} />
          </View>
        </View>

        <HorizontalLine />

        <View style={style.logoutContainer}>
          <Button onPress={logout} title={t("logout")} />
        </View>
      </View>
    </View>
  );


};
