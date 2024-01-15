import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import Colors from "@/constants/Colors";

const ModalHeaderText = () => {
  const [active, setActive] = useState(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setActive(0)}>
        <Text
          style={{
            fontFamily: "mon-sb",
            fontSize: 18,
            color: active === 0 ? Colors.dark : Colors.grey,
            textDecorationLine: active === 0 ? "underline" : "none",
          }}
        >
          Stays
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setActive(1)}>
        <Text
          style={{
            fontFamily: "mon-sb",
            fontSize: 18,
            color: active === 1 ? "#000" : Colors.grey,
            textDecorationLine: active === 1 ? "underline" : "none",
          }}
        >
          Experiences
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", justifyContent: "center", gap: 10 },
  //   btnText: { fontFamily: "mon-sb", fontSize: 18, color: active ===  },
});

export default ModalHeaderText;
