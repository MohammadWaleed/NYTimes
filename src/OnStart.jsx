import * as React from "react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./store/global";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar } from "./locales/ar";
import { en } from "./locales/en";
import AsyncStorage from "@react-native-async-storage/async-storage";


export const OnStart = ({ children }) => {

  const { setAppInitiating, setUserInfo } = useContext(GlobalContext);


  const initLanguage = async () => {
    await i18n
      .use(initReactI18next)
      .init({
        compatibilityJSON: "v3",
        resources: {
          en: { translation: en },
          ar: { translation: ar },
        },
        lng: "en",
        fallbackLng: "en",
        debug: false,
        interpolation: {
          escapeValue: false,
        },
      });
  };

  const getData = async () => {
    try {
      const values = await AsyncStorage.getItem("userInfo");
      const parsed = JSON.parse(values);
      if (parsed !== null) {
        setUserInfo({
          ...parsed,
        });
      }
    } catch (e) {
      // Fail Silently
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
