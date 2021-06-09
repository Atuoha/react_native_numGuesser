import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";

const generateRandomNumber = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  let rndNumber = Math.floor(Math.random() * (max - min)) + min;
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

  const [rounds, setRounds] = useState(0);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props // object destructuring
  useEffect(() => {
    if (currentGuess === userChoice) {
      //    Alert.alert({title: 'Game Over!', message: 'The game is over'}, [{title: 'Game Over', style: 'click'}])
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (direction === "lower" && props.userChoice > currentGuess) {
      Alert.alert(
        {
          title: "Opps!",
          message: `${props.userChoice} is certainly greater than ${currentGuess}`,
        },
        [{ title: "Retry!", style: "cancel" }]
      );
      console.log(
        `${props.userChoice} is certainly greater than ${currentGuess}`
      );

      return;
    } else if (direction === "greater" && props.userChoice < currentGuess) {
      Alert.alert(
        {
          title: "Opps!",
          message: `${props.userChoice} is certainly lower than ${currentGuess}`,
        },
        [{ title: "Retry!", style: "cancel" }]
      );
      console.log(
        `${props.userChoice} is certainly lower than ${currentGuess}`
      );
      return;
    }

    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(rounds => rounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text style={{ textAlign: "center", fontSize: 15 }}>
        Opponent's Choice
      </Text>
      <Text style={styles.currentGuessText}>{currentGuess}</Text>
      <Card style={styles.card}>
        <View style={styles.btnView}>
          <Button
            title="Lower"
            color={Colors.accent}
            onPress={nextGuessHandler.bind(this, "lower")}
          />
        </View>

        <View style={styles.btnView}>
          <Button
            title="Greater"
            color={Colors.primary}
            onPress={nextGuessHandler.bind(this, "greater")}
          />
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  currentGuessText: {
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
    justifyContent: "space-between",
    alignItems: "center",
  },

  btnView: {
    width: "40%",
  },
});

export default GameScreen;
