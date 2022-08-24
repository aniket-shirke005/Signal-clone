import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  flex: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "grey",
  },
  name: {
    fontSize: 18,
    color: "#f5f5f5",
    fontWeight: "bold",
    marginBottom: 3,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
});

export default styles;
