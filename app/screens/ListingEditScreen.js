import React, { useState } from "react"
import { Alert, StyleSheet } from "react-native"
import * as Yup from "yup"

import CategoryPickerItem from "../components/CategoryPickerItem"
import { Form, FormField, SubmitButton, FormPicker } from "../components/forms"
import FormImagePicker from "../components/forms/FormImagePicker"
import listingsApi from "../api/listings"
import Screen from "../components/Screen"
import useLocation from "../hooks/useLocation"
import UploadScreen from "./UploadScreen"

const validationSchema = Yup.object().shape({
  title: Yup.string().required().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image")
})

const categories = [
  {
    label: "Furniture",
    backgroundColor: "red",
    icon: "apps",
    value: 1
  },
  {
    label: "Clothing",
    backgroundColor: "green",
    icon: "email",
    value: 2
  },
  {
    label: "Camera",
    backgroundColor: "blue",
    icon: "lock",
    value: 3
  }
]

export default function ListingEditScreen() {
  const location = useLocation()
  const [uploadVisible, setUploadVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0)
    setUploadVisible(true)
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress) => setProgress(progress)
    )

    if (!result.ok) {
      setUploadVisible(false)
      return alert("Could not save the listing.")
    }

    resetForm()
  }

  return (
    <Screen style={styles.container}>
      <UploadScreen
        progress={progress}
        visible={uploadVisible}
        onDone={() => setUploadVisible(false)}
      />
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: []
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <FormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  }
})
