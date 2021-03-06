import React from "react"
import { View, StyleSheet, Image, TouchableHighlight } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import Swipeable from "react-native-gesture-handler/Swipeable"
import colors from "../../config/colors"
import Text from "../Text"

export default function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={colors.light}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text numberOfLines={1} style={styles.title}>
              {title}
            </Text>
            {subTitle && (
              <Text numberOfLines={1} style={styles.subTitle}>
                {subTitle}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight>
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
    alignItems: "center"
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35
  },
  title: {
    fontWeight: "500"
  },
  subTitle: {
    color: colors.medium
  }
})
