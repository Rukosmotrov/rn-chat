import { StyleSheet, View } from "react-native";

const Container = ({ children }) => {
  return <View style={styles.containter}>{children}</View>;
};

const styles = StyleSheet.create({
  containter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Container;
