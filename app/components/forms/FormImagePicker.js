import { useFormikContext } from "formik"
import React from "react"
import { View, StyleSheet } from "react-native"
import ImageInputList from "../ImageInputList"
import ErrorMessage from "./ErrorMessage"

export default function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  const imageUris = values[name]

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((u) => u !== uri)
    )
  }

  return (
    <>
      {imageUris && (
        <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
      )}
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}
