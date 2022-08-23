import { View, Text, StyleSheet } from "react-native";
import React from "react";

const blue = "#3777f0";
const grey = "#ccc";

const myId = "u1";

export default function Message({ message }) {
  const isMe = message.user.id === myId;
  return (
    <View
      style={[
        styles.container,
        isMe ? styles.rightContainer : styles.leftContainer,
      ]}
    >
      <Text style={[styles.text, { color: isMe ? "#111" : "#f5f5f5" }]}>
        {message.content}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#3777f0",

    maxWidth: "75%",
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
  leftContainer: {
    backgroundColor: blue,
    marginLeft: 10,
    marginRight: "auto",
  },
  rightContainer: {
    backgroundColor: grey,
    marginLeft: "auto",
    marginRight: 10,
  },
});
