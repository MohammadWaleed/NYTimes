import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

  container: (fadeAnim) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    opacity: fadeAnim,
  }),

  text: {
    fontSize: 25,
    marginBottom: 10,
  },

});
