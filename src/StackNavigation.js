import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "../screens/ProfileScreen";

const StackNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="Cart" component={CartScreen}  options={{headerShown: false}} />
            <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigation;
