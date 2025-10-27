import { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import MyComponent from './components/MyComponent'

export default function App() {
const [cnt, setCnt]=useState(0);
return (
   <View style={styles.container}>
      <Text>Parent value: {cnt}</Text>
      <Button title='+' onPress={()=>{setCnt(cnt+1)}}/>
      <MyComponent counter={cnt} ff={setCnt}/>
   </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

