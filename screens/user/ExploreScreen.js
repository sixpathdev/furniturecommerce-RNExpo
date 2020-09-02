import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  ScrollView,
  YellowBox
} from "react-native";

import FeaturedProduct from "../../components/FeaturedProduct";
import PopularItem from "../../components/PopularItem";

const ExploreScreen = ({navigation}) => {
  const [featuredimages, setfeaturedimages] = useState([
    { uri: require("../../assets/productimages/featured1.png"), id: "s1s" },
    { uri: require("../../assets/productimages/featured3.png"), id: "s6s" },
    { uri: require("../../assets/productimages/featured4.png"), id: "s7s" },
    { uri: require("../../assets/productimages/featured2.png"), id: "s2s" },
    { uri: require("../../assets/productimages/featured3.png"), id: "s3s" },
    { uri: require("../../assets/productimages/featured4.png"), id: "s4s" },
    { uri: require("../../assets/productimages/featured5.png"), id: "s5s" },
  ]);

  const [popularitems, setpopularitems] = useState([
    { uri: require("../../assets/productimages/popular1.png"), name: 'Royal arm chair', price: '$140.85', id: 1 },
    { uri: require("../../assets/productimages/popular2.png"), name: 'Elegant chair', price: '$120.85', id: 2 },
    { uri: require("../../assets/productimages/popular1.png"), name: 'King chair', price: '$160.85', id: 3 },
    { uri: require("../../assets/productimages/popular1.png"), name: 'Beast chair', price: '$1900.85', id: 4 },
    { uri: require("../../assets/productimages/popular2.png"), name: 'Beast chair', price: '$1890.85', id: 5 },
    { uri: require("../../assets/productimages/popular1.png"), name: 'Beast chair', price: '$1900.85', id: 51 },
    { uri: require("../../assets/productimages/popular1.png"), name: 'Beast chair', price: '$1920.85', id: 53 },
    { uri: require("../../assets/productimages/popular1.png"), name: 'Beast chair', price: '$1290.85', id: 50 },
    { uri: require("../../assets/productimages/popular1.png"), name: 'Beast chair', price: '$1590.85', id: 9 },
    { uri: require("../../assets/productimages/popular1.png"), name: 'Beast chair', price: '$1790.85', id: 7 },
    { uri: require("../../assets/productimages/popular1.png"), name: 'Beast chair', price: '$1190.85', id: 45 },
    { uri: require("../../assets/productimages/popular1.png"), name: 'Beast chair', price: '$1r90.85', id: 15 }
  ])

  YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested', // TODO: Remove when fixed
  ])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FeaturedProduct featured={featuredimages} />
      </ScrollView>
      <View style={styles.popularitems}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
          <Text style={{fontFamily: 'montserrat-bold', fontSize: 18}}>{popularitems.length} Products</Text>
          <Text style={{fontFamily: 'montserrat-regular', fontSize: 18}}>Popular</Text>
        </View>
          <FlatList 
            data={popularitems}
            renderItem={({item}) => ( <PopularItem item={item} navigation={navigation} /> )}
            keyExtractor={item => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            style={{flex: 1}}
          />
      </View>
      </ScrollView>
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
  popularProductsContainer: {
    flex: 2,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#fff",
    marginHorizontal: 10,
    width: 60,
    height: 60,
  },
  popularitems: {
    marginTop: 50,
  },
});

export default ExploreScreen;
