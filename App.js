import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase';
import AuthForm from './components/AuthForm';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return unsubscribe;
  }, []);

  const handleRegister = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text>Bem-vindo, {user.email}!</Text>
          <Text>UID: {user.uid}</Text>
          <Button title="Sair" onPress={handleLogout} />
        </>
      ) : (
        <>
          <Text>Entrar</Text>
          <AuthForm onSubmit={handleLogin} buttonText="Login" />
          <Text>Ou criar conta:</Text>
          <AuthForm onSubmit={handleRegister} buttonText="Registrar" />
        </>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
});

