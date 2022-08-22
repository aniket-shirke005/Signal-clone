import { View, StyleSheet, FlatList, Text } from "react-native";
import ChatRoomItem from "../components/chatRoomItem";
import ChatRooms from "../assets/dummy-data/ChatRooms";

const chatRoom1 = ChatRooms[0];
const chatRoom2 = ChatRooms[1];

export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => <ChatRoomItem chatRoomData={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
