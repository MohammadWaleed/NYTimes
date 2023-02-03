import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardScreen } from "../screens/dashboard";
import { MoreScreen } from "../screens/more";
import { useTranslation } from "react-i18next";

export const PrivateNavigation = (props) => {

  const TabNavigation = createBottomTabNavigator();

  const { t } = useTranslation();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <TabNavigation.Navigator
          headerMode={"none"}
          initialRouteName={props.initialRouteName}>
          <TabNavigation.Screen
            navigationKey={"DashboardScreen"}
            name={t("dashboardScreen")}
            component={DashboardScreen}
          />
          <TabNavigation.Screen
            navigationKey={"MoreScreen"}
            name={t("moreScreen")}
            component={MoreScreen}
          />
        </TabNavigation.Navigator>
      </NavigationContainer>
    </View>
  );
};


