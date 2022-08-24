import { View, StyleSheet, FlatList, Text, Pressable } from "react-native";
import ChatRoomItem from "../components/chatRoomItem";
import ChatRooms from "../assets/dummy-data/ChatRooms";
// import { Auth } from "aws-amplify";

export default function HomeScreen() {
  // const handlePress = () => {
  //   Auth.signOut();
  // };

  return (
    <View style={styles.page}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => <ChatRoomItem chatRoomData={item} />}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      {/* <Pressable
        style={{ padding: 10, backgroundColor: "lightcyan" }}
        onPress={handlePress}
      >
        <Text style={{ color: "red", textAlign: "center" }}>Log out</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
