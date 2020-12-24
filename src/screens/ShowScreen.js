import React, {useEffect} from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {Context} from "../context/BlogContext";
import { AntDesign } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  };

  ShowScreen.navigationOptions = ({navigation}) => {
      return {
          
          headerRight:  <TouchableOpacity onPress= {()=> navigation.navigate('Edit')}>
          <AntDesign style={style.editIconStyle} name="edit" size={24} color="black" />  

          </TouchableOpacity>
      }
  }
  
  const style = StyleSheet.create({
      basicStyle: {
          margin: 30,
      },
      editIconStyle: {
          marginRight: 15
      }
  })
  
  export default ShowScreen;