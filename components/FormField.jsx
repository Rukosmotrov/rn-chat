import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ErrorMessage } from "formik";
import { Input } from "@rneui/base";
import { capitalizeText } from "../utils/helpers";

const FormField = ({ name, value, placeholder, onChangeText }) => {
  return (
    <View>
      <Input
        label={capitalizeText(name)}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        autoCapitalize="none"
      />
      <Text style={styles.error}>
        <ErrorMessage name={name} />
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  error: {
    color: "red",
    marginTop: -8,
    marginBottom: 8,
    marginLeft: 10,
  },
});

export default FormField;
