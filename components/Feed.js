import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Text,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import {Details} from './Details';

export default function Feed({navigation}) {
  const [comment, setComment] = useState('');
  var listViewRef;

  const onChangeText = text => {
    setComment(text);
  };

  const onPress = () => {
    setComment('');
  };

  const onPressText = () => {
    console.log('scrolllllllllll');
    listViewRef.scrollToIndex({index: 0});
  };

  const stories = ({item}) => {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.8}>
          <View
            style={{
              borderColor: '#ff5f4b',
              borderRadius: 50,
              borderWidth: 2,
              marginBottom: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Image
              source={item.dp}
              style={[styles.story, {height: 60, width: 60, margin: 3}]}
            />
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            {item.username.length > 10
              ? item.username.substring(0, 10 - 3) + '...'
              : item.username}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onPressUsername = (item) => {
    navigation.navigate('User', {item})
  }

  const renderItem = ({item}) => {
    return (
      <View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => onPressUsername(item)}>
          <Image source={item.dp} style={styles.dp} />
          </TouchableOpacity>
          <Text onPress={() => onPressUsername(item)} style={styles.text}>{item.username}</Text>
          <Image
            source={require('../assets/photos/option.png')}
            style={{
              height: 14,
              width: 14,
              marginRight: 10,
              position: 'absolute',
              alignSelf: 'center',
              right: 0,
              bottom: 20,
            }}
            
          />
        </View>

        <Image
          source={item.post}
          style={{width: 400, height: 400, marginBottom: 10}}
        />
        <View style={[styles.header, {justifyContent: "space-between"}]}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assets/photos/heart-empty.png')}
            style={{height: 28, width: 28, marginLeft: 16, marginRight: 16}}
          />
          <Image
            source={require('../assets/photos/chat.png')}
            style={{height: 34, width: 34, marginRight: 12}}
          />
          <Image
            source={require('../assets/photos/send.png')}
            style={{height: 32, width: 32,}}
          />
          </View>
          <Image
            source={require('../assets/photos/bookmark.png')}
            style={{height: 24, width: 24, marginRight: 6}}
          />
        </View>
        <Text style={[styles.text, {marginLeft: 10, marginTop: 6}]}>
          {item.likes + ' likes'}
          <Text style={{color: '#909090'}}>{' • ' + item.time}</Text>
        </Text>
        <Text style={[styles.text, {marginLeft: 10}]}>
          {item.username}
          <Text style={{fontWeight: '500'}}>{' ' + item.caption}</Text>
        </Text>
        <Text style={{color: '#909090', marginLeft: 10, marginBottom: 10}}>
          {`View all ${item.comments} comments`}
        </Text>
        <View style={styles.header}>
          <Image
            source={require('../assets/photos/user.jpg')}
            style={styles.dp}
          />
          <TextInput
            value={comment}
            placeholder="Add a comment..."
            placeholderTextColor={'#909090'}
            style={{marginTop: -10, color: 'white', marginRight: 150}}
            onChangeText={onChangeText}
          />
          {comment.length > 0 && (
            <Text
              onPress={onPress}
              style={{
                color: '#3897f0',
                position: 'absolute',
                right: 30,
                bottom: 18,
              }}>
              Post
            </Text>
          )}
        </View>
      </View>
    );
  };
  const ListFooterComponent = () => {
    return (
      <View style={styles.ftr}>
        <View style={styles.listHeader} />
        <Image
          source={require('../assets/photos/grad.png')}
          style={{height: 50, width: 50, marginTop: 20, marginBottom: 14}}
        />
        <Text style={{color: 'white', fontSize: 20, marginBottom: 14}}>
          {"You're All Caught Up"}
        </Text>
        <Text style={{color: 'grey', fontSize: 14, marginBottom: 14}}>
          {"You've see all new posts from the past 24 hours."}
        </Text>
        <Text
          onPress={onPressText}
          style={{color: '#3897f0', fontSize: 14, marginBottom: 14}}>
          {'View Older Posts.'}
        </Text>
      </View>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <FlatList
        data={Details}
        renderItem={stories}
        horizontal={true}
        ListHeaderComponent={StoryListHeaderComponent}
        bounces={false}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  const StoryListHeaderComponent = () => {
    return (
      <View>
        <TouchableOpacity activeOpacity={0.8}>
          <View
            style={{
              borderColor: 'grey',
              borderRadius: 50,
              borderWidth: 1,
              marginBottom: 10,
              marginLeft: 10,
              marginRight: 10,
            }}>
            <Image
              source={require('../assets/photos/user.jpg')}
              style={[styles.story, {height: 60, width: 60, margin: 3}]}
            />
          </View>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 8,
            }}>
            {'Your story'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>
    <View style={styles.container}>
      <View style={[styles.header, {justifyContent: 'space-between', marginTop: 20}]}>
        <Image
          source={require('../assets/photos/ig.png')}
          style={{height: 40, width: 140,  marginLeft: 10,}}
        />
       <View style={styles.header}>
       <Image
          source={require('../assets/photos/add.png')}
          style={{height: 25, width: 25, marginRight: 30}}
        />
        <Image
          source={require('../assets/photos/messenger.png')}
          style={{height: 25, width: 25,  marginRight: 10}}
        />
       </View>
      </View>
      <View style={styles.header}></View>
      {/* <ScrollView
     bounces={false}
     scrollsToTop={true}
     > */}
      {/* <FlatList data={Details} renderItem={stories} horizontal={true} ListHeaderComponent={StoryListHeaderComponent} bounces={false} /> */}

      <FlatList
        data={Details}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={ListFooterComponent}
        ListHeaderComponent={ListHeaderComponent}
        style={styles.list}
        bounces={false}
        ref={ref => {
          listViewRef = ref;
        }}
      />
      {/* </ScrollView> */}
      
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  listHeader: {
    backgroundColor: '#282828',
    height: 1,
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
  },
  story: {
    height: 30,
    width: 30,
    borderRadius: 50,
    alignSelf: 'center',
  },
  ftr: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});
