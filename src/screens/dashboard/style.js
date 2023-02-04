import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  listContainer: {
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  itemContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    marginVertical: 10,
    overflow: "hidden",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 5,
    height: 50,
    backgroundColor: "white",
  },
  tab: (isActive) => ({
    borderBottomWidth: isActive ? 3 : 0,
    borderBottomColor: "lightblue",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }),
  postImage: {
    width: "100%",
    height: 100,
  },
  postInfo: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  sectionHeaderContainer: {
    backgroundColor: "lightgrey",
    borderRadius: 5,
    padding: 5,
  },
  sectionText: {
    textAlign: "center",
  },
});
