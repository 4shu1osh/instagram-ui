import {SafeAreaView, FlatList, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Details} from './Details';

const renderItem = ({item}) => {
  return(<Image source={item.post} style={styles.img} />);
};

export default function Posts() {
  return(

    <FlatList data={Details} renderItem={renderItem} numColumns={3} style={{backgroundColor: 'black'}}/>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 130,
    width: 130,
    marginBottom: 2,
    marginHorizontal:1
  },
});
