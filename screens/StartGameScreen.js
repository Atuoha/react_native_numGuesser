import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import SelectedNumberCard from "../components/SelectedNumberCard";
import Colors from "../constants/colors";

function StartGameScreen(props) {
  const [guessNumber, setGuessNumber] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState("");
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };
    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, []);
  
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

  const passSelectedNumberToApp = () => {
    props.onStartGame(selectedNumber);
  };

  let confirmOuput;
  if (confirm) {
    confirmOuput = (
      <SelectedNumberCard
        onPressStartBtn={passSelectedNumberToApp}
        selectedNumber={selectedNumber}
      />
    );
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
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
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    onPress={resetGuessHandler}
                    color={Colors.accent}
                  />
                </View>

                <View style={{ width: buttonWidth }}>
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
      </KeyboardAvoidingView>
    </ScrollView>
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

  startText: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },

  inputView: {
    width: "*0%",
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
  },

  btnView: {
    marginTop: "10",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  //   btn: {
  //       width: Dimensions.get('window').width / 4
  //     // width: "40%",
  //   },
});

export default StartGameScreen;
