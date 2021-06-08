import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

function StartGameScreen() {
  const [guessNumber, setGuessNumber] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");

  const setGuessInput = (input) => {
    let formattedInput = input.target.value.replace(/[^0-9]/g, "");
    setGuessNumber(formattedInput);
  };

  const resetGuessHandler = () => {
    setGuessNumber("");
    setConfirm(false);
  };

  const submitGuessHandler = () => {
    let chosenNumber = parseInt(guessNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number", "Entry Error! Choose number 1-99", [
        { title: "Okay", style: "destructive", onPress: resetGuessHandler },
      ]);
      console.log("Entry Error! Choose number 1-99");
      return;
    }
    setConfirm(true);
    setSelectedNumber(chosenNumber);
    setGuessNumber("");
    // Keyboard.dismiss()
  };

  let confirmOuput;
  if (confirm) {
    confirmOuput = (
      <>
        <Card style={styles.cardInput}>
          <Text style={{fontSize: 20}}>Chosen Number</Text>
          <View style={styles.selectedNumberView}>
              <Text style={{fontSize: 40}}>{selectedNumber}</Text>
          </View>
          <Button title="Start Game" color={Colors.accent} />
        </Card>
      </>
    );
  }

  return (
    <TouchableWithoutFeedback
    // onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.screen}>
        <Text style={styles.startText}>Start a new game!</Text>

        <Card style={styles.card}>
          <Input
            keyboardType="number-pad"
            maxLength={2}
            onChange={(e) => setGuessInput(e)}
            value={guessNumber}
            blurOnSubmit
          />
          <View style={styles.btnView}>
            <View style={styles.btn}>
              <Button
                title="Reset"
                onPress={resetGuessHandler}
                color={Colors.accent}
              />
            </View>

            <View style={styles.btn}>
              <Button
                title="Confirm"
                onPress={submitGuessHandler}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
        {confirmOuput}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    alignItems: "center",
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
    marginTop: 20
  },

  selectedNumberView:{
    paddingHorizontal: 10,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: Colors.accent,
    marginVertical: 10
  },

  startText: {
    fontSize: 20,
    marginVertical: 10,
  },

  inputView: {
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
  },

  btnView: {
    marginTop: "10",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  btn: {
    width: "40%",
  },
});

export default StartGameScreen;
