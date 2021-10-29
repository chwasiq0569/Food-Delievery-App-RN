import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import ViewCart from "./ViewCart";

const About = (props) => {
  const { name, image_url, categories, price, reviews, rating } =
    props.route.params;

  const formattedCategories = categories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • ${rating} ☆ (${reviews})`;
  return (
    <View>
      <RestaurantImage image={image_url} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = ({ image }) => {
  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={styles.restaurantimage}
      />
    </View>
  );
};

const RestaurantTitle = ({ title }) => {
  return <Text style={styles.restaurantTitle}>{title}</Text>;
};

const RestaurantDescription = ({ description }) => {
  return <Text style={styles.restaurantDescription}>{description}</Text>;
};

const styles = StyleSheet.create({
  restaurantimage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  restaurantTitle: {
    fontSize: 29,
    fontWeight: "700",
    marginTop: 10,
    marginHorizontal: 15,
  },
  restaurantDescription: {
    marginHorizontal: 15,
    fontSize: 15.5,
    marginTop: 5,
    fontWeight: "400",
  },
});

export default About;
