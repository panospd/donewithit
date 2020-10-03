import React from "react"
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import colors from "../../config/colors"

export default function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableWithoutFeedback style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons name="trash-can" size={35} color={colors.white} />
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  }
})
