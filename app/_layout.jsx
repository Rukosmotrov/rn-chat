import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RootLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getData = async () => {
    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");
    setIsLoggedIn(isLoggedIn);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Stack screenOptions={{ headerShown: false, animation: "none" }}>
      {isLoggedIn ? (
        <>
          <Stack.Screen name="index" />
          <Stack.Screen name="signUp" />
        </>
      ) : (
        <Stack.Screen name="HomeScreen" />
      )}
    </Stack>
  );
};

export default RootLayout;
