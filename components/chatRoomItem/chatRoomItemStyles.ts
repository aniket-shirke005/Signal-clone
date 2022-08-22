import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  badgeContainer: {
    alignItems: "center",
    backgroundColor: "#3777f0",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    left: 57,
    top: 12,
    position: "absolute",
    borderWidth: 0.5,
    borderColor: "#111",
  },
  badgeText: {
    fontSize: 12,
    color: "#f5f5f5",
  },
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
