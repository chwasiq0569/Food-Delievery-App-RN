import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import MenuItems from "../components/retaurantDetails/MenuItems";
import About from "./../components/retaurantDetails/About";
import ViewCart from "./../components/retaurantDetails/ViewCart";

const Restaurantdetails = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default Restaurantdetails;
