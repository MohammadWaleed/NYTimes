import * as React from "react";
import { Animated, Text, View } from "react-native";
import NYTLogo from "../../../assets/nyt-logo.svg";
import { useEffect, useRef } from "react";
import { style } from "./style";

export const SplashScreen = () => {

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(()=>{
    fadeIn();
    return ()=>{
      fadeOut();
    }
  });

  return (
    <Animated.View style={style.container(fadeAnim)}>
      <Text style={style.text}>NewYork Times</Text>
      <NYTLogo />
    </Animated.View>
  );

};
