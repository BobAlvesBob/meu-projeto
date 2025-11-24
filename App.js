
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

import { collection, addDoc, onSnapshot } from 'firebase/firestore';
import{ db } from './firebase.config.js';

export default function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'messages'), (snapshot) => {
      const list = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(list.reverse()); // newest first
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async () => {
    if (message.trim()) {
      await addDoc(collection(db, 'messages'), {
        text: message,
        timestamp: Date.now(),
      });
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 Firebase Chat</Text>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        style={styles.list}
        renderItem={({ item }) => (
          <View style={styles.messageBubble}>
            <Text>{item.text}</Text>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type a message"
          value={message}
          onChangeText={setMessage}
          style={styles.input}
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  list: {
    flex: 1,
    marginVertical: 10,
  },
  messageBubble: {
    backgroundColor: '#e0f7fa',
    padding: 10,
    marginVertical: 4,
    borderRadius: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});
