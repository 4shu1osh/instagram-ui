import {View, Image, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Reels() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/photos/reel2.gif')}
        style={styles.reel}
      />
      <View style={styles.header}>
        <Text style={styles.label}>{'Reels'}</Text>
        <Image
          source={require('../assets/photos/camera.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.rightFooter}>
        <Image
          source={require('../assets/photos/heart-empty.png')}
          style={styles.img}
        />
        <Text style={[styles.label, {fontSize: 14, marginBottom: 4}]}>{'124k'}</Text>
        <Image
          source={require('../assets/photos/chat.png')}
          style={styles.img}
        />
        <Text style={[styles.label, {fontSize: 14, marginBottom: 4}]}>{'1,480'}</Text>
        <Image
          source={require('../assets/photos/send.png')}
          style={styles.img}
        />
        <Image
          source={require('../assets/photos/option.png')}
          style={{height: 20, width: 20, alignSelf: 'center', marginVertical: 8}}
        />
        <Image
          source={require('../assets/photos/user.jpg')}
          style={[
            styles.img,
            {borderRadius: 6, borderWidth: 1, borderColor: 'white'},
          ]}
        />
      </View>
      <View style={styles.leftFooter}>
        <View style={styles.userInfo}>
          <Image
            source={require('../assets/photos/user.jpg')}
            style={[styles.img, {borderRadius: 50}]}
          />
          <Text style={[styles.label, {fontSize: 14, fontWeight: '500', marginHorizontal: 10}]}>
            {'ashutosh_12'}
          </Text>
          <View style={styles.followBtn}>
            <Text style={[styles.label, {fontSize: 14, textAlign: 'center'}]}>
              {'Follow'}
            </Text>
          </View>
        </View>
          <Text style={[styles.label, {fontSize: 14,}]}>{'Totoro ❤️❤️❤️'}</Text>
          <View style={styles.musicDetails}>
          <Image
            source={require('../assets/photos/music.png')}
            style={{height: 12, width: 12, alignSelf: 'center'}}
          />
            <Text style={[styles.label, {fontSize: 14, textAlign: 'center', marginHorizontal: 10}]}>
              {'ashutosh_12 • Original Audio'}
            </Text>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 40,
    alignItems: 'center',
  },
  reel: {
    height: '100%',
    width: '100%',
  },
  img: {
    height: 30,
    width: 30,
  },
  label: {
    color: 'white',
    fontSize: 24,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 60,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    position: 'absolute',
    width: '90%',
  },
  rightFooter: {
    right: 20,
    bottom: 50,
    height: 260,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
  },
  leftFooter: {
    left: 20,
    bottom: 50,
    height: 100,
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
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
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
