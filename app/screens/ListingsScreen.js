import React, { useEffect, useState } from "react"
import { FlatList, StyleSheet } from "react-native"
import Card from "../components/Card"

import Screen from "../components/Screen"
import colors from "../config/colors"
import routes from "../navigation/routes"
import listingsApi from "../api/listings"
import AppText from "../components/Text"
import AppButton from "../components/Button"
import ActivityIndicator from "../components/ActivityIndicator"
import useApi from "../hooks/useApi"

export default function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(
    listingsApi.getListings
  )

  useEffect(() => {
    loadListings()
  }, [])

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </>
        )}

        <FlatList
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <Card
                title={item.title}
                subTitle={`$${item.price}`}
                imageUrl={item.images[0].url}
                onPress={() =>
                  navigation.navigate(routes.LISTING_DETAILS, item)
                }
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            )
          }}
        />
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  }
})
