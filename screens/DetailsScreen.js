//screens/DetailsScreen.js

import React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ navigation, onSave }) {
  const handleClick = () => {
    onSave && onSave({ result: 'Sucesso!' });
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>📄 Tela Detalhes</Text>
      <Button title="Salvar e Voltar" onPress={handleClick} />
    </View>
  );
}


