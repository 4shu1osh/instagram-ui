import {View, Text, StyleSheet, FlatList, Image, SafeAreaView} from 'react-native';
import React from 'react';
import {Details} from './Details';

export default function Notification({navigation}) {
  const renderItem = ({item}) => {
    return (
      
      <View style={styles.notification}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={[styles.img, {borderRadius: 50}]} source={item.dp} />
          <Text style={styles.text}>
            <Text style={{fontWeight: '600'}}>{item.username}</Text>
            {' liked your photo.'}
          </Text>
        </View>
        <Image style={styles.img} source={item.post} />
      </View>
    );
  };
  const ListHeaderComponent = () => {
    return (
      <View>
        <View style={styles.request}>
          <Image
            source={require('../assets/DP/9.webp')}
            style={[styles.img, {borderRadius: 50}]}
          />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text}>{'Follow requests'}</Text>
            <Text style={[styles.text, {color: '#909090'}]}>
              {'Approve or ignore requests'}
            </Text>
            <View style={styles.followerCount}>
              <Text style={{fontSize: 10, color: 'white', textAlign: 'center'}}>
                {'1'}
              </Text>
            </View>
          </View>
        </View>
        <Text
          style={[
            styles.heading,
            {fontSize: 16, marginTop: 10, marginBottom: 10, fontWeight: '400'},
          ]}>
          {'This week'}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>

    <View style={styles.container}>
      <Text style={styles.heading}>{'Activity'}</Text>

      <FlatList
        data={Details}
        renderItem={renderItem}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  img: {
    height: 40,
    width: 40,
  },
  text: {
    fontSize: 14,
    color: 'white',
    marginHorizontal: 14,
  },
  heading: {
    fontSize: 26,
    color: 'white',
    fontWeight: '600',
    marginLeft: 10,
    // marginTop: 40,
  },
  request: {
    flexDirection: 'row',
    marginVertical: 20,
    marginLeft: 10,
  },
  notification: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  followerCount: {
    backgroundColor: 'red',
    borderRadius: 50,
    height: 15,
    width: 15,
    position: 'absolute',
    justifyContent: 'center',
    left: -6,
    top: 2,
  },
});
