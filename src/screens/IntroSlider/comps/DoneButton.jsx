import { Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const DoneButton = () => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: "rgba(0, 0, 0, .2)",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Ionicons
        name="md-checkmark-sharp"
        size={24}
        color="rgba(255, 255, 255, .9)"
      />
    </TouchableOpacity>
  );
};

export default DoneButton;
