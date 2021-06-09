import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

export default function App() {
  const [userChoice, setUserChoice] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => {
    setUserChoice(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  const newGameHandler = ()=>{
    setUserChoice("")
    setGuessRounds(0)
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userChoice && guessRounds <= 0) {
    content = <GameScreen onGameOver={gameOverHandler} userChoice={userChoice} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen newGame={newGameHandler} rounds={guessRounds} userNumber={userChoice} />;
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      {content}
      {/* {userChoice ? (
        <GameScreen onGameOver={gameOverHandler} userChoice={userChoice} />
      ) : (
        <StartGameScreen onStartGame={startGameHandler} />
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
