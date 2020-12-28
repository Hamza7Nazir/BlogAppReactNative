import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForms";

const EditScreen = ({ navigation }) => {
  const [title, setTitle] = useState(""); // useState(blogPost.title)
  const [content, setContent] = useState(""); // useState(blogPost.content)

  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");

  const blogPost = state.find((blogPost) => blogPost.id === id);

  useEffect(() => {
    // Runs once with empty list
    setContent(blogPost.content);
    setTitle(blogPost.title);
  }, []);

  return (
    <BlogPostForm
      TitleLabel="Edit Title"
      ContentLabel="Edit Content"
      TitleValue={title}
      ContentValue={content}
      ChangeTitle={(val) => setTitle(val)}
      ChangeContent={(val) => setContent(val)}
      ButtonName="Save Blog Post"
      pressed={() => editBlogPost(id, title, content, () => navigation.pop())} // Pop sends one view back in stack
    />
  );
};

const style = StyleSheet.create({});

export default EditScreen;
