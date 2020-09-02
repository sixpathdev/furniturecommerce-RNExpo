import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MenuButton = () => {
  return (
    <TouchableOpacity style={{ marginRight: 25, marginTop: 3 }}>
      <MaterialCommunityIcons name="menu" size={28} color="#696969" />
    </TouchableOpacity>
  );
};

export default MenuButton;
