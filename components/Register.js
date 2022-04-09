import {View, Text, StyleSheet, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
import LowerTab from './LowerTab';

export default function Register({navigation}) {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  function onChangePassword(text) {
    setPass(text);
  }

  function onChangeUsername(text) {
    setName(text);
  }

  return (
    <View style={styles.register}>
      <TextInput
        placeholder="username"
        style={styles.input}
        onChangeText={onChangeUsername}
      />
      <TextInput
        placeholder="password"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={onChangePassword}
      />
      <TextInput
        placeholder="re-enter password"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={onChangePassword}
      />
      <Button
        title="Submit"
        onPress={() => {
          navigation.navigate('LowerTab');
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  register: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  input: {
    borderWidtgh: 2,
  },
});
