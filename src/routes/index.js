import * as React from "react";
import { useContext } from "react";
import { SafeAreaView } from "react-native";
import { SplashScreen } from "../screens/splash";
import { GlobalContext } from "../store/global";
import { PublicNavigation } from "./public";
import { PrivateNavigation } from "./private";


export const Main = () => {

  const { state } = useContext(GlobalContext);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {state.appInitiating ? <SplashScreen /> : null}
      {!state.appInitiating && !state.userInfo ?
        <PublicNavigation />
        : null}
      {!state.appInitiating && state.userInfo ?
        <PrivateNavigation />
        : null}
    </SafeAreaView>
  );

};
