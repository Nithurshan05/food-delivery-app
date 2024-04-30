import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, Text, Image, View } from 'react-native';

const ProductFetch = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    // Fetch the JSON data
    fetchData();
    });


    const fetchData = async () => {
      try {
        console.log("working");
        const response = await fetch('productData.json');
        console.log("response");
        console.log(response);
        const data = await response.json(); 
        console.log(JSON.stringify(data));
        setProductData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

  return (
    <ScrollView>
      {productData.map((products, index) => (
        <TouchableOpacity
          style={{ paddingLeft:10 }}
          key={index}
          onPress={() => handleProductPress(index)}>
          <Image
            source={{ uri: products.image }}
            style={{ width: 100, height: 100 }} // Adjust dimensions as needed
          />
          <Text>{products.name}</Text>
          <Text>{products.description}</Text>
          <Text>{products.price}</Text>
          {/* You can display more product details here */}
        </TouchableOpacity>
      ))}
    </ScrollView>
  )};

// export default ProductFetch;
