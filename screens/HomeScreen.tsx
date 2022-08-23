import { View, StyleSheet, FlatList, Text } from "react-native";
import ChatRoomItem from "../components/chatRoomItem";
import ChatRooms from "../assets/dummy-data/ChatRooms";

export default function HomeScreen() {
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
