/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import {
  ColorSchemeName,
  Pressable,
  Text,
  View,
  Image,
  useWindowDimensions,
} from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";

import HomeScreen from "../screens/HomeScreen";
import ChatRoomScreen from "../screens/ChatRoomScreen";
import UsersScreen from "../screens/UsersScreen";

import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: CustomeHeader,
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{
          headerShown: true,
          headerTitle: CustomeChatHeader,
          headerBackTitleVisible: false,
        }}
      />
      {/* users screen */}
      <Stack.Screen
        name="Users"
        component={UsersScreen}
        options={{
          title: "Users",
        }}
      />

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const CustomeHeader = () => {
  const { width } = useWindowDimensions();

  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width - 25,
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text
        style={{
          color: "whitesmoke",
          flex: 1,
          textAlign: "center",
          marginLeft: 40,
          fontWeight: "bold",
        }}
      >
        Signal
      </Text>
      <Feather
        name="camera"
        size={24}
        color={"whitesmoke"}
        style={{ marginHorizontal: 10 }}
      />
      <Pressable onPress={() => navigation.navigate("Users")}>
        <Feather
          name="edit-2"
          size={24}
          color={"whitesmoke"}
          style={{ marginHorizontal: 10 }}
        />
      </Pressable>
    </View>
  );
};

const CustomeChatHeader = (props) => {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: width - 50,
        marginLeft: -25,
      }}
    >
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text
        style={{
          color: "whitesmoke",
          flex: 1,
          marginLeft: 10,
          fontWeight: "bold",
        }}
      >
        {props.children}
      </Text>
      <Feather
        name="camera"
        size={24}
        color={"whitesmoke"}
        style={{ marginHorizontal: 10 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color={"whitesmoke"}
        style={{ marginHorizontal: 10 }}
      />
    </View>
  );
};
