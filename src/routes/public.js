import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistrationScreen } from "../screens/registration";
import { View } from "react-native";
import { useTranslation } from "react-i18next";

export const PublicNavigation = (props) => {


  const StackNavigation = createNativeStackNavigator();

  const { t } = useTranslation();


  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigation.Navigator
          headerMode={"none"}
          initialRouteName={props.initialRouteName}>
          <StackNavigation.Screen
            navigationKey={'RegistrationScreen'}
            name={t("registrationScreen")}
            component={RegistrationScreen}
          />
        </StackNavigation.Navigator>
      </NavigationContainer>
    </View>
  );
};
