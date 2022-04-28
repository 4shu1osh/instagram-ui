import {TouchableOpacity, Dimensions, Image, View} from 'react-native';
import React, {useState, useRef} from 'react';
import Video from 'react-native-video';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import {SafeAreaView} from 'react-native-safe-area-context';

const statusBarHeight = getStatusBarHeight();
const {width, height} = Dimensions.get('screen');

export default function PlayVideo({route, navigation}) {
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
          uri: route.params.reel,
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
      <TouchableOpacity style={{position:'absolute'}} onPress={() => navigation.goBack()}>
        <Image
          source={require('../assets/photos/left-arrow.png')}
          style={{
            height: 30,
            width: 30,
            top: 20,
            left: 20,
          }}
        />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
