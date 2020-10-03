import React from "react"
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native"
import { Image } from "react-native-expo-image-cache"

import colors from "../config/colors"
import Text from "./Text"

export default function Card({
  title,
  subTitle,
  imageUrl,
  onPress,
  thumbnailUrl
}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          uri={imageUrl}
          tint="light"
        />
        <View style={styles.detailsContainer}>
          <Text numberOfLines={1} style={styles.title}>
            {title}
          </Text>
          <Text numberOfLines={1} style={styles.subTitle}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden"
  },
  image: {
    width: "100%",
    height: 200
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    marginBottom: 7
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold"
  }
})
