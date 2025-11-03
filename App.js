import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const AnimatedBox = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial opacity: 0
  const translateYAnim = useRef(new Animated.Value(50)).current; // Moves 50px down

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1, // Fully visible
        duration: 10000, // 1 second duration
        useNativeDriver: true,
      }),
      Animated.timing(translateYAnim, {
        toValue: 0, // Moves up to original position
        duration: 10000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.box, { opacity: fadeAnim, transform: [{ translateY: translateYAnim }] }]} />
  );
};
const App = () => {
  return (
    <View style={styles.container}>
      <AnimatedBox />
    </View>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  box: { width: 100, height: 100, backgroundColor: 'blue', borderRadius: 10 },
});

export default App;



