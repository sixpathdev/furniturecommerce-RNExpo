import React from "react";
import {
  Image,
  StyleSheet,
  TouchableHighlight,
  View
} from "react-native";


const FeaturedProduct = ({featured}) => (
  featured.map((image, index) => (
    <View style={{paddingVertical: 20}} key={index}>
      <TouchableHighlight key={index} underlayColor="#DDDDDD" onPress={() => console.log(index)} style={styles.popularProductsContainer}>
      <Image source={image.uri} />
    </TouchableHighlight>
    </View>
  ))
)

const styles = StyleSheet.create({
  popularProductsContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fff',
    marginHorizontal: 10,
    width: 60,
    height: 60
  }
});

export default FeaturedProduct;
