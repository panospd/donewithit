import { Notifications } from "expo"
import React from "react"
import { Keyboard, Alert } from "react-native"
import * as Yup from "yup"

import messagesApi from "../api/messages"
import { Form, FormField, SubmitButton } from "./forms"

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).label("Message")
})

export default function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss()

    const result = await messagesApi.send(message, listing.id)

    if (!result.ok) {
      console.log("Error", result)
      return Alert.alert("Error", "Could not send a message")
    }

    resetForm()

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller."
    })
  }

  return (
    <Form
      initialValues={{ message: "" }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      <FormField
        maxLength={255}
        multiline
        name="message"
        numberofLines={3}
        placeholder="Message..."
      />
      <SubmitButton title="Contact seller" />
    </Form>
  )
}
