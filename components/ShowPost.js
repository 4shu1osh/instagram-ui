import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function ShowPost({route, navigation}) {
    const {item} = route.params

    const onPressUsername = () => {
        navigation.navigate('User', {item:item})
      }
  return (
    <SafeAreaView style={styles.container}>
  
      <TouchableOpacity style={{marginVertical: 10, marginHorizontal: 10, flexDirection: 'row', alignItems: 'center'}} onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/photos/left-arrow.png')}
              style={{height: 30, width: 30, }}
            />
            <Text style={{fontSize: 20, color: 'white', marginHorizontal: 20}}>
              Post
            </Text>
          </TouchableOpacity>
    <View style={styles.header}>
      <Image source={item.dp} style={styles.dp} />
      <Text style={styles.text}>{item.username}</Text>
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
   
  </SafeAreaView>

  )
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
  