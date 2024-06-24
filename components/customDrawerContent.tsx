import { Image, Text, View } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SignOut } from "./signOutComp";
import { TokenFontSize } from "@/constants/constants";
import { useUser } from "@clerk/clerk-expo";

export const CustomDrawerContent = (props: any) => {
  const { isSignedIn } = useUser();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          height: hp(22),
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: TokenFontSize.lg }}>CMS</Text>
        <Text>version : 1.0.0</Text>
      </View>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      {isSignedIn && (
        <View style={{ alignItems: "center", marginBottom: 10 }}>
          <SignOut />
        </View>
      )}
    </SafeAreaView>
  );
};
