import { Input, Icon } from "@rneui/base";
import React, { useState } from "react";

const InputPassword = ({ onChangeText, value, ...props }) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const passwordIcon = passwordVisible ? "eye-with-line" : "eye";

  return (
    <Input
      {...props}
      label="Password"
      secureTextEntry={passwordVisible}
      placeholder="12345678"
      onChangeText={onChangeText}
      value={value}
      autoCapitalize="none"
      rightIcon={
        <Icon
          name={passwordIcon}
          type="entypo"
          color="#000000"
          onPress={() => setPasswordVisible(!passwordVisible)}
        />
      }
    />
  );
};

export default InputPassword;
