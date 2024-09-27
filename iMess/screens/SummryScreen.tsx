import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Text, Card } from "react-native-paper";
import { LineChart, BarChart } from "react-native-chart-kit";

const SummaryScreen = () => {
  const summary = {
    totalMeals: 30,
    totalPrice: 1500,
    favoriteMeal: "Lunch - Rice and Chicken Curry",
  };


  const mealData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [5, 3, 4, 7, 6, 8, 5],
      },
    ],
  };

  const priceData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [200, 300, 150, 400, 250, 450, 300],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Total Meals" />
        <Card.Content>
          <Text style={styles.summaryText}>{summary.totalMeals}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Total Price" />
        <Card.Content>
          <Text style={styles.summaryText}>{summary.totalPrice} tk</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Favorite Meal" />
        <Card.Content>
          <Text style={styles.summaryText}>{summary.favoriteMeal}</Text>
        </Card.Content>
      </Card>

      <Card style={styles.chartCard}>
        <Card.Title title="Meals Over the Week" />
        <Card.Content>
          <LineChart
            data={mealData}
            width={350}
            height={220}
            yAxisLabel=""
            yAxisSuffix=" meals"
            chartConfig={{
              backgroundColor: "#FFF",
              backgroundGradientFrom: "#FFF",
              backgroundGradientTo: "#FFF",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(34, 202, 236, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForDots: {
                r: "6",
                strokeWidth: "2",
                stroke: "#34CEEC",
              },
            }}
            bezier
          />
        </Card.Content>
      </Card>

      <Card style={styles.chartCard}>
        <Card.Title title="Price Over the Week" />
        <Card.Content>
          <BarChart
            data={priceData}
            width={350}
            height={220}
            yAxisLabel=""
            yAxisSuffix=" tk"
            chartConfig={{
              backgroundColor: "#FFF",
              backgroundGradientFrom: "#FFF",
              backgroundGradientTo: "#FFF",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForLabels: {
                fontSize: 12,
                fontWeight: "bold",
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F7F7F7",
  },
  card: {
    marginBottom: 10,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: "#FFFFFF", 
  },
  summaryText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  chartCard: {
    marginBottom: 10,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
});

export default SummaryScreen;
