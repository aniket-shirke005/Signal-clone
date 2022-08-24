import { View, StyleSheet, FlatList } from "react-native";
import UserItem from "../components/UserItem";

import ChatRooms from "../assets/dummy-data/ChatRooms";
import usersData from "../assets/dummy-data/Users";

export default function UsersScreen() {
  return (
    <View style={styles.page}>
      <FlatList
        data={usersData}
        renderItem={({ item }) => <UserItem user={item} />}
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
