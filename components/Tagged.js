import {View, SafeAreaView, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Details} from './Details';

const renderItem = ({item}) => {
  return(
  <View>
      <Image source={item.post} style={styles.img} />
    <Image
    source={require('../assets/photos/video.png')}
    style={{
      height: 26,
      width: 26,
      position: 'absolute',
      right: 10,
      top: 10,
    }} />
  </View>
    );
};

export default function Tagged() {
  return(
    <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>
    <FlatList data={Details} renderItem={renderItem} numColumns={3} style={{backgroundColor: 'black'}} showsVerticalScrollIndicator={false}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 260,
    width: 130,
    marginBottom: 2,
    marginHorizontal:1
  },
});
