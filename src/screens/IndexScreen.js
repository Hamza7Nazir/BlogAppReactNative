import React, {useContext} from "react";
import { View, Text, StyleSheet,FlatList, Button } from "react-native";
import {Context} from "../context/BlogContext";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import {ScrollView} from 'react-native-gesture-handler'

const IndexScreen = ({navigation}) => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    console.log(state);
  return (
    <View>

      <Button title='Add Blog Post' onPress= {addBlogPost}/>
      <FlatList
        data = {state}
        keyExtractor = {(obj)=> obj.title}
        renderItem = {({item}) =>{
         return (
          <TouchableOpacity onPress= {()=> navigation.navigate('Show', {id: item.id})}>

         
           <View style= {style.blogStyle}>
          <Text style = {style.textStyle}>{item.title} {item.id}</Text>
          <TouchableOpacity onPress= { ()=> deleteBlogPost(item.id)}>
          <AntDesign name="delete"  style= {style.deleteStyle}/>

          </TouchableOpacity>
           </View>
           </TouchableOpacity>
         )  
        }}

      />
    </View>
  );
};
const style = StyleSheet.create({
  blogStyle: {
    borderColor: 'black',
    borderTopWidth: 1,
    padding: 5,
    paddingVertical: 20,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 8,
    flex:1
  },
  textStyle: {
    fontSize: 18
  },
  deleteStyle : {
    fontSize: 24,
    color: 'black',

   
  }
});

export default IndexScreen;
