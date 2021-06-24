import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const InputCom = ({ onChangeTerm, term, onSubmit }) => {
  return (
    <View style={styles.container}>
      <FontAwesome
        name="search"
        size={24}
        color="black"
        style={{ marginHorizontal: 10, alignSelf: "center" }}
      />
      <TextInput
        style={{ flex: 1, fontSize: 20 }}
        placeholder="search..."
        placeholderTextColor="black"
        onChangeText={onChangeTerm}
        value={term}
        onEndEditing={onSubmit}
      />
    </View>
  );
};
export default InputCom;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    backgroundColor: "gray",
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom:10
  },
});
