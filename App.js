import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';

export default function App() {
  const [bgColor, setBgColor] = useState('#fff');

  const showInfoAlert = () => {
    Alert.alert("Alerta informativo", "Pressione OK para fechar");
  };

  const showYesNoAlert = () => {
    Alert.alert(
      "Confirmação",
      "Você deseja continuar?",
      [
        { text: "NÃO", onPress: () => console.log("Opção escolhida: NÃO") },
        { text: "SIM", onPress: () => console.log("Opção escolhida: SIM") },
      ]
    );
  };

  const showColorAlert = () => {
    Alert.alert(
      "Escolha uma cor",
      "Verde, Vermelho ou Branco",
      [
        { text: "Verde", onPress: () => setBgColor("green") },
        { text: "Vermelho", onPress: () => setBgColor("red") },
        { text: "Branco", onPress: () => setBgColor("white") },
      ]
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Aplicação de Alertas</Text>
      <Button title="Informativo" onPress={showInfoAlert} />
      <Button title="SIM ou NÃO" onPress={showYesNoAlert} style={styles.button} />
      <Button title="Cor de fundo" onPress={showColorAlert} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    marginVertical: 10,
  },
});
