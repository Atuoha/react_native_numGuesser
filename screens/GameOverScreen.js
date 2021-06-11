import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Default_styles from "../constants/default-styles";
import MainButton from "../components/MainButton";

export default function GameOverScreen(props) {
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Card style={styles.card}>
          <View style={styles.imageView}>
            <Image
              source={require("../assets/success.png")}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <Text style={Default_styles.bold}>Game Over!</Text>
          <Text style={{ fontSize: 20 }}>
            Number of Rounds:{" "}
            <Text style={{ fontWeight: "bold" }}>{props.rounds}</Text>
          </Text>
          <Text style={styles.number}>{props.userNumber}</Text>

          <MainButton onPress={props.newGame}>NEW GAME</MainButton>
        </Card>
      </View>
    </ScrollView>
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
    fontSize: Dimensions.get("window").width > 350 ? 35 : 20,
  },

  card: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: Dimensions.get("window").height > 400 ? 20 : 10,
    borderRadius: 10,
    width: "80%",
    minWidth: 300,
    alignItems: "center",
  },
  imageView: {
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 5,
  },

  image: {
    width: "100%",
    height: "100%",
  },
});
