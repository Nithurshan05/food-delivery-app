import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput, fontSize } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Icon from "react-native-feather";
// import productData from '../productData.json';


export default function HomePage() {
  // const [product,setProduct] = useState(0);
  
  return (
    <ScrollView>
      <SafeAreaView>

        
 
        {/* Statusbar */}

        <View style = {{padding: "20"}}>
          <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingLeft:10}}>
            <View style = {{flexDirection:'row', alignItems:'center'}}>
              <Image 
              style = {{
                width: 45,
                height: 45, 
                borderRadius:30, 
                marginRight:10
              }}
              source = {require("../assets/Images/PRofilePic.webp")}/>
              <Text 
              style = {{
                fontSize: 17,
                fontWeight: "800",
                color: "black",
                marginTop: 10,
                marginBottom: 10,
                marginRight: 10,
                marginLeft: 10,
                textAlign: "center"
              }}> 
              User</Text>
            </View>
            <View 
            style = {{
              flexDirection: 'row', 
              alignItems:'center'
              }}>
              <TouchableOpacity 
              style = {{
                marginRight: 10
              }}>
                <Icon.Bell size={50} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
              style = {{
                marginRight: 20, 
              }}>
                <Icon.Menu size={50} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          {/* SearchBar */}
          <View 
          style= {{
            flexDirection: 'row',
            backgroundColor: 'lightblue',
            marginVertical: 20,
            padding:'30',
            borderRadius: 10,
            width: '90%',
            alignItems: 'center',
            alignSelf: 'center', 

          }}>
            <Icon.Search name = "Search" color = "gray" size = {25}/>
            <TextInput placeholder = "Search" placeholderTextColor= "gray" 
            style= {{
              color: "gray",
              fontsize: 20, 
              paddingLeft: 10,
              padding: 3,
            }}/>
          </View>

          {/* <ScrollView vertical>
          {productData.map((products, index) => (
              <TouchableOpacity style ={{
              }}
              key={index}
              onpress ={() => setActiveCategory(index)}>
                Image: {products.id}
              </TouchableOpacity>
            ))}
            </ScrollView> */}

          {/* ProductData */}
          {/* <ScrollView horizontal>
            {productData.map((products, index) => (
              <TouchableOpacity style ={{
                marginLeft:20,
                marginRight:20,
              }}
              key={index}
              onpress ={() => setActiveCategory(index)}>
                <Image source = {products.image}/>
              </TouchableOpacity>
            ))}
          </ScrollView> */}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}