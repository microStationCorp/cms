import React from "react";
import { Redirect, Slot } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

const ProfileLayout = () => {
  const { isSignedIn } = useUser();

  if (!isSignedIn) {
    return <Redirect href={"(auth)/"} />;
  }
  
  return <Slot />;
};

export default ProfileLayout;
