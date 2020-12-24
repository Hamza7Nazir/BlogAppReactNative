import React, {useEffect} from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {Context} from "../context/BlogContext";

const ShowScreen = ({navigation}) => {
const {state}  =useContext(Context);


const id = navigation.getParam('id');
console.log(id)

const blogPost = state.find((blogPost)=> blogPost.id === id)

// const post = getPostInfo = (id) =>{
//     return (
//         state.filter((state)=>  state.id === id)
//     )
// }

      return (
          <View style = {style.basicStyle}>
            <Text>{blogPost.title}</Text>
          </View>
      )
  }
  
  const style = StyleSheet.create({
      basicStyle: {
          margin: 30,
      }
  })
  
  export default ShowScreen;