
import React, { useState } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    // Apply a dynamic background that changes with the switch state
    <View style={[styles.container, { backgroundColor: isEnabled ? '#e0ffe0' : '#ebd2e1ff' }]}>
      <Switch
        value={isEnabled}
        onValueChange={setIsEnabled}
        trackColor={{ false: "#3de22eff", true: "green" }} // Changes the background track color
        thumbColor={isEnabled ? "white" : "red"} // Changes the toggle circle color
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;







