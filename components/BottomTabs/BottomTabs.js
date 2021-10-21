import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const BottomTabs = () => {
  return (
    <View style={styles.bottomTabsContainer}>
      <Icon icon="home" text="home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

const Icon = ({ icon, text }) => {
  return (
    <TouchableOpacity>
      <View>
        <FontAwesome5
          name={icon}
          size={25}
          style={{ marginBottom: 3, alignSelf: "center" }}
        />
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  bottomTabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginHorizontal: 30,
  },
});

export default BottomTabs;
