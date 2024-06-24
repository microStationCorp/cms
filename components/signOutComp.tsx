import { Colors } from "@/constants/colors";
import { KeyWords, TokenFontSize } from "@/constants/constants";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { Alert, Text, TouchableOpacity } from "react-native";

export const SignOut = () => {
  const { signOut } = useAuth();
  const { user } = useUser();
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.SLATE_GRAY,
        width: "50%",
        borderRadius: KeyWords.BUTTON_BORDER_RADIUS,
        alignItems: "center",
        paddingVertical: 4,
      }}
      onPress={() => {
        Alert.alert(`Hi, ${user?.firstName}`, "Do you want to sign out?", [
          {
            text: "Cancel",
          },
          { text: "OK", onPress: () => signOut() },
        ]);
      }}
    >
      <Text style={{ color: Colors.WHITE, fontSize: TokenFontSize.base }}>
        Sign Out
      </Text>
    </TouchableOpacity>
  );
};
