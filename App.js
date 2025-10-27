
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function App() {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={text}
        onChangeText={(newText) => setText(newText)}
      />
      <Text style={styles.output}>Hello, {text}!</Text>
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
  },
  output: { fontSize: 20, marginTop: 20, fontWeight: "bold" },
});

//-----------------------------------------