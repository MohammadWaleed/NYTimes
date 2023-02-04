import * as React from "react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./store/global";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar } from "./locales/ar";
import { en } from "./locales/en";
import { useDataStorage } from "./hooks/useDataStorage";
import moment from "moment";
import "moment/min/locales";
import { I18nManager } from "react-native";

export const OnStart = ({ children }) => {

  const { setAppInitiating, setUserInfo } = useContext(GlobalContext);

  const { getUserInfo, getLanguage } = useDataStorage();

  const initLanguage = async () => {

    const language = await getLanguage();

    moment.locale(language);

    await i18n
      .use(initReactI18next)
      .init({
        compatibilityJSON: "v3",
        resources: {
          en: { translation: en },
          ar: { translation: ar },
        },
        lng: language,
        fallbackLng: "en",
        debug: false,
        interpolation: {
          escapeValue: false,
        },
      });

    if(language == 'ar'){
      I18nManager.forceRTL(false);
    }else{
      I18nManager.forceRTL(true);
    }
  };

  const getData = async () => {

    const userInfo = await getUserInfo();

    if (userInfo) {
      setUserInfo({
        ...userInfo,
      });
    }

  };


  const initApp = async () => {

    await getData();

    await initLanguage();

    setTimeout(() => {
      setAppInitiating(false);
    }, 1000);
  };

  useEffect(() => {
    initApp();
  }, []);

  return (
    <>
      {children}
    </>
  );

};
