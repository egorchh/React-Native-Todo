import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../theme";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value.trim());
      setValue("");
      Keyboard.dismiss();
    } else {
      Alert.alert("Введите запланированную задачу<3");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder="Add target"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <AntDesign.Button
        style={styles.button}
        onPress={pressHandler}
        name="pluscircleo"
      >
        ADD
      </AntDesign.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: "60%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.GRAY_COLOR,
    padding: 7,
  },
  button: {
    width: 140,
    justifyContent: "center",
  },
});
