import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  FlatList,
} from "react-native";

const Categories = () => {
  const items = [
    {
      image: require("../../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
      image: require("../../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
      image: require("../../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
      image: require("../../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
      image: require("../../assets/images/deals.png"),
      text: "Deals",
    },
    {
      image: require("../../assets/images/coffee.png"),
      text: "Coffee & Tea",
    },
    {
      image: require("../../assets/images/desserts.png"),
      text: "Desserts",
    },
  ];

  return (
    <View
      style={{
        backgroundColor: "#ffffff",
        paddingVertical: 8,
        paddingHorizontal: 8,
      }}
    >
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => (
          <View style={{ margin: 8, alignItems: "center" }}>
            <Image
              style={{ width: 50, height: 40, resizeMode: "contain" }}
              source={item?.image}
            />
            <Text style={{ fontSize: 13, fontWeight: "700" }}>
              {item?.text}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.text}
      />
      {/* <Image source={items[0]?.image} /> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Categories;
