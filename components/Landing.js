import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

export default function Landing({navigation}) {
  return (
    <View style={styles.landing}>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}
const styles = StyleSheet.create({
  landing: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212'
  },
});
