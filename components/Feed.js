import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import {Details} from './Details';

export default function Feed() {

  const [comment, setComment] = useState('')

  const onChangeText = (text) => {
    setComment(text)
  }

  const onPress = () => {
    setComment('')
  }

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.header}>
          <Image
            source={item.dp}
            style={styles.dp}
          />
          <Text
            style={styles.text}>
            {item.username}
          </Text>
          <Image
            source={require('/Users/admin/Desktop/ReactNative/Instagram/assets/photos/option.png')}
            style={{
              height: 14,
              width: 14,
              marginRight: 10,
              position: 'absolute',
              alignSelf: 'center',
              right: 0,
              marginBottom: 10,
            }}
          />
        </View>
        <Image
          source={item.post}
          style={{width: 400, height: 400, marginBottom: 10}}
        />
        <View style={styles.header}>
          <Image
            source={require('/Users/admin/Desktop/ReactNative/Instagram/assets/photos/heart-empty.png')}
            style={{height: 28, width: 28, marginLeft: 16, marginRight: 16}}
          />
          <Image
            source={require('/Users/admin/Desktop/ReactNative/Instagram/assets/photos/chat.png')}
            style={{height: 34, width: 34, marginRight: 12}}
          />
          <Image
            source={require('/Users/admin/Desktop/ReactNative/Instagram/assets/photos/send.png')}
            style={{height: 32, width: 32, marginRight: 210}}
          />
          <Image
            source={require('/Users/admin/Desktop/ReactNative/Instagram/assets/photos/bookmark.png')}
            style={{height: 24, width: 24}}
          />
        </View>
        <Text style={[styles.text, {marginLeft: 10, marginTop: 6}]}>
            {item.likes + ' likes'}
            <Text style={{color:'#909090'}}>
            {" • "+item.time}
          </Text>
        </Text>
        <Text style={[styles.text, {marginLeft: 10}]}>
            {item.username}
            <Text style = {{fontWeight: '500'}}>
            {' ' + item.caption}
        </Text>
        
        </Text>
        <Text style={{color: '#909090', marginLeft: 10, marginBottom: 10}}>
          {`View all ${item.comments} comments`}
        </Text>
        <View style={styles.header}>
          <Image
            source={require('/Users/admin/Desktop/ReactNative/Instagram/assets/photos/user.jpg')}
            style={styles.dp}
          />
          <TextInput
          value={comment}
          placeholder='Add a comment...'
          placeholderTextColor={'#909090'}
          style={{marginTop: -10, color: 'white', marginRight: 150}}
          onChangeText={onChangeText}
          />
          {
            comment.length>0 && 
            <Text onPress={onPress} style={{color: '#3897f0', position: 'absolute', right: 30, bottom: 18}}>Post</Text>
          }
          </View>
          
      </View>
    );
  };
  const ListFooterComponent = () => {
    return <View></View>;
  };

  const ListHeaderComponent = () => {
    return <View style={styles.listHeader} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('/Users/admin/Desktop/ReactNative/Instagram/assets/photos/ig.png')}
          style={{height: 40, width: 140, marginRight: 160}}
        />
        <Image
          source={require('/Users/admin/Desktop/ReactNative/Instagram/assets/photos/add.png')}
          style={{height: 25, width: 25, marginRight: 30}}
        />
        <Image
          source={require('/Users/admin/Desktop/ReactNative/Instagram/assets/photos/messenger.png')}
          style={{height: 25, width: 25, marginRight: 10}}
        />
      </View>
      <View style={styles.header}></View>
      <FlatList
        data={Details}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={ListHeaderComponent}
        style={styles.list}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 30,
  },
  feed: {},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  listHeader: {
    backgroundColor: '#282828',
    height: 0.2,
    width: 500,
    marginBottom: 14,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    marginBottom: 10,
  },
  dp: {
    height: 30,
    width: 30,
    borderRadius: 50,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    alignSelf: 'center',
  }
});
