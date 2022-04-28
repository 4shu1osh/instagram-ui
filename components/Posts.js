import {SafeAreaView, FlatList, Image, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import {Details} from './Details';


export default function Posts({navigation}) {
  const onPress = (item) => {
navigation.navigate('ShowPost', {item: item})
  }
  const renderItem = ({item}) => {
    return(
      <TouchableOpacity onPress={()=>onPress(item)}>
        <Image source={item.post} style={styles.img} />
      </TouchableOpacity>
    );
  }
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
