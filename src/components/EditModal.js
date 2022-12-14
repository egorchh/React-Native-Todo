import React, { useState } from "react";
import { View, TextInput, Button, Modal, StyleSheet, Text } from "react-native";
import { THEME } from "../theme";
import { AppText } from "./ui/AppText";
import { AppButton } from "./ui/AppButton";
import { AntDesign } from "@expo/vector-icons";

export const EditModal = ({ visible, closeModal, onChange }) => {
  const [title, setTitle] = useState("");

  return (
    <Modal visible={visible}>
      <View style={styles.wrap}>
        <AppText style={styles.title}>Edit target name</AppText>
        <View style={styles.input}>
          <TextInput
            onChangeText={setTitle}
            value={title}
            placeholder="Write new name..."
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <AppButton color={THEME.GRAY_COLOR} onPress={closeModal}>
              <AntDesign name="back" size={20} color="#fff" />
            </AppButton>
          </View>
          <View style={styles.button}>
            <AppButton
              onPress={() => {
                onChange(title);
                closeModal();
              }}
            >
              Save
            </AppButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrap: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    width: "40%",
  },
  input: {
    width: "90%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: THEME.MAIN_COLOR,
    padding: 7,
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    marginBottom: 25,
  },
});
