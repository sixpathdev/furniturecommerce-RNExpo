import React from "react";
import { SafeAreaView, Text, View, StyleSheet } from "react-native";

import AuthButton from "../../components/AuthButton"

const OnboardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.productBrief}>
        <Text style={styles.productName}>AnthenWood</Text>
        <Text style={styles.productDesc}>
          Modern furniture and all kinds of decor for your home.
        </Text>
      </View>
      <View style={styles.shopNowButtonContainer}>
      <AuthButton title="Shop Now" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  productBrief: {
    marginTop: "50%",
  },
  productName: {
    fontFamily: 'montserrat-bold',
    fontSize: 36,
    color: "#433425",
    fontWeight: "bold",
  },
  productDesc: {
    fontFamily: 'montserrat-regular',
    fontSize: 16,
    width: "65%",
    marginTop: 10,
    color: "#433425",
  },
  shopNowButtonContainer: {
    position: 'absolute',
    bottom: '20%',
    left: '15%'
  },
  shopNowButton: {
    backgroundColor: '#DAA26C',
    width: '100%',
    height: 53,
    paddingVertical: 15,
    borderRadius: 30,
  }
});

export default OnboardScreen;
