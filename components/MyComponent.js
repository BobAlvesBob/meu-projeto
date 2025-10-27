const MyComponent = ({ counter, ff }) => {
    return (
      <View style={styles.childContainer}>
        <Text>Child value: {counter}</Text>
        <Button title="-" onPress={() => ff(counter - 1)} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    childContainer: {
      marginTop: 20,
      padding: 15,
      backgroundColor: "#ddd",
      borderRadius: 10,
      alignItems: "center",
    },
  });
  
  export default MyComponent;