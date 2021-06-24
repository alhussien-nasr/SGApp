import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card } from "./Card";
import {useNavigation} from '@react-navigation/native'
export const   ResultList = ({ title, results }) => {
  const navigation=useNavigation()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
              <Card result={item}  />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 20, fontWeight: "600", marginLeft: 15, marginBottom: 5 },
  container: {
    marginBottom: 10,
  },
});
