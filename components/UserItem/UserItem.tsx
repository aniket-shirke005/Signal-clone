import { Text, Image, View, Pressable } from "react-native";
import styles from "./UserItemIStyles";

export default function UserItem({ user }) {
  const onPress = () => {
    // add user to chatroom
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: user.imageUri,
        }}
        style={styles.image}
      />

      <View style={styles.flex}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>
        </View>
      </View>
    </Pressable>
  );
}
