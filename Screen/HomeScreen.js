import { StyleSheet, View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import React,{useState} from 'react';
import * as Icon from "react-native-feather";
import categoryTitle from './Data/categoryTitle';


const { width } = Dimensions.get("window");

const ITEM_WIDTH = width / 2 - 20 ;


const HomeScreen = ({navigation}) => {
  const [activeCategory, setActiveCategory] = useState(0);

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
                
                fontWeight: "800",
                color: "black",
                marginTop: 10,
                marginBottom: 10,
                marginRight: 10,
                marginLeft: 10,
                textAlign: "center"
              }}> 
              Nithurshan Manokaran</Text>
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

          {/* ProductData */}
          <ScrollView horizontal>
            {categoryTitle.map((categories, index) => (
              <TouchableOpacity style ={{
                marginLeft:20,
                marginRight:20,
              }}
              key={index}
              onpress ={() => setActiveCategory(index)}>
                <Text style={[
                  {
                    fontSize:17,
                    fontWeight: '600',
                    color: 'gray'
                    
                  },
                  activeCategory === index &&{
                    color:'black',
                    fontWeight: '700',
                    fontSize:19
                  },
                  ]}>
                    {categories.title}
                  </Text>
              </TouchableOpacity>
            ))}           
          </ScrollView>

          {/* SampleData */}
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginVertical: 20,
            }}          
          >
            {categoryTitle[activeCategory].products.map((item) => (
              <TouchableOpacity
               style={{ width: ITEM_WIDTH, marginBottom: 20, marginLeft:10, marginRight:10 }}
                key={item.id} 
                onPress={() => {console.log('Clicked',item)
                navigation.navigate("ProductDetail",{product:item})
}}
              >
                <Image                 
                  style={{
                    width: "100%",
                    height: ITEM_WIDTH + 30,
                    borderRadius: 20,
                  }}
                  height={50}
                  width={50}
                  source={{uri:item.image}}
                />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "700",
                    marginTop: 10,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: "gray",
                    
                  }}
                >
                {item.description}
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  Price: {item.price} 
                </Text>
                <Text style={{ fontSize: 20, fontWeight: "400", color:'gray'  }}>
                Rate: {item.rating}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;