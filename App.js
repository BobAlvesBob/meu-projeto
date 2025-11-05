import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [userModalidade, setUserModalidade] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Escolha uma modalidade:</Text>

      <Picker
        selectedValue={userModalidade}
        onValueChange={(itemValue) => setUserModalidade(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Selecione a Modalidade" value="" />
        <Picker.Item label="Futebol" value="futebol" />
        <Picker.Item label="Vôlei" value="volei" />
        <Picker.Item label="Basquete" value="basquete" />
      </Picker>

      {userModalidade !== '' && (
        <Text style={styles.resultado}>
          🏅 Modalidade selecionada: <Text style={{ fontWeight: 'bold' }}>{userModalidade}</Text>
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    backgroundColor: '#f0f0f0',
    marginBottom: 20,
  },
  resultado: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
});


