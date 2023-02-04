import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  itemContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: 10,
    overflow: "hidden",
  },
  postImage: {
    width: "100%",
    height: 300,
  },
  postInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
});
