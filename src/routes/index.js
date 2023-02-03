import * as React from "react";
import { useContext, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { SplashScreen } from "../screens/splash";
import { GlobalContext } from "../store/global";
import { PublicNavigation } from "./public";
import { PrivateNavigation } from "./private";


export const Main = () => {

  const { appInitiating, userInfo } = useContext(GlobalContext);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      {appInitiating ? <SplashScreen /> : null}
      {!appInitiating && !userInfo ?
        <PublicNavigation />
        : null}
      {!appInitiating && userInfo ?
        <PrivateNavigation />
        : null}
    </SafeAreaView>
  );

};
