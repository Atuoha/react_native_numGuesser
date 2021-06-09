import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userChoice, setUserChoice] = useState();

  const startGameHandler = (selectedNumber) => {
    setUserChoice(selectedNumber);
  };

  const gameOverHandler = ()=>{
    setUserChoice("")
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      {userChoice ? (
        <GameScreen onGameOver={gameOverHandler} userChoice={userChoice} />
      ) : (
        <StartGameScreen onStartGame={startGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
