import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForms";

const EditScreen = ({ navigation }) => {
  const [title, setTitle] = useState(""); // useState(blogPost.title)  better approach
  const [content, setContent] = useState(""); // useState(blogPost.content)  alternate way to useEffect

  const { state,addBlogPost } = useContext(Context);
  const id = navigation.getParam("id");

  const blogPost = state.find((blogPost) => blogPost.id === id);

  //   const setValues = () =>{  // how can this be used ?
  //     setContent(blogPost.content);
  //     setTitle(blogPost.title);
  //   }

  useEffect(() => {
    // Runs only first time if second argument is empty list
    setContent(blogPost.content); // This is working
    setTitle(blogPost.title); // setting values to fill input fields
  }, []);

  return ( 
    <View style={style.basicStyle}>
  <BlogPostForm
    TitleLabel = "Edit Title"
    ContentLabel = "Edit Content"
    TitleValue = {title}
    ContentValue = {content}
    ChangeTitle = {(val)=> setTitle(val)}
    ChangeContnet = {(val)=> setContent(val)}
    ButtonName = "Save"
    pressed = { () => addBlogPost(title, content, () => navigation.navigate("Index")) } // sending navigation as a call back function
    
  />
      {/* <Text style={style.titleStyle}>Enter Title</Text>

      <TextInput
        style={style.inputStyle}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={style.titleStyle}>Enter Content</Text>

      <TextInput
        style={style.inputStyle}
        value={content}
        onChangeText={(text) => setContent(text)}
      />

      <Button
        title="Edit Blog Post"
        onPress={
          () => addBlogPost(title, content, () => navigation.navigate("Index")) // sending navigation as a call back function
        }
      /> */}
    </View>
  );
};

const style = StyleSheet.create({
  ParentStyle: {
    margin: 30,
  },
  inputStyle: {
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
    padding: 5,
  },
  titleStyle: {
    fontSize: 20,
    margin: 10,
  },
});

export default EditScreen;
