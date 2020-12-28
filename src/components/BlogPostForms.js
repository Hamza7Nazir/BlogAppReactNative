import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const BlogPostForm = ({
  ChangeTitle,
  ChangeContent,
  ButtonName,
  TitleLabel,
  ContentLabel,
  pressed,
  TitleValue,
  ContentValue,
}) => {
  return (
    <View>
      <Text style={style.titleStyle}>{TitleLabel}</Text>
      <TextInput
        style={style.inputStyle}
        onChangeText={ChangeTitle}
        value={TitleValue}
      />

      <Text style={style.titleStyle}>{ContentLabel}</Text>
      <TextInput
        style={style.inputStyle}
        onChangeText={ChangeContent}
        value={ContentValue}
      />

      <Button title={ButtonName} onPress={pressed} />
    </View>
  );
};

BlogPostForm.defaultprops = {
  //automatic system
  initialValues: {
    title: "",
    contnet: "",
  },
};

const style = StyleSheet.create({
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

export default BlogPostForm;
