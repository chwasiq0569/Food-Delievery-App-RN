import React from "react";
import { View, StyleSheet } from "react-native";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Restaurantdetails from "./screens/RestaurantDetails";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

const Navigation = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  const store = configureStore();

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen
            name="RestaurantDetails"
            component={Restaurantdetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
