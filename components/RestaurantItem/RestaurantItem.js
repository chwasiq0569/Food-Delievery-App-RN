import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  },
];

const Restaurantitem = () => {
  return (
    <FlatList
      data={localRestaurants}
      renderItem={({ item }) => (
        <TouchableOpacity activeOpacity={0.5} style={styles.restaurantItem}>
          <RestaurantImage image={item?.image_url} />
          <RestaurantInfo name={item?.name} ratings={item?.rating} />
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.name}
    />
  );
};

const RestaurantImage = ({ image }) => {
  return (
    <>
      <Image
        source={{
          uri: image,
        }}
        style={styles.restaurantImage}
      />
      <TouchableOpacity style={{ position: "absolute", top: 8, right: 8 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#eee" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = ({ name, ratings }) => {
  return (
    <View style={styles.cardContainer}>
      <View>
        <Text style={styles.cardPrimaryText}>{name}</Text>
        <Text style={styles.cardSecondaryText}>30 -35 min</Text>
      </View>
      <Text style={styles.ratingText}>{ratings}</Text>
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
