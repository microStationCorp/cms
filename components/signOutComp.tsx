import { useAuth, useUser } from "@clerk/clerk-expo";
import { Alert, Text, TouchableOpacity } from "react-native";

export const SignOut = () => {
  const { signOut } = useAuth();
  const { user } = useUser();
  return (
    <TouchableOpacity
      onPress={() => {
        Alert.alert(`Hi, ${user?.firstName}`, "Do you want to sign out?", [
          {
            text: "Cancel",
          },
          { text: "OK", onPress: () => signOut() },
        ]);
      }}
    >
      <Text>Sign Out</Text>
    </TouchableOpacity>
  );
};
