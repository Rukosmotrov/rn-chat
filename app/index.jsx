import { View, StyleSheet } from "react-native";
import LogIn from "./logIn";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react";

const Home = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false)

  // const getData = async () => {
  //   const isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
  //   setIsLoggedIn(isLoggedIn)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  return (
    <View style={styles.container}>
      <LogIn/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },
});

export default Home;
