import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RegistrationScreen } from "../screens/registration";
import { View } from "react-native";

export const PublicNavigation = (props) => {


  const StackNavigation = createNativeStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigation.Navigator
          headerMode={"none"}
          initialRouteName={props.initialRouteName}>
          <StackNavigation.Screen
            name={"RegistrationScreen"}
            component={RegistrationScreen}
          />
        </StackNavigation.Navigator>
      </NavigationContainer>
    </View>
  );
};
