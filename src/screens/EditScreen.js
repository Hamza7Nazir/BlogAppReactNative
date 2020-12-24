import React from 'react';
import { View, Text, StyleSheet } from "react-native";


const EditScreen = () => {

      return (
          <View style = {style.basicStyle}>
            <Text>Edit screen</Text>
          </View>
      )
  };

  
  const style = StyleSheet.create({
      basicStyle: {
          margin: 30,
      }
  })
  
  export default EditScreen;