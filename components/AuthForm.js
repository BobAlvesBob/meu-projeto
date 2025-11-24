import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function AuthForm({ onSubmit, buttonText }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title={buttonText} onPress={() => onSubmit(email, password)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: '80%', marginVertical: 20 },
  input: {
    borderBottomWidth: 1,
    borderColor: '#aaa',
    padding: 8,
    marginBottom: 10,
  },
});