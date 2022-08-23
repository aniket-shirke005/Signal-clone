import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Platform,
} from "react-native";
import {
  SimpleLineIcons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  Ionicons,
} from "@expo/vector-icons";

export default function MessageInput() {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    console.warn("your message:", message);
    setMessage("");
  };

  const onPlusClicked = () => {
    console.warn("user clicked on plus icon");
  };

  const onPress = () => {
    if (message) {
      sendMessage();
    } else {
      onPlusClicked();
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}
    >
      <SafeAreaView style={styles.root}>
        <View style={styles.inputContainer}>
          <SimpleLineIcons name="emotsmile" size={24} color="black" />
          <TextInput
            multiline
            onChangeText={setMessage}
            placeholder="Signal message..."
            style={styles.input}
            value={message}
          />
          <Feather
            name="camera"
            size={24}
            color="black"
            style={styles.cameraIcon}
          />
          <MaterialCommunityIcons
            name="microphone-outline"
            size={24}
            color="black"
          />
        </View>
        <Pressable style={styles.btnContainer} onPress={onPress}>
          {message ? (
            <Ionicons name="send" size={18} color="whitesmoke" />
          ) : (
            <AntDesign name="plus" size={24} color="whitesmoke" />
          )}
        </Pressable>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    padding: 10,
  },
  cameraIcon: {
    marginHorizontal: 5,
  },
  text: {
    color: "white",
  },
  inputContainer: {
    backgroundColor: "#f1f2f3",
    flex: 1,
    marginRight: 10,
    alignItems: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#dedede",
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  input: {
    color: "#111",
    flex: 1,
    marginLeft: 10,
  },
  btnContainer: {
    backgroundColor: "#3777f0",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 35,
    color: "whitesmoke",
  },
});
