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

export default function Videos({navigation}) {
  const onPressReel = item => {
    navigation.navigate('ShowVideoPost', {item});
  };
  const renderItem = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => onPressReel(item)}>
          <Image source={item.post} style={styles.img} />
        </TouchableOpacity>
        <Image
          source={require('../assets/photos/play.png')}
          style={{
            height: 20,
            width: 20,
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
    height: 130,
    width: 130,
    marginBottom: 2,
    marginHorizontal: 1,
  },
});
