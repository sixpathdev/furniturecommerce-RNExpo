import React from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PopularItem = ({item, navigation}) => {
  return (
    <TouchableOpacity style={styles.singleProduct} onPress={() => navigation.push('ProductDetails', { product: item })}>
      <View>
        <Image source={item.uri} style={{ width: "100%" }} />
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  singleProduct: {
    flexBasis: "48%",
    marginHorizontal: 5,
    marginVertical: 7,
  },
  itemTitle: {
    color: "#333333",
    fontSize: 18,
    paddingVertical: 4,
  },
  itemPrice: {
    color: "#333333",
    fontSize: 14,
    fontFamily: "montserrat-bold",
  },
});

export default PopularItem;
