import React from 'react';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import './i18n'; // Importa a configuração de idiomas

export default function App() {
  const { t } = useTranslation(); // Hook para acessar traduções

  return (
    <View>
      <Text>{t('welcome')}</Text>
      <Text>{t('message')}</Text>
    </View>
  );
}
