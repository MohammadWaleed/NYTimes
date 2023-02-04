import * as React from "react";
import { memo } from "react";
import { View } from "react-native";


export const HorizontalLine = memo(() => {
  return (
    <View style={{width:'100%',borderWidth:0.5,borderColor:'lightgrey',marginVertical:5}}></View>
  );
});
