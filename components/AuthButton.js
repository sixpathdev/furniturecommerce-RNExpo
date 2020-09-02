import React from 'react'
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const AuthButton = ({title, navigation, routename}) => {
    return (
        <TouchableOpacity style={styles.shopNowButton} onPress={() => routename == 'Explore' ? navigation.replace(routename) : navigation.push(routename)}>
        <Text style={{ textAlign: 'center', color: '#fff', fontSize: 18 }}>{title}</Text>
      </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    shopNowButton: {
      backgroundColor: '#DAA26C',
      width: '100%',
      height: 53,
      paddingVertical: 15,
      borderRadius: 30,
    }
  });
  

export default AuthButton; 