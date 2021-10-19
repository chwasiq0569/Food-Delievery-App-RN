import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Home from "./screens/Home";
import Screen from "./screens/Screen";

export default function App() {
  return (
    <Screen>
      <Home />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: StatusBar.currentHeight,
  },
});
