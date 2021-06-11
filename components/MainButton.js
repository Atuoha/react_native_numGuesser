// PS: To avoid running if checks on your files for Platform specifications, you can create different files using .android, ios or web as attachment to the .js extension of the file and write platform specific compatible codes on each file while you import the file using its name without an extension addon. E.g MainButton.android.js, MainButton.ios.js and imported using import MainButton from './MainButton'

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import Colors from "../constants/colors";

export default function MainButton(props) {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    let ButtonComponent = TouchableNativeFeedback;
  }

  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    backgroundColor: Colors.accent,
    paddingVertical: Dimensions.get("window").width > 350 ? 12 : 9,
    paddingHorizontal: 10,
    borderRadius: 25,
    textAlign: "center",
  },

  buttonText: {
    color: "white",
    fontSize: Dimensions.get("window").width > 350 ? 18 : 15,
    fontFamily: "open-sans-reg",
  },
});
