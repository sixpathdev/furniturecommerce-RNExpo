import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const ShopCtaButton = () => (
  <TouchableOpacity
    underlayColor="#DDDDDD"
    onPress={() => console.log('ADD TO CART')}
    style={styles.shopctabutton}
  >
    <Image source={require("../assets/shopbtn.png")} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    shopctabutton: {
      backgroundColor: "#DAA26C",
      height: 60,
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30,
    },
});

export default ShopCtaButton;
