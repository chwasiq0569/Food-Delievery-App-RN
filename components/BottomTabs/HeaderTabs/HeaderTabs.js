import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = React.useState("Delievery");

  return (
    <View style={styles.tabsContainer}>
      <HeaderButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Delievery"
        textColor="black"
        buttonColor="white"
      />
      <HeaderButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        title="Pickup"
        textColor="white"
        buttonColor="black"
      />
    </View>
  );
};

const HeaderButton = ({
  title,
  textColor,
  buttonColor,
  activeTab,
  setActiveTab,
}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: activeTab === title ? "black" : "white",
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
      }}
      onPress={() => {
        console.log("PRESSED");
        setActiveTab(title);
      }}
    >
      <Text style={{ color: activeTab === title ? "white" : "black" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 4,
  },
});

export default HeaderTabs;
