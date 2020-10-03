import Constants from "expo-constants"

import React from "react"
import { View, StyleSheet } from "react-native"

export default function Screen({ children, style }) {
  return <View style={[styles.screen, style]}>{children}</View>
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1
  }
})
