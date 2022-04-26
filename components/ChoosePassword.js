import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

export default function ChoosePassword({navigation}) {
  const [name, setName] = useState('');
  var showPass;
  const [isSelected, setSelection] = useState(false);


  function onChangeUsername(text) {
    setName(text);
  }
  function isDataFilled() {
    if (name.length > 5) return true;
    else return false;
  }
  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>

    <View style={styles.container}>
      <Text style={styles.heading}>{'Choose password'}</Text>
      <Text style={styles.text}>{'For security, your password must be 6 characters or more.'}</Text>
      <TextInput
        placeholder="Password"
        placeholderTextColor={'#808080'}
        style={styles.input}
        onChangeText={onChangeUsername}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
      />
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          boxType={'square'}
          onFillColor={'#3897f0'}
          lineWidth={2}
          onCheckColor={'black'}
          animationDuration={0.5}
          style={{ width: 16, height: 16, marginLeft: 8 }}
        />
        <Text style={styles.label}>Remember Password</Text>
      </View>
      {isDataFilled() === false?
        (<View style={[styles.button, {opacity: 0.4}]}>
          <Text style={{color: 'white'}}>{'Next'}</Text>
        </View>)
        :
        (<TouchableOpacity onPress={() => navigation.navigate('LowerTab')}>
          <View style={styles.button}>
            <Text style={{color: 'white'}}>{'Next'}</Text>
          </View>
        </TouchableOpacity>)}
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: 'black',
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
  heading: {
    fontSize: 30,
    color: 'white',
    marginTop: 14,
    marginBottom: 14,
    alignSelf: 'center'
  },
  text: {
    color: 'grey',
    marginBottom: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#3897f0',
    width: 330,
    alignItems: 'center',
    padding: 16,
    borderRadius: 6,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: 'center'
  },
  label: {
    color: 'grey',
    marginLeft: 12
  },
});
