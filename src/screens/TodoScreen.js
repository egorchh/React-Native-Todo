import React, { useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";

export const TodoScreen = ({ goBack, todo, removeTodo }) => {
  const [modal, setModal] = useState(false);

  const changeName = (input) => {
    todo.title = input;
  };

  return (
    <View>
      <EditModal
        visible={modal}
        closeModal={() => setModal(false)}
        onChange={changeName}
      />

      <AppCard style={styles.card}>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Edit" onPress={() => setModal(true)} />
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Back" color={THEME.GRAY_COLOR} onPress={goBack} />
        </View>
        <View style={styles.button}>
          <Button
            title="Remove"
            color={THEME.DANGER_COLOR}
            onPress={() => {
              removeTodo(todo.id);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    width: "48%",
  },
  title: {
    fontSize: 18,
  },
  card: {
    marginBottom: 20,
    marginTop: 10,
  },
});
