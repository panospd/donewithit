import React, { useState } from "react"
import { StyleSheet, Image } from "react-native"
import * as Yup from "yup"

import Screen from "../components/Screen"

import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton
} from "../components/forms"
import usersApi from "../api/users"
import authApi from "../api/auth"
import useAuth from "../auth/useAuth"
import useApi from "../hooks/useApi"
import ActivityIndicator from "../components/ActivityIndicator"

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

export default function RegisterScreen() {
  const registerApi = useApi(usersApi.register)
  const loginApi = useApi(authApi.login)
  const auth = useAuth()

  const [error, setError] = useState()

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo)

    if (!result.ok) {
      const errorMessage = result.data
        ? result.data.error
        : "An unexpected error occurred."

      return setError(errorMessage)
    }

    setError(null)

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    )

    auth.login(authToken)
  }

  return (
    <>
      <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />

        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <ErrorMessage error={error} visible={!!error} />
          <FormField
            placeholder="Name"
            icon="account"
            autoCapitalize="none"
            autoCorrect={false}
            name="name"
          />
          <FormField
            placeholder="Email"
            icon="email"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            textContentType="emailAddress"
            name="email"
          />
          <FormField
            autoCapitalize="none"
            placeholder="Password"
            autoCorrect={false}
            icon="lock"
            textContentType="password"
            secureTextEntry
            name="password"
          />
          <SubmitButton title="Register" />
        </Form>
      </Screen>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20
  }
})
