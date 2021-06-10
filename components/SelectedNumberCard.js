import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Card from "./Card";
import Colors from "../constants/colors";
import MainButton from './MainButton';
import default_styles from '../constants/default-styles'

export default function SelectedNumberCard(props) {

    const startGameHandler = ()=>{
        props.onPressStartBtn()

    }
  return (
    <Card style={styles.cardInput}>
      <Text style={default_styles.light}>You Selected</Text>
      <View style={styles.selectedNumberView}>
        <Text style={{ fontSize: 35, color: Colors.accent }}>
          {props.selectedNumber}
        </Text>
      </View>
      <MainButton onPress={startGameHandler}>START GAME </MainButton>
    </Card>
  );
}

const styles = StyleSheet.create({
  cardInput: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10,
    width: 200,
    maxWidth: "80%",
    alignItems: "center",
    marginTop: 20,
  },

  selectedNumberView: {
    paddingHorizontal: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: Colors.accent,
    marginVertical: 10,
  },
});
