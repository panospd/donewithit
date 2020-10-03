import React from "react"
import { ImageBackground, Text, View, StyleSheet, Image } from "react-native"
import Button from "../components/Button"

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    position: "relative",
    alignItems: "center"
  },
  logo: {
    width: 100,
    height: 100
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center"
  },
  buttonsContainer: {
    padding: 20,
    width: "100%"
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20
  }
})
