import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import Container from "../components/Container";
import { API_URL } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const HomeScreen = () => {
  const [userData, setUserData] = useState({});

  const getUserData = async () => {
    const token = await AsyncStorage.getItem("token");
    await axios
      .post(`${API_URL}/api/userdata`, { token })
      .then((res) => setUserData(res.data.data));
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <Container>
      <Text>{userData.email}</Text>
    </Container>
  );
};

export default HomeScreen;
