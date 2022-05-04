import {Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const pointers = [
  'Login, Logout & Sign up',
  'Nested Navigation in bottom tabs',
  'Top tab navigation in each profile',
  'Stories can be opened & closed by tapping the username/profile pic',
  'Only that reel plays which is visible -- rest of them stays paused',
  'Reels can be played from User Profile page, Reels & Explore/Search Tab',
  'Profiles can be opened from Home/Feed page by tapping on username/profile pic',
];

export default function Features({navigation}) {
  const ListHeaderComponent = () => {
    return <Text style={styles.heading}>{'What you can do?'}</Text>;
  };
  const ListFooterComponent = () => {
    return (
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
        <Text style={{color: 'white'}}>{'Go To App  >'}</Text>
      </TouchableOpacity>
    );
  };
  const renderItem = ({item}) => {
    return (<Text style={styles.text}>{"• "+item}</Text>);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black', padding: 26,}}>
      <FlatList
        data={pointers}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={ListFooterComponent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3897f0',
    width: '100%',
    alignItems: 'center',
    padding: 16,
    borderRadius: 6,
    marginVertical: 16,
  },
  text: {
      color: 'white',
      fontSize: 18,
      marginVertical: 14,
  },
  heading: {
    color: 'red',
    fontSize: 24,
    marginVertical: 16,
    fontWeight: '600',
    alignSelf: 'center'
}
});
