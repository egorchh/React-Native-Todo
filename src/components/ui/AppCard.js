import React from "react";

import { StyleSheet, View } from "react-native";

export const AppCard = (props) => {
  return (
    <View style={{ ...styles.default, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 25,
    elevation: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});
