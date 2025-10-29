
import React from 'react';
import { View, SectionList, Text, StyleSheet } from 'react-native';

const DATA = [
  {
    title: 'A',
    data: ['Alice', 'Alan'],
  },
  {
    title: 'B',
    data: ['Bob', 'Bella'],
  },
  {
    title: 'C',
    data: ['Charlie', 'Chloe'],
  },
];
const App = () => {
  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA} // Grouped data
        keyExtractor={(item, index) => item + index} // Unique key for each item
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>} // How each item looks
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text> // Section headers (A, B, C)
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 22, fontWeight: 'bold', backgroundColor: '#ddd', padding: 5 },
  item: { padding: 10, fontSize: 18, borderBottomWidth: 1, borderColor: '#ccc' },
});

export default App;


