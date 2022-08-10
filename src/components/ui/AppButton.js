import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AppTextBold } from "./AppTextBold";
import { THEME } from "../../theme";

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold style={styles.text}>
          {typeof children === "string" ? children.toUpperCase() : children}
        </AppTextBold>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
