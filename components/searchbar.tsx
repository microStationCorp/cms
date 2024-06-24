import { View, TextInput, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { TokenFontSize } from "@/constants/constants";
import { router, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { Colors } from "@/constants/colors";
import { useUser } from "@clerk/clerk-expo";
import { Image } from "expo-image";

const SearchBar = () => {
  const navigation = useNavigation();
  const { isSignedIn, user } = useUser();

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

      {isSignedIn ? (
        <Pressable>
          <Image
            source={{
              uri: user?.imageUrl,
            }}
            contentFit="contain"
            transition={1000}
            style={{
              width: 28,
              height: 28,
              borderRadius: 30,
            }}
            placeholder={user?.username}
          />
        </Pressable>
      ) : (
        <Pressable onPress={() => router.push("(auth)/")}>
          <FontAwesome6
            name="user-circle"
            size={24}
            color={Colors.SLATE_GRAY}
          />
        </Pressable>
      )}
    </View>
  );
};

export default SearchBar;
