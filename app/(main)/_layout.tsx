import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Colors } from "@/constants/colors";
import { CustomDrawerContent } from "@/components/customDrawerContent";

const MainGroupLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{
          drawerStyle: {
            backgroundColor: Colors.HONEY_DEW,
          },
          drawerType: "slide",
          drawerActiveTintColor: Colors.BLACK,
          overlayColor: "transparent",
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="(coachList)"
          options={{
            title: "Coach List",
          }}
        />
        <Drawer.Screen
          name="(profile)"
          options={{
            title: "Profile",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default MainGroupLayout;
