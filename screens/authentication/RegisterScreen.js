import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import AuthButton from "../../components/AuthButton";

const RegisterScreen = ({navigation}) => {

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={styles.screenContent}
      >
        <View >
          <Text style={{ ...styles.textFamilyBold, fontSize: 24,}}>
           Create Account
          </Text>
          <Text style={{ fontSize: 16, ...styles.textFamilyRegular }}>
            Sign up and start shopping.
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              style={{ position: "absolute", top: 14, left: 10, zIndex: 2 }}
              name="account"
              size={24}
              color="#696969"
            />
            <TextInput
              placeholder="Username"
              textContentType="none"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              style={{ position: "absolute", top: 14, left: 10, zIndex: 2 }}
              name="lock"
              size={24}
              color="#696969"
            />
            <TextInput
              placeholder="Password"
              textContentType="none"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              style={{ position: "absolute", top: 14, left: 10, zIndex: 2 }}
              name="email"
              size={24}
              color="#696969"
            />
            <TextInput
              placeholder="Email"
              textContentType="none"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <MaterialCommunityIcons
              style={{ position: "absolute", top: 14, left: 10, zIndex: 2 }}
              name="phone"
              size={24}
              color="#696969"
            />
            <TextInput
              placeholder="Phone"
              textContentType="none"
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              marginTop: 40,
              fontFamily: "montserrat-semibold",
              fontSize: 18,
              color: "#fff",
            }}
          >
            <AuthButton title="Sign Up" />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <Text style={{ color: "#433425", fontSize: 14 }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{ color: "#433425", fontSize: 14, fontWeight: "bold" }}
              >
                {"  "}
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    backgroundColor: "#F2F2F2",
  },
  screenContent: {
    marginTop: 250
  },
  textFamilyBold: {
    fontFamily: "montserrat-bold",
  },
  textFamilyRegular: {
    fontFamily: "montserrat-regular",
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 30,
    paddingHorizontal: 40,
    paddingVertical: 15,
    height: 50,
  },
});

export default RegisterScreen;
