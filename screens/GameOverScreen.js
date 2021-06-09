import React from "react";
import { View, Text, ImageView, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

export default function GameOverScreen(props) {

    const newGameHandler = ()=>{
        props.newGame()
    }

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text>Game Over!</Text>
        <Text style={{ fontSize: 20 }}>Number of Rounds: {props.rounds}</Text>
        <Text style={styles.number}>{props.userNumber}</Text>

        <Button color={Colors.accent} title="New GAME" onPress={newGameHandler} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  number: {
    paddingHorizontal: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: Colors.accent,
    marginVertical: 10,
    alignItems: "center",
    maxWidth: 100,
    fontSize: 35,
  },

  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10,
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
});
