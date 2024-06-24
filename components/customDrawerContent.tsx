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

const CustomDrawerContent = (props: any) => {
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
        <Text>Exam-App</Text>
        <Text>version : 1.0.0</Text>
      </View>
      <DrawerContentScrollView {...props} scrollEnabled={false}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <SignOut />
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;
