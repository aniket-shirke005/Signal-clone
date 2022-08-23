import { View, Text, StyleSheet, FlatList } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

import Message from "../components/Message";
import chatData from "../assets/dummy-data/Chats";
import MessageInput from "../components/MessageInput";

export default function ChatRoomScreen() {
  const route = useRoute();
  const navigation = useNavigation();

  console.warn(route.params?.id);
  navigation.setOptions({ title: "Elon Musk" });
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={chatData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </View>
  );
}
