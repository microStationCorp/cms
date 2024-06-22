import { Text, TouchableOpacity } from "react-native";
import React from "react";
import { KeyWords, TokenColors, TokenFontSize } from "@/constants/constants";
import { router } from "expo-router";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Colors } from "@/constants/colors";

const CustomLink = ({ url, text }: { url?: string; text?: string }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: TokenColors.link,
        borderRadius: KeyWords.BUTTON_BORDER_RADIUS,
        width: wp("50%"),
        alignItems: "center",
        paddingVertical: 4,
      }}
      onPress={() => router.navigate(url!)}
    >
      <Text
        style={{
          fontSize: TokenFontSize.base,
          color: Colors.WHITE,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomLink;
