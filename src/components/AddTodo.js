import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { THEME } from "../theme";

export const AddTodo = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value.trim());
      setValue("");
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
      <View style={styles.button}>
        <Button color={THEME.GRAY_COLOR} title="Add" onPress={pressHandler} />
      </View>
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
    width: "65%",
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.GRAY_COLOR,
    padding: 7,
  },
  button: {
    width: "30%",
  },
});
