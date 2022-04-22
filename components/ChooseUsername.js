import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

export default function ChooseUsername({navigation}) {
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [tick, setTick] = useState(false);

  function onChangeUsername(text) {
    setName(text.toLowerCase());
    setTick(false);
    if (name.length > 2) {
      setIsLoading(true);
      setTimeout(() => {
        setTick(true);
        setIsLoading(false);
      }, 1000);
    }
  }
  function isDataFilled() {
    if (name.length > 5) return true;
    else return false;
  }

  const onPress = async () => {
    navigation.navigate('Password');
  };

  function renderItem({item}) {
    return (
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          onPress={() => setName(item)}
          style={{color: 'white', margin: 16}}>
          {item}
        </Text>
        <Image
          source={require('/Users/admin/Desktop/ReactNative/Instagram/assets/photos/tick.png')}
          style={styles.check}
        />
      </View>
    );
  }

  function ItemSeparatorComponent() {
    return <View style={styles.footer} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{'Choose username'}</Text>
      <Text style={styles.text}>{'You can always change it later.'}</Text>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          value={name}
          placeholder="Username"
          placeholderTextColor={'#909090'}
          style={
            name.length > 3 && name.length < 6
              ? [styles.input, {borderColor: '#ff5f4b', borderWidth: 1}]
              : styles.input
          }
          onChangeText={onChangeUsername}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
        />
        {tick && name.length > 5 ? (
          <Image
            source={require('/Users/admin/Desktop/ReactNative/Instagram/assets/photos/tick.png')}
            style={styles.tick}
          />
        ) : null}
      </View>

      {name.length > 3 && name.length < 6 ? (
        <>
          <Text
            style={{
              color: '#ff5f4b',
              textAlign: 'left',
            }}>{`The username '${name}' is not available.`}</Text>
          <View style={styles.list}>
            <FlatList
              data={[
                `${name}123`,
                `${name}323`,
                `${name}123re`,
                `${name}1er23`,
                `${name}1df3`,
                `${name}223`,
                `${name}2dfe3`,
                `${name}323`,
                `${name}4rgt23`,
                `${name}5thj23`,
                `${name}637`,
                `${name}8ttt23`,
                `${name}3223`,
              ]}
              renderItem={renderItem}
              ItemSeparatorComponent={ItemSeparatorComponent}
            />
          </View>
        </>
      ) : null}
      {isDataFilled() === false ? (
        <View style={[styles.button, {opacity: 0.4}]}>
          <Text style={{color: 'white'}}>{'Next'}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={onPress}>
          <View style={styles.button}>
            {isLoading ? (
              <ActivityIndicator
                animating={isLoading}
                size={'small'}
                color={'white'}
              />
            ) : (
              <Text style={{color: 'white'}}>{'Next'}</Text>
            )}
          </View>
        </TouchableOpacity>
      )}
      <View style={styles.footer} />
      <Text
        style={{
          color: '#909090',
          fontSize: 12,
          marginBottom: 16,
          alignSelf: 'center',
        }}>
        {'Already have an account?'}
        <Text
          onPress={() => navigation.navigate('Login')}
          style={{color: 'white'}}>
          {' Sign in.'}
        </Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: 'black',
  },
  input: {
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
    textAlign: 'center',
  },
  text: {
    color: 'grey',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3897f0',
    width: 330,
    alignItems: 'center',
    padding: 16,
    borderRadius: 6,
    marginBottom: 16,
  },
  tick: {
    height: 16,
    width: 16,
    position: 'absolute',
    right: 20,
    top: 16,
  },
  footer: {
    backgroundColor: '#909090',
    height: 1,
    width: 328,
    marginBottom: 14,
  },
  list: {
    height: 300,
    width: 330,
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 2,
    marginTop: 14,
    marginBottom: 14,
  },
  check: {
    height: 16,
    width: 16,
    alignSelf: 'center',
    marginRight: 16,
  },
});
