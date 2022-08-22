import { Text, Image, View } from "react-native";
import styles from "./chatRoomItemStyles";

export default function ChatRoomItem({ chatRoomData }) {
  const { users, messagesNumber, lastMessage } = chatRoomData;
  return (
    <View style={styles.container}>
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
    </View>
  );
}
