import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import TopTab from './TopTab'

export default function User({route, navigation}) {
  const {dp, username, following, followers, bio, posts, sampleBio, linkInBio} = route.params.item;
  console.log("route ----", route)
  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>

      <View style={styles.container}>

      <View style={styles.topHeader}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/photos/left-arrow.png')}
              style={{height: 30, width: 30, marginRight: 10, marginLeft:6}}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{username}</Text>
        </View>
        <View style={styles.header}>
          <Image
            source={require('../assets/photos/notification.png')}
            style={{height: 24, width: 24, marginLeft: 16}}
          />
          <Image
            source={require('../assets/photos/option.png')}
            style={{height: 20, width: 20, marginLeft: 26}}
          />
        </View>
      </View>
      <View style={styles.header}>
        <Image source={dp} style={styles.imgStyle} />
        <View style={{flexDirection: 'column', justifyContent: 'center'}}>
          <Text style={styles.labelVal}>{posts}</Text>
          <Text style={styles.label}>{'Posts'}</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.labelVal}>{followers}</Text>
          <Text style={styles.label}>{'Followers'}</Text>
        </View>
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.labelVal}>{following}</Text>
          <Text style={styles.label}>{'Following'}</Text>
        </View>
      </View>
      <Text style={styles.bio}>{bio}</Text>
      <Text style={styles.bio}>{sampleBio}</Text>
      <Text style={[styles.bio, {color: '#3897f0'}]}>{linkInBio}</Text>
      <TopTab/>
    </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // paddingTop: 60,
    marginTop:10
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
    justifyContent: 'space-around',
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginLeft: 6,
    marginRight: 36,
  },
  label: {
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  labelVal: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: '600',
  },
  imgStyle: {
    height: 90,
    width: 90,
    borderRadius: 50,
    marginVertical: 10,
  },
  bio: {
    fontSize: 14,
    color: 'white',
    marginLeft: 10,
    marginVertical: 2,
  },
});
