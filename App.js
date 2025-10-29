import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("white"); // Default background color

  const handleTextChange = (newText) => {
    setText(newText);
    
    // Check if text is "blue" (case insensitive)
    if (newText.toLowerCase() === "blue") {
      setBgColor("blue");
    } else {
      setBgColor("white"); // Reset if it's not "blue"
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.label}>Enter a color:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={handleTextChange}
      />
      <Text style={styles.output}>You typed: {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  label: { fontSize: 18, marginBottom: 10 },
  input: {
    width: 200,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  output: { fontSize: 20, marginTop: 20, fontWeight: "bold" },
});
