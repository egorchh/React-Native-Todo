import React, { useState } from "react";
import { StyleSheet, View, Button, Alert } from "react-native";
import { EditModal } from "../components/EditModal";
import { AppCard } from "../components/ui/AppCard";
import { THEME } from "../theme";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppButton } from "../components/ui/AppButton";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export const TodoScreen = ({ goBack, todo, removeTodo }) => {
  const [modal, setModal] = useState(false);

  const changeName = (input) => {
    if (input.trim().length < 3) {
      setModal(true);
      Alert.alert("Error", "The minimum string length is 3 characters.");
    } else {
      todo.title = input;
    }
  };

  return (
    <View>
      <EditModal
        visible={modal}
        closeModal={() => setModal(false)}
        onChange={changeName}
      />

      <AppCard style={styles.card}>
        <AppTextBold style={styles.title}>{todo.title}</AppTextBold>
        <AppButton color={THEME.MAIN_COLOR} onPress={() => setModal(true)}>
          <FontAwesome name="edit" size={20} />
        </AppButton>
      </AppCard>

      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={goBack} color={THEME.GRAY_COLOR}>
            <AntDesign name="back" size={20} color="#fff" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton
            color={THEME.DANGER_COLOR}
            onPress={() => {
              removeTodo(todo.id);
            }}
          >
            <FontAwesome name="remove" size={20} />
          </AppButton>
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
  editButton: {},
  title: {
    fontSize: 18,
  },
  card: {
    marginBottom: 20,
    marginTop: 10,
  },
});
