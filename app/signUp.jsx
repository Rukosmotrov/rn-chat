import { Button, Input, Divider } from "@rneui/base";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View, Alert } from "react-native";
import InputPassword from "../components/InputPassword";
import { Formik } from "formik";
import { SignUpSchema } from "../utils/validation";
import Error from "../components/Error";
import axios from "axios";
import { API_URL } from "@env";
import FormField from "../components/FormField";

const SignUp = () => {
  const handleSignUp = (values) => {
    const userData = {
      email: values.email,
      password: values.password,
    };

    axios
      .post(`${API_URL}/api/register`, userData)
      .then(() => {
        Alert.alert("Successfully registered");
      })
      .catch((err) => {
        Alert.alert("Error: " + err.message);
      });
  };

  const logIn = () => {
    router.push("/");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignUpSchema}
      onSubmit={handleSignUp}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View style={styles.container}>
          <FormField
            name="email"
            placeholder="example@example.com"
            onChangeText={handleChange("email")}
            value={values.email}
          />
          <InputPassword
            value={values.password}
            onChangeText={handleChange("password")}
          />
          <Error name="password" />
          <Button
            title={"Sign Up"}
            buttonStyle={{ borderRadius: 9, marginBottom: 16 }}
            onPress={handleSubmit}
          />
          <Divider
            inset={true}
            insetType="middle"
            width={1}
            style={{ marginBottom: 16 }}
          />
          <Button
            title={"Log In"}
            type="outline"
            buttonStyle={{ borderRadius: 9 }}
            onPress={logIn}
          />
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
});

export default SignUp;
