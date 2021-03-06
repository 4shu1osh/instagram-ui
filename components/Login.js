import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Login({navigation}) {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  function onChangePassword(text) {
    setPass(text);
  }

  function onChangeUsername(text) {
    setName(text);
  }

  function isDataFilled() {
    if(name.length === 0 || pass.length < 6)
      return false
    else 
      return true
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>
    <View style={styles.container}>
      <Text style={styles.header}>
        {'English(India)'}
        <Image
          source={require('../assets/photos/down-arrow.png')}
          style={{height: 12, width: 12}}
        />
      </Text>

      <View style={styles.login}>
        <Image
          source={require('../assets/photos/ig.png')}
          style={{height: 50, width: 175, marginBottom: 20, margin: 'auto'}}
        />
        <TextInput
          placeholder="Phone number, email or username"
          placeholderTextColor={'#909090'}
          style={styles.input}
          onChangeText={onChangeUsername}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor={'#909090'}
          style={styles.input}
          secureTextEntry={true}
          onChangeText={onChangePassword}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {isDataFilled() === false?
        (<View style={[styles.button, {opacity: 0.4}]}>
          <Text style={{color: 'white'}}>{'Log in'}</Text>
        </View>)
        :
        (<TouchableOpacity onPress={() => {navigation.navigate('LowerTab')
        }}>
          <View style={styles.button}>
            <Text style={{color: 'white'}}>{'Log in'}</Text>
          </View>
        </TouchableOpacity>)}
        <Text style={{color: '#909090', fontSize: 12, marginBottom: 16}}>
          {'Forgot your login details? '}
          <Text style={{color: 'white'}}>{'Get help logging in.'}</Text>
        </Text>
        <View style={{flexDirection: 'row', marginBottom: 20}}>
          <View style={styles.line} />
          <Text style={{color: '#909090', margin: 'auto'}}>{'   OR   '}</Text>
          <View style={styles.line} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../assets/photos/fb.png')}
            style={{height: 20, width: 20}}
          />
          <Text
            style={{
              color: '#1877f2',
              alignSelf: 'center',
              margin:'auto',
            }}>
            {'  Log in with Facebook'}
          </Text>
        </View>
      </View>
      <View style={styles.footer} />
      <Text
        style={{
          color: '#909090',
          fontSize: 12,
          alignSelf: 'center',
          margin: 'auto'
        }}>
        {"Don't have an account?"}
        <Text onPress={()=> navigation.navigate('Register')} style={{color: 'white', marginBottom:10}}>{' Sign up.'}</Text>
      </Text>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: 'black',
    marginTop: 6
  },
  login: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'white',
    padding: 16,
    marginBottom: 14,
    backgroundColor: '#282828',
    width: '100%',
    borderRadius: 6,
    color: 'white',
  },
  header: {
    color: '#909090',
    textAlign: 'center',
margin: 'auto'
  },
  button: {
    backgroundColor: '#3897f0',
    width: 329,
    alignItems: 'center',
    padding: 16,
    borderRadius: 6,
    marginBottom: 16,
  },
  line: {
    backgroundColor: '#909090',
    height: 1,
    width: 140,
    justifyContent: 'flex-start',
    alignSelf: 'center',
  },
  footer: {
    backgroundColor: '#909090',
    height: 0.2,
    width: 329,
    marginBottom: 14,
  },
});
