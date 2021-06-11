import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from '../constants/colors'

const Header = (props) => {
  return (
    <View style={styles.header}>
    {/* <View style={{...styles.header, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}}> */}

      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: Platform.OS === "android" || 'web' ? Colors.primary : 'white',
    borderBottomColor: Platform.OS === "ios" ? '#ccc' : 'transparent',
    borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
    height: 50,
    paddingTop: "36",
    width: "100%",
  },

//   headerBase: {
//     height: 50,
//     paddingTop: "36",
//     width: "100%",
//   },

//   headerIOS: {
//     backgroundColor: "white",
//     borderBottomColor: "#ccc",
//     borderBottomWidth: 1,
//   },
//   headerAndroid: {
//     backgroundColor: Colors.primary,
//   },


  headerTitle: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
    color: Platform.OS === 'android' || 'web' ? 'white' : Colors.primary,
    fontFamily: 'open-sans-bold'
  },
});

export default Header;
