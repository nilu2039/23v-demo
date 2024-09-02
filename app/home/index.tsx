import { Stack } from "expo-router";
import React from "react";
import { SafeAreaView, Text } from "react-native";

const Home = () => {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </>
  );
};

export default Home;
