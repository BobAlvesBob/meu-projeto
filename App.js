import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity ,Button} from 'react-native';
import Counter from './Counter.js';

const usercard = ({name, age}) => {
  return(
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
    </View>
  )
}
export default function App() {

  const users =[

    {id: 1, nome: "Maria", idade: 20},
    {id: 2, nome: "João", idade: 21},
    {id: 3, nome: "Pedro", idade: 22},
    {id: 4, nome: "Ana", idade: 23},
    {id: 5, nome: "Carlos", idade: 24},
    {id: 6, nome: "Laura", idade: 25},
    {id: 7, nome: "Marcelo", idade: 26},
    {id: 8, nome: "Julia", idade: 27},
  ]
  const [showCounter,setShowCounter] = useState(false);
  const Sum = (props) =>{
    return(<Text>{props.num1 + props.num2}</Text>);
  }
  return (
    <View style={styles.container}>
{users.map((user)=>(<usercard key={user.id} name={user.nome} age={user.idade}/>))}
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
  text:{
    fontsize: 18,
    marginTop: 20
  },
  button:{
    fontsize: 20,
    color:"blue",
    back: "red",
  },
});

