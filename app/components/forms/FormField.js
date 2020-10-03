import React from "react"
import { StyleSheet } from "react-native"
import { useFormikContext } from "formik"

import TextInput from "../TextInput"
import ErrorMessage from "./ErrorMessage"

export default function AppFormField({ name, width, ...rest }) {
  const {
    setFieldTouched,
    setFieldValue,
    errors,
    touched,
    values
  } = useFormikContext()
  return (
    <>
      <TextInput
        width={width}
        style={styles.input}
        {...rest}
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1
  }
})
