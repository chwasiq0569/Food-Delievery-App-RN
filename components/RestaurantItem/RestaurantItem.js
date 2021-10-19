import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Restaurantitem = () => {
  return (
    <View style={styles.restaurantItem}>
      <RestaurantImage />
      <RestaurantInfo />
    </View>
  );
};

const RestaurantImage = () => {
  return (
    <>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1y8j8_0t_gw57MmD070aG8q2AD2W6cQErkM998wSlUtbU4_opVHf0cjp_RofQnhLSu54&usqp=CAU",
        }}
        style={styles.restaurantImage}
      />
      <TouchableOpacity style={{ position: "absolute", top: 8, right: 8 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#eee" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = () => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.cardPrimaryText}>
          Farm house kitchen Thai Cuisine
        </Text>
        <Text style={styles.cardSecondaryText}>30 -35 min</Text>
      </View>
      <Text style={styles.ratingText}>4.5</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
  cardPrimaryText: {
    fontWeight: "700",
    fontSize: 16,
  },
  cardSecondaryText: {
    color: "gray",
  },
  restaurantItem: {
    margin: 12,
    backgroundColor: "white",
    borderRadius: 12,
    overflow: "hidden",
  },
  restaurantImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  ratingText: {
    fontSize: 16,
    fontWeight: "700",
    color: "gray",
  },
});

export default Restaurantitem;
