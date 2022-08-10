import React from "react";

import { View, StyleSheet, TouchableOpacity } from "react-native";
import { AppText } from "./ui/AppText";

export const Todo = ({ todo, onRemove, onOpen }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      onPress={() => onOpen(todo.id)}
      onLongPress={() => onRemove(todo.id)}
    >
      <View>
        <AppText style={styles.todo}>{todo.title}</AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingVertical: 8,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    fontSize: 16,
  },
});
