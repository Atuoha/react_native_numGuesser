import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from '../constants/colors'

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.primary,
    height: 50,
    paddingTop: "36",
    width: "100%",
  },

  headerTitle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
  },
});

export default Header;
