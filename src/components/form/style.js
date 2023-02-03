import { StyleSheet } from "react-native";


export const style = StyleSheet.create({
  container: (isError) => ({
    marginVertical: 10,
    padding: 3,
    borderWidth: isError ? 1 : 0,
    borderColor: "red",
    borderRadius: 5,
  }),

  errorText: {
    color: "red",
  },

  datePickerLabelContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
