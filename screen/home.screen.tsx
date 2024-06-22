import { View, Text } from "react-native";
import React from "react";
import { TokenFontSize } from "@/constants/constants";
import CustomLink from "@/components/CustomLink";

const HomeScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        height: "80%",
      }}
    >
      <Text style={{ fontSize: TokenFontSize.xl }}>
        Coach Management System
      </Text>
      <CustomLink text={"Continue as Guest"} url={"/(main)/"} />
      <CustomLink text={"Get Authority"} url={"/(auth)/"} />
    </View>
  );
};

export default HomeScreen;
