import React from "react";
import styles from "./styles";
import { View } from "react-native";
import Logo from "../../../assets/Logo/Logo.svg";

export default function () {
  return (
    <View style={styles.container}>
      <Logo style={styles.tamanhoLogo} />
    </View>
  );
}
