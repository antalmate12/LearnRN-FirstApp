import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setGoals((goals) => [
      ...goals,
      { text: enteredGoalText, id: (+new Date()).toString() },
    ]);

    endAddGoalHandler();
  }

  function deleteGoalHandler(goalId) {
    setGoals((goals) => goals.filter((goal) => goal.id !== goalId));
  }

  return (
    <View style={styles.appContainer}>
      {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View> */}

      <Button
        title="Add New Goal"
        color="#b180f0"
        onPress={startAddGoalHandler}
      />

      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />

      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id.toString()}
          renderItem={(itemData) => (
            <GoalItem onDeleteItem={deleteGoalHandler} item={itemData.item} />
          )}
        />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: "#1e085a",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  goalsContainer: {
    flex: 5,
  },
});
