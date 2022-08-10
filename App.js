import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Alert } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";

import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

async function loadApplication() {
  await Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(true);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
    { title: "Выучить React Native", id: "124" },
    { title: "Выучить JavaScript", id: "125" },
    { title: "Выучить React", id: "126" },
  ]);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={(err) => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    );
  }

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: Date.now().toString(),
        title,
      },
      ...prev,
    ]);
  };

  const removeTodo = (id) => {
    const todo = todos.find((t) => t.id === id);
    Alert.alert(
      "Removing elements",
      `Are you sure to delete "${todo.title}"?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            setTodoId(null);
            setTodos((prev) => prev.filter((item) => item.id !== id));
          },
        },
      ]
    );
  };

  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      openTodo={setTodoId}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        removeTodo={removeTodo}
        todo={selectedTodo}
        goBack={() => setTodoId(null)}
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
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
