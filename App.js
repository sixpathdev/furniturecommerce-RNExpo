import React, { useState } from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";

import OnboardScreen from "./screens/authentication/OnboardScreen";
import LoginScreen from "./screens/authentication/LoginScreen";
import RegisterScreen from "./screens/authentication/RegisterScreen";
import ExploreScreen from "./screens/user/ExploreScreen";
import ProductDetails from "./screens/user/ProductDetails";

import MenuButton from "./components/MenuButton";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

const loadFonts = () =>
  Font.loadAsync({
    "montserrat-regular": require("./assets/fonts/Montserrat/Montserrat-Regular.ttf"),
    "montserrat-bold": require("./assets/fonts/Montserrat/Montserrat-Bold.ttf"),
    "montserrat-semibold": require("./assets/fonts/Montserrat/Montserrat-SemiBold.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* <Stack.Screen
          name="Onboard"
          component={OnboardScreen}
          options={{ title: null, headerShown: false }}
        /> */}

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: null, headerShown: false }}
          />

          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: null, headerShown: false }}
          />

          <Stack.Screen
            name="Explore"
            component={ExploreScreen}
            options={{
              title: "Explore",
              headerRight: () => <MenuButton />,
              headerTitleStyle: styles.titleStyle,
              headerStyle: styles.headerstyle,
            }}
          />

          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{
              headerRight: () => <MenuButton />,
              headerTitleStyle: styles.titleStyle,
              headerStyle: styles.headerstyle,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    color: "#433425",
    fontFamily: "montserrat-semibold",
    fontSize: 24,
    marginLeft: 10,
  },
  headerstyle: {
    backgroundColor: "#F2F2F2",
    elevation: 0,
    height: 140,
  },
});
