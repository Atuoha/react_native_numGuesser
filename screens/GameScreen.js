import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil();
  max = Math.floor();
  let rndNumber = Math.floor(Math.random() * (max * min)) + min;
  if (rndNumber === exclude) {
    return generateRandomNumber(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomNumber(1, 100, props.userChoice)
  );

  const lowerBtnHandler = () => {};

  const greaterBtnHandler = () => {};

  return (
    <View style={styles.screen}>
      <Text>Opponent's Choice</Text>
      <Text style={styles.currentGuessText}>{currentGuess}</Text>
      <Card style={styles.card}>
        <Button title="Lower" color={Colors.accent} onPress={lowerBtnHandler} />
        <Button
          title="Greater"
          color={Colors.primary}
          onPress={greaterBtnHandler}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },

  currentGuessText: {
    paddingHorizontal: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: Colors.accent,
    marginVertical: 10,
  },

  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default GameScreen;
