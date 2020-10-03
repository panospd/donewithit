import React from "react"
import { View, StyleSheet } from "react-native"
import Constants from "expo-constants"
import { useNetInfo } from "@react-native-community/netinfo"

import colors from "../config/colors"
import Text from "./Text"

export default function OfflineNotice() {
  const netInfo = useNetInfo()

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No internet Connection</Text>
      </View>
    )
  }

  return null
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    width: "100%",
    position: "absolute",
    zIndex: 1,
    elevation: 2,
    top: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: colors.white
  }
})
