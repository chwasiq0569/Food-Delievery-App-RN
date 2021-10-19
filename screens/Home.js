import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import HeaderTabs from "./../components/HeaderTabs/HeaderTabs";
import Categories from "./../components/Categories/Categories";

const Home = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
      </View>
      <Categories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
