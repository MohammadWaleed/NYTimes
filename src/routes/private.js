import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardScreen } from "../screens/dashboard";
import { MoreScreen } from "../screens/more";

export const PrivateNavigation = (props) => {


  const TabNavigation = createBottomTabNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <TabNavigation.Navigator
          headerMode={"none"}
          initialRouteName={props.initialRouteName}>
          <TabNavigation.Screen
            name={"DashboardScreen"}
            component={DashboardScreen}
          />
          <TabNavigation.Screen
            name={"MoreScreen"}
            component={MoreScreen}
          />
        </TabNavigation.Navigator>
      </NavigationContainer>
    </View>
  );
};


