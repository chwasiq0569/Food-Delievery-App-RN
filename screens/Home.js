import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
// import HeaderTabs from "../components/BottomTabs/HeaderTabs/HeaderTabs";
import Categories from "./../components/Categories/Categories";
import Restaurantitem from "./../components/RestaurantItem/RestaurantItem";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/BottomTabs/BottomTabs";
import HeaderTabs from "./../components/BottomTabs/HeaderTabs/HeaderTabs";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
      </View>
      <Categories />
      {/* <ScrollView> */}
      <Restaurantitem navigation={navigation} />
      {/* <Restaurantitem /> */}
      {/* <Restaurantitem /> */}
      {/* <Restaurantitem /> */}
      {/* </ScrollView> */}
      <Divider />
      <BottomTabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
