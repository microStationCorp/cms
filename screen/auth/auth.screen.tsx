import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { KeyWords, TokenColors, TokenFontSize } from "@/constants/constants";
import { Colors } from "@/constants/colors";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { useWarmUpBrowser } from "@/lib/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import * as AuthSession from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

const AuthScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({
    strategy: "oauth_google",
    redirectUrl: AuthSession.makeRedirectUri({
      path: "/(main)/",
    }),
  });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
        const response = await signUp?.update({
          username: signUp!.emailAddress!.split("@")[0],
        });

        if (response?.status === "complete") {
          await setActive!({ session: signUp!.createdSessionId });
        }
      }
    } catch (err) {
      console.error("OAuth error", JSON.stringify(err));
    }
  }, []);
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
        onPress={() => onPress()}
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
