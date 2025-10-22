import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

const Sum = (props) => {
  return(<Text>{props.num1 + props.num2}</Text>);
}

const Counter = () => {
  const [count, setCount] = useState(0);
  return (  
    <View>
      <Text>valor: {count}</Text>
      <Button title='+' onPress={() => setCount(count + 1)}/>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Sum num1={10} num2={20}/>
      <View style={{backgroundColor:'red'}}>
        <Text>Inner view</Text>
      </View>
      <Counter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});