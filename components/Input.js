import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
 
  return (
    <TextInput
      {...props}
      style={styles.inputStyle}
      placeholder="Number"
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    padding: 10,
    borderBottomWidth: 0.6,
    borderBottomColor: "grey",
    marginBottom: 10,
    borderRadius: 5,
    width: "30%",
    textAlign: "center",
    // fontFamily: 'open-sans-reg'
  },
});

export default Input;
