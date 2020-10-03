import React, { useState } from "react"
import { StyleSheet, Image } from "react-native"
import * as Yup from "yup"

import Screen from "../components/Screen"
import {
  Form,
  FormField,
  SubmitButton,
  ErrorMessage
} from "../components/forms"
import authApi from "../api/auth"
import useAuth from "../auth/useAuth"

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password")
})

export default function LoginScreen() {
  const { login } = useAuth()

  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password)

    if (!result.ok) return setLoginFailed(true)

    setLoginFailed(false)
    login(result.data)
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.png")} />
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}>
        <ErrorMessage
          error="Invalid email and/or password"
          visible={loginFailed}
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
        <SubmitButton title="Login" />
      </Form>
    </Screen>
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
