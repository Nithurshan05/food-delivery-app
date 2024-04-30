import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import product from "../productData.json";

const WelcomePage = ({navigation}) => {
  console.log(product);
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Welcome Image.webp")}></Image>
      <Text style={styles.WelcomeText}>Foodie Boy</Text>
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={styles.GetStart}>
        <Text style={styles.GetStartText}>Get Start</Text>
      </TouchableOpacity>     
    </View>
  );
}
export default WelcomePage;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  WelcomeText: {
    fontSize: 52,
    fontWeight: "bold",
    color: "black",
    marginTop: 0,
    marginBottom: 100,
    textAlign: "center",
  },
  GetStart: {
    backgroundColor: "#f96163",
    borderRadius: 20,
    paddingVertical: 18,
    width:"80%",
    alignItems: "center",
  },
  GetStartText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
  },
}); 