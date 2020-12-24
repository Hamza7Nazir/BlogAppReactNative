import React, {useContext} from "react";
import { View, Text, StyleSheet,FlatList, Button } from "react-native";
import {Context} from "../context/BlogContext";

const IndexScreen = () => {
    const {state, addBlogPost} = useContext(Context);
    console.log(state);
  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title='Add Blog Post' onPress= {addBlogPost}/>
      <FlatList
        data = {state}
        keyExtractor = {(obj)=> obj.title}
        renderItem = {({item}) =>{
         return   <Text>{item.title}</Text>
        }}

      />
    </View>
  );
};
const style = StyleSheet.create({});

export default IndexScreen;
