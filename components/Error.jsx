import React from "react";
import { StyleSheet, Text } from "react-native";
import { ErrorMessage } from "formik";

const Error = ({ name }) => {
  return (
    <Text style={styles.error}>
      <ErrorMessage name={name} />
    </Text>
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

export default Error;
