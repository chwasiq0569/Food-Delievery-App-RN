import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const ViewCart = () => {
  return (
    <View style={styles.viewCartContainer}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <TouchableOpacity style={styles.viewCartButton}>
          <Text style={{ color: "white" }}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
});

export default ViewCart;
