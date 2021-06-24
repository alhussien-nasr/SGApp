import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export const Card = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{ uri: result.image_url }}
        resizeMode="cover"
      />
      <Text style={styles.text}>{result.name}</Text>
      <Text>
        {result.rating} Stars , {result.review_count} Reviews
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center", marginLeft: 15 },
  img: { height: 120, width: 250, borderRadius: 4 , marginBottom:5},
  text: { fontWeight: "bold", fontSize: 16 },
});
