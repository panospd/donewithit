import React from "react"

import { useFormikContext } from "formik"
import Picker from "../Picker"
import ErrorMessage from "./ErrorMessage"

export default function AppFormPicker({
  items,
  name,
  placeholder,
  width,
  PickerItemComponent,
  numberOfColumns
}) {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  return (
    <React.Fragment>
      <Picker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
        PickerItemComponent={PickerItemComponent}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  )
}
