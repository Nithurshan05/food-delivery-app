import React,{useState} from 'react';
import HomeScreen from './HomeScreen';
import {View, StyleSheet, Text, Image, ScrollView, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import products from '../Screen/Data/ProductData';
import * as Icon from "react-native-feather";
const {height} = Dimensions.get("window");
import data from ".././productData.json";
import categoryTitle from './Data/categoryTitle';
import { NavigationContainer } from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { width } = Dimensions.get("window");

const ITEM_WIDTH = width / 2 - 20 ;


const ProductDetail =({recipe}) => {
    const [activeCategory, setActiveCategory] = useState(0);
    return(
        <ScrollView >
            <View >
            {/* {categoryTitle[activeCategory].products.map((item) => (
              
                <ImageBackground style={{
              padding: 20,
              height: height / 2.5,
              padding: 20,
              paddingTop: 40,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            source={{uri:item.image}}>

                <TouchableOpacity  style={{
                    height: 45,
                    width:45,
                    backgroundColor:"White",
                    backgroundborderColor:"black",
                    justidyContent: "space-between",
                    alignItems:"center",
                    borderRadius: 25,
                }}>
                    <Icon.ArrowLeft name="arrow-back" size={25} color={"black"}/>    
                </TouchableOpacity> 

                <TouchableOpacity style={{

                    height: 45,
                    width:45,
                    backgroundColor:"White",
                    justidyContent: "space-between",
                    alignItems:"center",
                    borderRadius: 25,
                  
                }}>
                    <Icon.Share name="Share" size={25} color={"black"}/>
                </TouchableOpacity>
            </ImageBackground>
            
        ))} */}


                <ImageBackground style={{
              padding: 20,
              height: height / 2.5,
              padding: 20,
              paddingTop: 40,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            source={require('../assets/Images/chicken_with_cheese_pizza.jpeg')}>

                <TouchableOpacity style={{
                    height: 45,
                    width:45,
                    padding:10,
                    backgroundColor:"white",
                    justidyContent: "space-between",
                    alignItems:"center",
                    borderRadius: 25,
                }}>
                    <Icon.ArrowLeft name="arrow-back" size={25} color={"black"}/>    
                </TouchableOpacity> 

                <TouchableOpacity style={{

                    height: 45,
                    width:45,
                    padding:10,
                    backgroundColor:"white",
                    justidyContent: "space-between",
                    alignItems:"center",
                    borderRadius: 25,
                  
                }}>
                    <Icon.Share name="Share" size={25} color={"black"}/>

                </TouchableOpacity>
                </ImageBackground>
                <View
                    style={{
                    padding: 20,
                    paddingTop:30,
                    marginTop: -30,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    backgroundColor: "white",
                    }}>
                        <View
                        style={{
                        flexDirection: "row",
                        marginBottom: 30,
                        alignItems: "center",
                        }}>
                            <View style={{ width: "70%" }}>
                            <Text
                            style={{
                            fontSize: 25,
                            color: "black",
                            fontWeight: "700",
                            }}>
                            name
                            </Text>
                            </View>
                            <View
                             style={{
                            padding: 10,
                            paddingHorizontal: 30,
                            backgroundColor: "yellow",
                            flexDirection: "row",
                            borderRadius: 10,
                            justifyContent: "center",
                            alignItems: "center",
                            }}>
                            <Icon.Star name="star" color={"black"} size={17} />
                            <Text
                            style={{
                            fontSize: 16,
                            fontWeight: "600",
                            marginLeft: 10 / 2,
                            color: "black",
                            }}>
                            Rating 4.5
                            </Text>
                            </View>

                            <View
                            style={{ 
                            flexDirection: "row", 
                            justifyContent: "space-between" }}>
                            <View
                            style={{
                             padding: 10,
                             paddingHorizontal: 20,
                             backgroundColor: "black",
                             flexDirection: "row",
                             borderRadius: 10,
                             justifyContent: "center",
                             alignItems: "center",
                             }}>
                <Icon.Clock name="time" color={"gray"} size={17} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginLeft: 10 / 2,
                    color: "gray",
                  }}>
                  Time
                </Text>
              </View>
              <View
                style={{
                  padding: 10,
                  paddingHorizontal: 20,
                  backgroundColor: "gray",
                  flexDirection: "row",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Icon.Package name="bicycle" color={"gray"} size={17}/>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginLeft: 10 / 2,
                    color: "gray",
                  }}
                >
                  Delivery time
                </Text>
              </View>
              <View
                style={{
                  padding: 10,
                  paddingHorizontal: 20,
                  backgroundColor: "light",
                  flexDirection: "row",
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon.RefreshCcw name="restaurant" color={"gray"} size={17} />
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "600",
                    marginLeft: 10 / 2,
                    color: "gray",
                  }}>
                  Cooking time
                </Text>
              </View>
                        </View>
                        <View style={{ marginVertical: 30 }}>
                        <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: "black",
                }}
              >
                Ingredients
              </Text>
              {data.products.map((itemCategory) =>(
                <View
                  style={{
                    marginVertical: 10,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  key={itemCategory.id}
                >
                  <View
                    style={{
                      width: 10,
                      height: 10,
                      backgroundColor: "lightGray",
                      borderRadius: 10,
                    }}
                  />
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: "600",
                      color: "gray",
                      marginLeft: 10,
                    }}
                  >
                    {itemCategory.price}
                  </Text>
                </View>
              ))}
                        </View>
                    </ View>
                  </View>
            </View>
        </ScrollView>
    )
};

export default ProductDetail;