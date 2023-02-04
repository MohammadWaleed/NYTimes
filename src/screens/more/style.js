import { StyleSheet } from "react-native";

export const style = StyleSheet.create({

  infoText: {
    marginVertical: 5,
  },

  infoContainer: {
    flex: 2,
    justifyContent: "center",
  },

  optionsContainer: {
    flex: 1,
  },

  languageContainer: {
    flex: 1,
    borderWidth: 0,
    justifyContent: "center",
    alignItems: "center",
  },

  languageText: {
    flex: 1,
  },

  languageButtonsContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
  },

  logoutContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
