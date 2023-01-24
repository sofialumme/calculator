import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [no1, setNo1] = useState(0);
  const [no2, setNo2] = useState(0);
  const [result, setResult] = useState(0);

  const buttonPressed = (title) => {
    if (title == '+') {
      setResult(parseInt(no1) + parseInt(no2));
    } else {
      setResult(parseInt(no1) - parseInt(no2));
    }
  }

  return (
    <View style={styles.container}>
      <Text>Result is {result}</Text>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        keyboardType='numeric'
        onChangeText={no1 => setNo1(no1)}
        value={no1}
      />
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        keyboardType='numeric'
        onChangeText={no2 => setNo2(no2)}
        value={no2}
      />
      <View style={{ flexDirection: 'row'}}>
      <Button title='+' onPress={ () => buttonPressed('+')} />
      <Button title='-' onPress={ () => buttonPressed('-')} />
      </View>
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
