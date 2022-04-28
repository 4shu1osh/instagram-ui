import {
  TouchableOpacity,
  Dimensions,
  Image,
  View,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Video from 'react-native-video';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {SafeAreaView} from 'react-native-safe-area-context';

const statusBarHeight = getStatusBarHeight();
const {width, height} = Dimensions.get('screen');

export default function PlayStory({route, navigation}) {
  const [play, setPlay] = useState(false);

  var playerRef = useRef();

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      setPlay(true);
    });
  }, [navigation]);

  React.useEffect(() => {
    navigation.addListener('blur', () => {
      setPlay(false);
    });
  }, [navigation]);

  return (
    <SafeAreaView
      style={{flex: 1, maxHeight: height, backgroundColor: 'black'}}>
      <View>
        <Video
          source={{
            uri: route.params.item.reel,
          }}
          style={{width: width, height: height - statusBarHeight}}
          controls={false}
          ref={ref => {
            playerRef = ref;
          }}
          repeat={true}
          paused={!play}
          resizeMode={'cover'}
        />
        <View style={styles.footer}>
          <TextInput
            style={styles.msgView}
            placeholder="Send message"
            placeholderTextColor={'white'}
          />
          <Image
            source={require('../assets/photos/heart-empty.png')}
            style={styles.h_img}
          />
          <Image
            source={require('../assets/photos/send.png')}
            style={styles.s_img}
          />
        </View>
        <TouchableOpacity
          style={{position: 'absolute'}}
          onPress={() => navigation.goBack()}>
          <Image
            source={route.params.item.dp}
            style={{
              height: 30,
              width: 30,
              top: 20,
              left: 20,
              borderRadius: 50,
            }}
          />
          <Text style={{color: 'white', left: 60, bottom: 4, fontSize: 14}}>
            {route.params.item.username}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  footer: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 10,
    position: 'absolute',
    alignSelf: 'flex-end',
    bottom: 0,
    width: '100%',
    height: 80,
    flexDirection: 'row',
  },
  msgView: {
    width: '75%',
    borderColor: '#808080',
    borderRadius: 20,
    height: 40,
    borderWidth: 1,
    paddingHorizontal: 14,
    color: 'white',
  },
  h_img: {
    height: 24,
    width: 24,
    top: 8,
    marginHorizontal: 12,
  },
  s_img: {
    height: 30,
    width: 30,
    top: 4,
  },
});
