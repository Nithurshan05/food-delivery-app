import {
    Dimensions, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,} from "react-native";
  import React from "react";
  const { height } = Dimensions.get("window");
  import * as Icon from "react-native-feather";

  
  const ProductDetail = (props) => {
    console.log(props,"pro");
    const {product}= props.route.params;
    return (
      <>
        <ScrollView>
          <View>
            <ImageBackground
              style={{
                padding: 20,
                height: height / 2.5,
                padding: 20,
                paddingTop: 40,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
              source={{uri:product.image}}
            >
              <TouchableOpacity
                style={{
                  height: 45,
                  width: 45,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 25,
                  marginTop: -20,
                }}
              >
                <Icon.ArrowLeft
                  name="arrow-back"
                  size={25}
                  color="gray"
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 45,
                  width: 45,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 25,
                  marginTop: -20,
                }}
              >
                <Icon.Share name="share" size={25} color="gray" />
              </TouchableOpacity>
            </ImageBackground>
            <View
              style={{
                padding: 20,
                marginTop: -30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                backgroundColor: "white",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 20,
                  alignItems: "center",
                }}
              >
                <View style={{ width: "70%" }}>
                  <Text
                    style={{
                      fontSize: 30,
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    {product.name}
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
                  }}
                >
                  <Icon.Star
                    name="star"
                    color="black"
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "600",
                      marginLeft: 10 / 2,
                      color: "black",
                    }}
                  >
                    {product.rating}
                  </Text>
                </View>
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "space-between" }}
              >
                <View
                  style={{
                    padding: 10,
                    paddingHorizontal: 20,
                    backgroundColor: "lightblue",
                    flexDirection: "row",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon.Clock
                    name="time"
                    color="gray"
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      marginLeft: 10 / 2,
                      color: "gray",
                    }}
                  >
                    {product.time}
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    paddingHorizontal: 20,
                    backgroundColor: "lightblue",
                    flexDirection: "row",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    justifyContent:"space-between",
                  }}
                >
                  <Icon.Truck
                    name="truck"
                    color="gray"
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      marginLeft: 10 / 2,
                      color: "gray",
                    }}
                  >
                    {product.del_time}
                  </Text>
                </View>
                <View
                  style={{
                    padding: 10,
                    paddingHorizontal: 20,
                    backgroundColor: "lightblue",
                    flexDirection: "row",
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Icon.BarChart
                    name="restaurant"
                    color="gray"
                  />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      marginLeft: 10 / 2,
                      color: "gray",
                    }}
                  >
                    {product.reviews}
                  </Text>
                </View>
              </View>
              <View style={{ marginVertical: 10}}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    color: "gray",
                  }}
                >
                  {product.category}
                </Text>

              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "700",
                  color: "gray",
                  marginBottom: 10,
                }}
              >
                {product.description}
              </Text>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "500",
                  color: "gray",
                }}
              >
                ingredients :
              </Text>
            </View>
          </View>
        </ScrollView>
        <SafeAreaView>
          <View style={{ padding: 20 }}>
            <TouchableOpacity
              style={{
                width: "100%",
                padding: 20,
                backgroundColor: "black",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  fontWeight: "700",
                }}
              >
                Choose this for
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "yellow",
                  fontWeight: "700",
                  marginLeft: 10 / 2,
                }}
              >
                {product.price}
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </>
    );
  };
  
  export default ProductDetail;

  