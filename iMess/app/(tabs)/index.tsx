import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddMealScreen from "@/screens/AddMealScreen";
import HomeScreen from "@/screens/HomeScreen";
import SummaryScreen from "@/screens/SummryScreen";

const Tab = createBottomTabNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#6200EE",
    accent: "#03DAC6",
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ size }) => {
              let iconName: "home" | "plus-circle" | "chart-bar" | undefined;
              if (route.name === "Home") {
                iconName = "home";
              } else if (route.name === "Add Meal") {
                iconName = "plus-circle";
              } else if (route.name === "Summary") {
                iconName = "chart-bar";
              }
              return (
                <MaterialCommunityIcons
                  name={iconName}
                  size={size}
                  color={"#6200EE"}
                />
              );
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Add Meal" component={AddMealScreen} />
          <Tab.Screen name="Summary" component={SummaryScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
