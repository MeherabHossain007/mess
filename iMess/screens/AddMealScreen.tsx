import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Card, Title, Subheading } from "react-native-paper";

const AddMeal = () => {
  const [mealCount, setMealCount] = useState("");
  const [mealDescription, setMealDescription] = useState("");

  const handleAddMeal = () => {
    console.log("Meal Count:", mealCount);
    console.log("Meal Description:", mealDescription);
    setMealCount("");
    setMealDescription("");
  };

  return (
    <Card style={styles.addMealCard}>
      <Card.Content>
        <Title style={styles.cardTitle}>Add Meal</Title>
        <Subheading style={styles.cardSubtitle}>
          Enter meal details below
        </Subheading>

        <TextInput
          label="Meal Count"
          value={mealCount}
          onChangeText={setMealCount}
          style={styles.input}
          keyboardType="numeric"
          mode="outlined"
        />

        <TextInput
          label="Meal Description"
          value={mealDescription}
          onChangeText={setMealDescription}
          style={styles.input}
          multiline
          mode="outlined"
        />

        <Button mode="contained" onPress={handleAddMeal} style={styles.button}>
          Add Meal
        </Button>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  addMealCard: {
    borderRadius: 12,
    elevation: 4,
    padding: 16,
    backgroundColor: "#FFF",
    margin: 16,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6200EE", 
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 16,
    color: "#4A4A4A", 
    marginBottom: 12,
  },
  input: {
    marginBottom: 16,
    backgroundColor: "white",
  },
  button: {
    borderRadius: 20,
    paddingVertical: 8,
  },
});

export default AddMeal;
