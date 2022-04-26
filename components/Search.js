import {View, Image, StyleSheet, TextInput, ScrollView, SafeAreaView} from 'react-native';
import React, {useState} from 'react';

export default function Search() {
  const [searchText, setSearchText] = useState('');

  const onChangeText = text => {
    setSearchText(text);
  };

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>
    <View style={styles.container}>
      <ScrollView bounces={false}>
        <View style={styles.searchView}>
          <Image
            source={require('../assets/photos/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            value={searchText}
            placeholder="Search"
            placeholderTextColor={'#909090'}
            onChangeText={onChangeText}
            autoComplete="off"
            autoCapitalize="none"
            autoCorrect={false}
            style={styles.input}
          />
        </View>
        <View style={styles.parentExploreView}>
          <View style={styles.photoGrid}>
            <View style={styles.imageView}>
              <Image
                source={require('../assets/posts/1.webp')}
                style={styles.img}
              />
              <Image
                source={require('../assets/posts/2.webp')}
                style={styles.img}
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require('../assets/posts/3.webp')}
                style={styles.img}
              />
              <Image
                source={require('../assets/posts/4.webp')}
                style={styles.img}
              />
            </View>
          </View>

          <Image
            source={require('../assets/photos/reel3.gif')}
            style={styles.reel}
          />
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
        <View style={styles.photoGrid}>
          <View style={styles.imageView}>
            <Image source={require('../assets/DP/1.webp')} style={styles.img} />
            <Image source={require('../assets/DP/6.jpeg')} style={styles.img} />
            <Image
              source={require('../assets/DP/10.jpeg')}
              style={styles.img}
            />
          </View>
          <View style={styles.imageView}>
            <Image source={require('../assets/DP/7.webp')} style={styles.img} />
            <Image source={require('../assets/DP/8.jpeg')} style={styles.img} />
            <Image source={require('../assets/DP/9.webp')} style={styles.img} />
          </View>
        </View>
        <View style={styles.parentExploreView}>
          <Image
            source={require('../assets/photos/reel2.gif')}
            style={styles.reel}
          />
          <Image
            source={require('../assets/photos/video.png')}
            style={{
              height: 26,
              width: 26,
              position: 'absolute',
              left: 90,
              top: 10,
            }}
          />
          <View style={styles.photoGrid}>
            <View style={styles.imageView}>
              <Image
                source={require('../assets/posts/5.webp')}
                style={styles.img}
              />
              <Image
                source={require('../assets/posts/6.jpeg')}
                style={styles.img}
              />
            </View>
            <View style={styles.imageView}>
              <Image
                source={require('../assets/posts/7.webp')}
                style={styles.img}
              />
              <Image
                source={require('../assets/posts/8.webp')}
                style={styles.img}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // paddingTop: 60,
    alignItems: 'center',
    marginTop:10
  },
  input: {
    width: '90%',
    marginLeft: 12,
    fontSize: 16,
    color: 'white',
  },
  searchIcon: {
    height: 16,
    width: 16,
  },
  searchView: {
    backgroundColor: '#222222',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginHorizontal: 10,
    borderRadius: 10,
    height: 40,
    marginBottom: 10,
  },
  parentExploreView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoGrid: {
    flexDirection: 'column',
  },
  imageView: {
    flexDirection: 'row',
  },
  img: {
    height: 128,
    width: 128,
    marginLeft: 2,
    marginBottom: 2,
  },
  reel: {
    height: 258,
    width: 128,
    marginLeft: 2,
    marginBottom: 2,
  },
});
