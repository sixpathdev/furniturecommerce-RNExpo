import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  Switch,
  Keyboard,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import AuthButton from "../../components/AuthButton";

const LoginScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => Keyboard.dismiss()}
        style={styles.screenContent}
      >
        <View >
          <Text style={{ fontSize: 24, ...styles.textFamilyBold }}>
            Welcome back!
          </Text>
          <Text style={{ fontSize: 16, ...styles.textFamilyRegular }}>
            Log in to your account.
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
          <TouchableOpacity
            style={{ marginVertical: 15, alignItems: "flex-end" }}
          >
            <Text style={{ color: "#433425", fontSize: 14 }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
            <Switch
              trackColor={{ false: "#433425", true: "#433425" }}
              thumbColor={isEnabled ? "#fff" : "#fff"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text
              style={{
                marginTop: 5,
                marginLeft: 5,
                fontSize: 14,
                ...styles.textFamilyRegular,
              }}
            >
              Remember me
            </Text>
          </View>
          <View
            style={{
              marginTop: 40,
              fontFamily: "montserrat-semibold",
              fontSize: 18,
              color: "#fff",
            }}
          >
            <AuthButton title="Sign In" navigation={navigation} routename={'Explore'} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 15,
            }}
          >
            <Text style={{ color: "#433425", fontSize: 14 }}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={{ color: "#433425", fontSize: 14, fontWeight: "bold" }}
              >
                {"  "}
                Sign up
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
    marginTop: 300
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

export default LoginScreen;
