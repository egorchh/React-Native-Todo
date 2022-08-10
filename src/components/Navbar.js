import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../theme";
import { AppText } from "./ui/AppText";

export const Navbar = ({ title }) => {
  return (
    <View
      style={{
        ...styles.navbar,
        ...Platform.select({
          ios: styles.navbarIos,
          android: styles.navbarAndroid,
        }),
      }}
    >
      <AppText
        style={{
          ...styles.text,
          ...Platform.select({
            ios: styles.textIos,
            android: styles.textAndroid,
          }),
        }}
      >
        {title}
      </AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 80,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 10,
  },
  navbarAndroid: {
    backgroundColor: THEME.MAIN_COLOR,
  },
  navbarIos: {
    borderBottomColor: THEME.MAIN_COLOR,
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 20,
  },
  textAndroid: {
    color: "#fff",
  },
  textIos: {
    color: THEME.MAIN_COLOR,
  },
});
