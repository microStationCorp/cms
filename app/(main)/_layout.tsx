import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Colors } from "@/constants/colors";

const MainGroupLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
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
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default MainGroupLayout;
