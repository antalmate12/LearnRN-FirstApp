import { StyleSheet, Text, View, Pressable } from "react-native";

function GoalItem(props) {
  function deleteItem() {
    props.onDeleteItem(props.item.id);
  }

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{
          color: "#dddddd",
        }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={props.onDeleteItem.bind(this, props.item.id)}
      >
        <Text style={styles.goalText}>{props.item.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "rebeccapurple",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  goalText: { padding: 10, fontSize: 18, color: "white" },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
