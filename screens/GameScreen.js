import React, { useState, useRef, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";
import { Ionicons } from "@expo/vector-icons";

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

const renderList = (value, index) => {
  return (
    <View key={value} style={styles.renderList}>
      <Text>#{index}</Text>
      <Text>{value}</Text>
    </View>
  );
};

const GameScreen = (props) => {
  const initialGuess = generateRandomNumber(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [passGuesses, setPassGuesses] = useState([initialGuess]);
  const [availableDeviceHeight, setAvailableDeviceHeight] = useState(
    Dimensions.get("window").height
  );

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props; // object destructuring
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(passGuesses.length);
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
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomNumber(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    // setRounds((rounds) => rounds + 1);
    setPassGuesses((curPassGuesses) => [nextNumber, ...curPassGuesses]);
  };

  useEffect(() => {
    const updateLayout = () => {
      setAvailableDeviceHeight(Dimensions.get("window").height);
    };

    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  });

  if (availableDeviceHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text style={styles.choiceText}>Computer's Guess</Text>
        <View style={styles.smallScreenControls}>
          <MainButton
            color={Colors.accent}
            onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={27} color="white" />
          </MainButton>
          <Text style={styles.currentGuessText}>{currentGuess}</Text>
          <MainButton
            color={Colors.primary}
            onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={27} color="white" />
          </MainButton>
        </View>

        <View style={styles.listView}>
          <Text style={{ textAlign: "center", marginTop: 5 }}>Guesses</Text>
          <ScrollView contentContainerStyle={styles.list}>
            {passGuesses.map((guess, index) =>
              renderList(guess, passGuesses.length - index)
            )}
          </ScrollView>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.choiceText}>Computer's Guess</Text>
      <Text style={styles.currentGuessText}>{currentGuess}</Text>
      <Card style={styles.card}>
        <View style={styles.btnView}>
          <MainButton
            color={Colors.accent}
            onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={27} color="white" />
          </MainButton>
        </View>

        <View style={styles.btnView}>
          <MainButton
            color={Colors.primary}
            onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={27} color="white" />
          </MainButton>
        </View>
      </Card>

      <View style={styles.listView}>
        <Text style={{ textAlign: "center", marginTop: 5 }}>Guesses</Text>
        <ScrollView contentContainerStyle={styles.list}>
          {passGuesses.map((guess, index) =>
            renderList(guess, passGuesses.length - index)
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },

  choiceText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
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
    width: "80%",
    minWidth: 300,
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

  renderList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
    borderColor: "#ccc",
    borderWidth: 1,
  },

  listView: {
    flex: 1,
    width: Dimensions.get("window").width > 350 ? "60%" : "80%",
  },

  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },

  smallScreenControls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },
});

export default GameScreen;
