import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useRef } from 'react';
import { Details } from './Details';
import Video from 'react-native-video';
import {useBottomTabBarHeight} from '@react-navigation/bottom-tabs';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();
const {width, height} = Dimensions.get('window');

export default function Reels({navigation}) {
  const [play, setPlay] = useState(false)
  var [page, setPage] = useState(1)
  const tabHeight = useBottomTabBarHeight();
 
  var playerRef = useRef();

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      setPlay(true)
    });
    
  }, [navigation]);

  React.useEffect(() => {
    navigation.addListener('blur', () => {
     setPlay(false)
    });

  }, [navigation]);

  
  const onScrollEnd = (e) => {

    // Divide the horizontal offset by the width of the view to see which page is visible
 setPage(Math.min(Math.max(Math.floor(e.nativeEvent.contentOffset.y / height + 0.5) + 1, 0), Details.length))
    console.log('scrolled to page ', page);
  }

  const renderItem = ({item, index}) => {
   
    return (
      <View style={{flex: 1}}>
         <Video
            source={{
              uri: item.reel
              
            }}
            style={{width: width, height: height-tabHeight-statusBarHeight}}
            controls={false}
            ref={ref => {
              playerRef = ref;
            }}
            repeat={true}
            paused={page == index+1 ? !play : play}
            resizeMode={'cover'}
          />
         <View style={styles.header}>
          <TouchableOpacity onPress={()=> setPlay(!play)}>
          <Image
            source={require('../assets/photos/camera.png')}
            style={styles.img}
            
          />
          </TouchableOpacity>
        </View>
        {  }
        <View style={styles.rightFooter}>
          <Image
            source={require('../assets/photos/heart-empty.png')}
            style={styles.h_img}
          />
          <Text style={[styles.label, {fontSize: 14, marginBottom: 4, alignSelf: 'center'}]}>
            {324}
          </Text>
          <Image
            source={require('../assets/photos/chat.png')}
            style={styles.img}
          />
          <Text style={[styles.label, {fontSize: 14, marginBottom: 4, alignSelf: 'center'}]}>
            {1_230}
          </Text>
          <Image
            source={require('../assets/photos/send.png')}
            style={styles.img}
          />
          <Image
            source={require('../assets/photos/option.png')}
            style={{
              height: 20,
              width: 20,
              alignSelf: 'center',
              marginVertical: 8,
            }}
          />
          <Image
            source={item.dp}
            style={[
              styles.img,
              {borderRadius: 6, borderWidth: 1, borderColor: 'white'},
            ]}
          />
        </View>
        <View style={styles.leftFooter}>
          <View style={styles.userInfo}>
            <Image
              source={item.dp}
              style={[styles.img, {borderRadius: 50}]}
            />
            <Text
              style={[
                styles.label,
                {fontSize: 14, fontWeight: '500', marginHorizontal: 10},
              ]}>
              {item.username}
            </Text>
            <View style={styles.followBtn}>
              <Text style={[styles.label, {fontSize: 14, textAlign: 'center'}]}>
                {'Follow'}
              </Text>
            </View>
          </View>
          <Text style={[styles.label, {fontSize: 14}]}>{item.caption}</Text>
          <View style={styles.musicDetails}>
            <Image
              source={require('../assets/photos/music.png')}
              style={{height: 12, width: 12, alignSelf: 'center'}}
            />
            <Text
              style={[
                styles.label,
                {fontSize: 14, textAlign: 'center', marginHorizontal: 10},
              ]}>
              {item.username + ' • Original Audio'}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <FlatList
          data={Details}
          renderItem={renderItem}
          pagingEnabled={true}
          showsVerticalScrollIndicator={false}
          onMomentumScrollEnd={onScrollEnd}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  reel: {
    height: '100%',
    width: '100%',
    backgroundColor: '#909090',
  },
  img: {
    height: 30,
    width: 30,    
    alignSelf: 'center'

  },
  h_img: {
    height: 24,
    width: 24,
    alignSelf: 'center'
  },
  label: {
    color: 'white',
    fontSize: 24,

  },
  header: {
    flexDirection: 'row-reverse',
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    position: 'absolute',
    width: '90%',
  },
  rightFooter: {
    right: 10,
    bottom: 40,
    height: 260,
    justifyContent: 'center',
    position: 'absolute',
    // alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  leftFooter: {
    left: 16,
    bottom: 40,
    height: 100,
    justifyContent: 'center',
    position: 'absolute',
    // alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  followBtn: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 4,
    height: 22,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  musicDetails: {
    flexDirection: 'row',
  },
  ftr: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  listHeader: {
    backgroundColor: '#282828',
    height: 1,
    width: 500,
    marginBottom: 14,
  },
});
