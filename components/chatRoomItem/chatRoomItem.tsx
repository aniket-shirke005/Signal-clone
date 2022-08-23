import { Text, Image, View, Pressable } from "react-native";
import styles from "./chatRoomItemStyles";
import { useNavigation } from "@react-navigation/native";

export default function ChatRoomItem({ chatRoomData }) {
  const { users, messagesNumber, lastMessage } = chatRoomData;

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("ChatRoom", { id: chatRoomData.id });
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: users[1].imageUri,
        }}
        style={styles.image}
      />
      {messagesNumber && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{messagesNumber}</Text>
        </View>
      )}
      <View style={styles.flex}>
        <View style={styles.row}>
          <Text style={styles.name}>{users[1].name}</Text>
          <Text style={styles.text}>{lastMessage.createdAt}</Text>
        </View>
        <Text style={styles.text} numberOfLines={1}>
          {lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
}
