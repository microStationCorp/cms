import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { ClerkProvider, useAuth } from "@clerk/clerk-expo";
import Constants from "expo-constants";
import { tokenCache } from "@/lib/tokenCache";
import { Stack, useRouter, useSegments } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apolloClient";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const MainLayout = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthPage = segments[0] == "(main)";
    if (isSignedIn == false && inAuthPage) {
      router.replace("/");
    } else if (isSignedIn) {
      router.replace("(main)/");
    }
  }, [isSignedIn]);

  if (!isLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(main)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/index" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    FiraCode: require("../assets/fonts/FiraCode.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig?.extra!.clerkPublishableKey}
      tokenCache={tokenCache}
    >
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <MainLayout />
        </SafeAreaProvider>
      </ApolloProvider>
    </ClerkProvider>
  );
}
