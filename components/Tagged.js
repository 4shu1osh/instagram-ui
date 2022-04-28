import {
  View,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Details} from './Details';

export default function Tagged({navigation}) {
  const onPressReel = reel => {
    navigation.navigate('PlayReel', {reel});
  };
  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => onPressReel(item.reel)}>
          <Image source={item.post} style={styles.img} />
        </TouchableOpacity>
        <Image
          source={require('../assets/photos/video.png')}
          style={{
            height: 26,
            width: 26,
            position: 'absolute',
            right: 10,
            top: 10,
          }}
        />
      </View>
    );
  };
  return (
    <FlatList
      data={Details}
      renderItem={renderItem}
      numColumns={3}
      style={{backgroundColor: 'black'}}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  img: {
    height: 260,
    width: 130,
    marginBottom: 2,
    marginHorizontal: 1,
  },
});
