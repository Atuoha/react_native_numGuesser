import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";
// import { AppLoading } from "expo";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFonts = () => {
  return Font.loadAsync({
    "open-sans-reg": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userChoice, setUserChoice] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fetchFonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }

  const startGameHandler = (selectedNumber) => {
    setUserChoice(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = (numberOfRounds) => {
    setGuessRounds(numberOfRounds);
  };

  const newGameHandler = () => {
    setUserChoice("");
    setGuessRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userChoice && guessRounds <= 0) {
    content = (
      <GameScreen onGameOver={gameOverHandler} userChoice={userChoice} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        newGame={newGameHandler}
        rounds={guessRounds}
        userNumber={userChoice}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title={"Guess a Number"} />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
