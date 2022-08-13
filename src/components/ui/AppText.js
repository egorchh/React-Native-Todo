import React from "react";
import { Text, StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppTextBold } from "./AppTextBold";

export const AppText = (props) => (
  <AppTextBold style={{ ...styles.default, ...props.style }}>
    {props.children}
  </AppTextBold>
);

const styles = StyleSheet.create({
  default: {
    fontFamily: "roboto-regular",
  },
});
