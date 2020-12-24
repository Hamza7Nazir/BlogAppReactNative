import React, { useState } from "react";
import { useContext } from "react";
import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={style.ParentStyle}>
      <Text style={style.titleStyle}>Enter Title</Text>

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
        title="Add Blog Post"
        onPress={
          () => addBlogPost(title, content, () => navigation.navigate("Index")) // sending navigation as a call back function
        }
      />
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

export default ShowScreen;
