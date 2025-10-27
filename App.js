
//App.js
import React from "react";
import { View } from "react-native";
import GuessComponent from "./components/GuessTheWinner";

export default function App() {
  const teams = [
    "Porto",
    "Inter",
    "Man City",
    "Bayern",
    "Real Madrid",
    "Chelsea",
    "Milan",
    "Napoli",
  ];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <GuessComponent teams={teams} />
    </View>
  );
}

