import React from "react"
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import Text from "./Text"
import Icon from "./Icon"

export default function CategoryPickerItem({ item, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={item.icon}
          backgroundColor={item.backgroundColor}
          size={80}
        />
        <Text style={styles.label}>{item.label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%"
  },
  label: {
    marginTop: 5,
    textAlign: "center"
  }
})
