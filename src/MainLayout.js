import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "./theme";

import { StatusBar } from "expo-status-bar";
import { Navbar } from "./components/Navbar";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { TodoContext } from "./context/todo/todoContext";
import { ScreenContext } from "./context/screen/screenContext";

export const MainLayout = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);

  // const removeTodo = (id) => {
  //   const todo = todos.find((t) => t.id === id);
  //   Alert.alert(
  //     "Removing elements",
  //     `Are you sure to delete "${todo.title}"?`,
  //     [
  //       {
  //         text: "Cancel",
  //         style: "cancel",
  //       },
  //       {
  //         text: "Delete",
  //         onPress: () => {
  //           setTodoId(null);
  //           setTodos((prev) => prev.filter((item) => item.id !== id));
  //         },
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  // };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={changeScreen}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        removeTodo={removeTodo}
        todo={selectedTodo}
        goBack={() => changeScreen(null)}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <StatusBar style="auto" />
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 10,
  },
});
