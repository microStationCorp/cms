import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { KeyWords, TokenColors, TokenFontSize } from "@/constants/constants";
import { Colors } from "@/constants/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const AuthScreen = () => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        height: "100%",
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: TokenColors.link,
          borderRadius: KeyWords.BUTTON_BORDER_RADIUS,
          width: wp("50%"),
          alignItems: "center",
          paddingVertical: 4,
        }}
      >
        <Text
          style={{
            fontSize: TokenFontSize.base,
            color: Colors.WHITE,
          }}
        >
          Sign In With Google
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthScreen;
