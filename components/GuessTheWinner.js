//--------------------------------------------------
//GuessTheWinner.js
import React from "react";
import { Text, View, Button } from "react-native";

const GuessTheWinner = ({ teams }) => {
  const randomIndex = Math.floor(Math.random() * teams.length);
  const teamName = teams[randomIndex];

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        The winner will be: {teamName} 🏆
      </Text>
    </View>
  );
};

export default GuessTheWinner;
