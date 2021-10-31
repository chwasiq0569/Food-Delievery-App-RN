import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";

const foods = [
  {
    title: "Tandoori Chicken",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet.",
    price: "$19.20",
    image:
      "https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk=",
  },
  {
    title: "Chilaquiles",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet.",
    price: "$15.50",
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
  },
  {
    title: "Lasagna",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet.",
    price: "$13.50",
    image: "https://www.thisislocallondon.co.uk/resources/images/12088462/",
  },
  {
    title: "Chicken Brownee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet.",
    price: "$15.50",
    image:
      "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/healthy-eating-ingredients-1296x728-header.jpg?w=1155&h=1528",
  },
  {
    title: "Chicken Cesar Salad",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sit amet.",
    price: "$19.20",
    image:
      "https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=20&m=1155240408&s=612x612&w=0&h=Zvr3TwVQ-wlfBnvGrgJCtv-_P_LUcIK301rCygnirbk=",
  },
];

const MenuItems = ({ restaurantName }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.cartReducer);

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  console.log("state", state);

  return (
    <>
      {foods && (
        <>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={foods}
            renderItem={({ item }) => (
              <>
                <View style={styles.menuItemStyles}>
                  <BouncyCheckbox
                    iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                    fillColor="green"
                    onPress={(checkboxValue) => selectItem(item, checkboxValue)}
                  />
                  <FoodInfo food={item} />
                  <FoodImage food={item} />
                </View>
                <Divider
                  width={0.5}
                  orientation="vertical"
                  style={{ marginHorizontal: 20 }}
                />
              </>
            )}
            keyExtractor={(item) => item.title}
          />
        </>
      )}
    </>
  );
};

const FoodInfo = ({ food }) => {
  return (
    <View style={styles.foodInfoStyles}>
      <Text style={styles.foodTitle}>{food?.title}</Text>
      <Text>{food?.description}</Text>
      <Text>{food?.price}</Text>
    </View>
  );
};

const FoodImage = ({ food }) => {
  return (
    <Image
      source={{ uri: food?.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  );
};

const styles = StyleSheet.create({
  menuItemStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 15,
  },
  foodInfoStyles: {
    width: 240,
    justifyContent: "space-evenly",
  },
  foodTitle: {
    fontSize: 16,
    fontWeight: "400",
  },
});

export default MenuItems;
