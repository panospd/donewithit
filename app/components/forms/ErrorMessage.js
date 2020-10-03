import React from "react"

import { StyleSheet } from "react-native"

import Text from "../Text"

export default function ErrorMessage({ error, visible }) {
  return error && visible ? <Text style={styles.error}>{error}</Text> : null
}

const styles = StyleSheet.create({
  error: {
    color: "red"
  }
})
