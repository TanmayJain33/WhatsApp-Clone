import React, { useContext } from "react";
import { Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PhotoScreen from "./PhotoScreen";
import ChatsScreen from "./ChatsScreen";
import { Ionicons } from "@expo/vector-icons";
import GlobalContext from "../context/Context";

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
  const {
    theme: { colors },
  } = useContext(GlobalContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarLabel: () => {
            if (route.name == "photo") {
              return <Ionicons name="camera" size={20} color={colors.white} />;
            } else {
              return (
                <Text style={{ color: colors.white }}>
                  {route.name.toUpperCase()}
                </Text>
              );
            }
          },
          tabBarShowIcon: true,
          tabBarLabelStyle: {
            color: colors.white,
          },
          tabBarIndicatorStyle: {
            backgroundColor: colors.white,
          },
          tabBarStyle: {
            backgroundColor: colors.foreground,
          },
        };
      }}
      initialRouteName="chats"
    >
      <Tab.Screen name="photo" component={PhotoScreen} />
      <Tab.Screen name="chats" component={ChatsScreen} />
    </Tab.Navigator>
  );
}
