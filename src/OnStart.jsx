import * as React from "react";
import { useContext, useEffect } from "react";
import { GlobalContext } from "./store/global";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { ar } from "./locales/ar";
import { en } from "./locales/en";


export const OnStart = ({ children }) => {

  const { setState } = useContext(GlobalContext);


  const initLanguage = async () => {
    await i18n
      .use(initReactI18next)
      .init({
        compatibilityJSON: "v3",
        resources: {
          en: {translation :en},
          ar: {translation :ar},
        },
        lng: "en",
        fallbackLng: "en",
        debug: true,
        interpolation: {
          escapeValue: false,
        },
      });
  };

  const initApp = async () => {

    await initLanguage();

    setTimeout(() => {

      //TODO: Get saved user info from storage and set it

      setState({
        appInitiating: false,
      });
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
