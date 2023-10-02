import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          value={enteredGoalText}
          style={styles.textInput}
          placeholder="Your goal"
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          <Button title="Cancel" onPress={props.onCancel} color="red" />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "rebeccapurple",
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    objectFit: "contain",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    padding: 16,
    borderRadius: 8,
    width: "80%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default GoalInput;
