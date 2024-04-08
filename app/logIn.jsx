import { Button, Input, Divider } from "@rneui/base";
import { router } from "expo-router";
import { Formik } from "formik";
import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import InputPassword from "../components/InputPassword";
import Error from "../components/Error";
import { LogInSchema } from "../utils/validation";
import axios from "axios";
import { API_URL } from "@env";
import FormField from "../components/FormField";
import AsyncStorage from "@react-native-async-storage/async-storage"

const LogIn = () => {
  const handleLogIn = (values) => {
    const userData = {
      email: values.email,
      password: values.password,
    };

    axios
      .post(`${API_URL}/api/login`, userData)
      .then((res) => {
        if (res.data.status === "201") {
          Alert.alert("Successfully logged in");
          AsyncStorage.setItem('token', res.data.data)
          AsyncStorage.setItem('isLoggedIn', JSON.stringify(true))
          router.push("/Home");
        }
      })
      .catch((err) => {
        Alert.alert("Error: " + err.message);
      });
  };

  const signUp = () => {
    router.push("/signUp");
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={LogInSchema}
      onSubmit={handleLogIn}
    >
      {({ handleChange, handleSubmit, values }) => (
        <View>
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
            title={"Log In"}
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
            title={"Sign Up"}
            type="outline"
            buttonStyle={{ borderRadius: 9 }}
            onPress={signUp}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
  },
});

export default LogIn;
