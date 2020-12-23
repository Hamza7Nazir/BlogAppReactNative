import React, {useContext} from "react";
import { View, Text, StyleSheet,FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
    const {data, addBlogPost} = useContext(BlogContext);
    console.log(data);
  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title='Add Blog Post' onPress= {addBlogPost}/>
      <FlatList
        data = {data}
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
