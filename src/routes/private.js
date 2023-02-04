import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DashboardScreen } from "../screens/dashboard";
import { MoreScreen } from "../screens/more";
import { useTranslation } from "react-i18next";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostDetailsScreen } from "../screens/postDetails";

export const PrivateNavigation = (props) => {

  const TabNavigation = createBottomTabNavigator();
  const StackNavigation = createNativeStackNavigator();

  const { t } = useTranslation();

  const DashboardRoutes = () => {
    return (
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          navigationKey={"DashboardScreen"}
          name={t("dashboardScreen")}
          component={DashboardScreen}
          options={{
            tabBarIcon:({ color, size }) => (
              <MaterialCommunityIcons name="post-outline" color={color} size={size} />
            )
          }}
        />
        <StackNavigation.Screen
          navigationKey={"DetailsScreen"}
          name={t("detailsScreen")}
          component={PostDetailsScreen}
          options={{
            tabBarIcon:({ color, size }) => (
              <MaterialCommunityIcons name="post-outline" color={color} size={size} />
            )
          }}
        />
      </StackNavigation.Navigator>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <TabNavigation.Navigator
          headerMode={"none"}
          initialRouteName={props.initialRouteName}>
          <TabNavigation.Screen
            navigationKey={"DashboardScreen"}

            name={"Dashboard"}
            component={DashboardRoutes}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="post-outline" color={color} size={size} />
              ),
            }}
          />
          <TabNavigation.Screen
            navigationKey={"MoreScreen"}
            name={t("moreScreen")}
            component={MoreScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="menu" color={color} size={size} />
              ),
            }}
          />
        </TabNavigation.Navigator>
      </NavigationContainer>
    </View>
  );
};


