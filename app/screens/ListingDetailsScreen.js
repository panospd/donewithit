import React from "react"
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native"
import { Image } from "react-native-expo-image-cache"

import Text from "../components/Text"
import ListItem from "../components/lists/ListItem"
import colors from "../config/colors"
import ContactSellerForm from "../components/ContactSellerForm"

export default function ListingDetailsScreen({ route }) {
  const listing = route.params

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}>
      <Image
        style={styles.image}
        uri={listing.images[0].url}
        preview={{ uri: listing.images[0].thumbnail }}
        tint="light"
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>{listing.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/icon.png")}
            title="Mosh Hamedani"
            subTitle="5 listings"
          />
        </View>
        <ContactSellerForm listing={listing} />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "30%"
  },
  detailsContainer: {
    padding: 12
  },
  title: {
    fontSize: 24,
    fontWeight: "500"
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5
  },
  userContainer: {
    marginVertical: 25
  }
})
