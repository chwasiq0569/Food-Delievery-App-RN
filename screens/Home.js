import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "./../components/HeaderTabs/HeaderTabs";
import Categories from "./../components/Categories/Categories";
import Restaurantitem from "./../components/RestaurantItem/RestaurantItem";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/BottomTabs/BottomTabs";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
      </View>
      <Categories />
      <Restaurantitem navigation={navigation} />
      <Divider />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
