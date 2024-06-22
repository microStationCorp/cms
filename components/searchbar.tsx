import { View, TextInput, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { TokenFontSize } from "@/constants/constants";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { Colors } from "@/constants/colors";

const SearchBar = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: Colors.GAINSBORO,
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 16,
        marginTop: 10,
        marginHorizontal: 10,
        alignItems: "center",
        gap: 8,
      }}
    >
      <Pressable
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Ionicons name="menu" size={24} color={Colors.SLATE_GRAY} />
      </Pressable>
      <TextInput
        placeholder="Search Coach"
        style={{ fontSize: TokenFontSize.base, flex: 1 }}
      />
      <FontAwesome6 name="user-circle" size={24} color={Colors.SLATE_GRAY} />
    </View>
  );
};

export default SearchBar;
