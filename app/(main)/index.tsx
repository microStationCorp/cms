import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/searchbar";
import { useUser } from "@clerk/clerk-expo";
import { SignOut } from "@/components/signOutComp";

const HomePage = () => {
  const { user } = useUser();
  return (
    <SafeAreaView>
      <SearchBar />
      <Text>main page</Text>
      <Text>{JSON.stringify(user, null, 2)}</Text>
    </SafeAreaView>
  );
};

export default HomePage;
