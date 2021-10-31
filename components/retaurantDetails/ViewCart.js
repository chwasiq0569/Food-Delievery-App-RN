import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";

const ViewCart = () => {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = "$".concat(
    total.toLocaleString("en", {
      style: "currency",
      currency: "USD",
    })
  );

  console.log("totalUSD", totalUSD);

  return total ? (
    <View style={styles.viewCartContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity style={styles.viewCartButton}>
          <Text
            style={{ color: "white", flex: 1, paddingLeft: 100, fontSize: 16 }}
          >
            View Cart
          </Text>
          <Text style={{ color: "white", fontSize: 16, paddingRight: 5 }}>
            {totalUSD}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  ) : (
    <></>
  );
};

const styles = StyleSheet.create({
  viewCartContainer: {
    flex: 1,
    position: "absolute",
    bottom: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
  viewCartButton: {
    marginTop: 20,
    backgroundColor: "black",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
});

export default ViewCart;
