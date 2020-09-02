import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import ShopCtaButton from "../../components/ShopCtaButton";

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text
          style={{
            fontFamily: "montserrat-bold",
            fontSize: 24,
            marginBottom: 15,
            ...styles.primaryColor,
          }}
        >
          {product.name}
        </Text>
        <Image
          source={product.uri}
          style={{ width: "100%" }}
          resizeMode="cover"
        />
        <Text
          style={{
            fontFamily: "montserrat-semibold",
            fontSize: 20,
            marginTop: 25,
            ...styles.primaryColor,
          }}
        >
          Subtitle Here
        </Text>
        <Text
          style={{
            fontFamily: "montserrat-regular",
            fontSize: 18,
            marginTop: 5,
            ...styles.primaryColor,
          }}
        >
          Nook chair is a contemporary modern chair made with the love of
          traditional values. It showcase the folky, simplicity and elegance of
          archetypical chair.
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "flex-end", marginTop: 30 }}>
          <ShopCtaButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: "#F2F2F2",
  },
  primaryColor: {
    color: "#433425",
  },
});

export default ProductDetails;
