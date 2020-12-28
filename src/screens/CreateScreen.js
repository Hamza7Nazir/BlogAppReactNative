import React, { useState } from "react";
import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForms";

const ShowScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <BlogPostForm
      TitleLabel="Enter Title"
      ContentLabel="Enter Content"
      TitleValue={title}
      ContentValue={content}
      ChangeTitle={(val) => setTitle(val)}
      ChangeContent={(val) => setContent(val)}
      ButtonName="Add Blog Post"
      pressed={() =>
        addBlogPost(title, content, () => navigation.navigate("Index"))
      } // sending navigation as a call back function
    />
  );
};

const style = StyleSheet.create({});

export default ShowScreen;
