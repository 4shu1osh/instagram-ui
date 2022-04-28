import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import TopTab from './TopTab';
import Modal from 'react-native-modal';

export default function User({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  const onPressOptions = () => {
    setModalVisible(!modalVisible);
  };

  const onPressSignOut = () => {
    setModalVisible(!modalVisible);
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.container}>
        <View style={styles.topHeader}>
          <View style={styles.header}>
            <Text style={[styles.text, {fontWeight: '700', marginLeft: 10}]}>
              {'ashutosh_12'}
            </Text>
          </View>
          <View style={styles.header}>
            <Image
              source={require('../assets/photos/add.png')}
              style={{height: 24, width: 24, marginLeft: 16}}
            />
            <TouchableOpacity onPress={onPressOptions}>
              <Image
                source={require('../assets/photos/option.png')}
                style={{height: 20, width: 20, marginLeft: 26}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.header}>
          <Image
            source={require('../assets/photos/user.jpg')}
            style={styles.imgStyle}
          />
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={styles.labelVal}>{'12'}</Text>
            <Text style={styles.label}>{'Posts'}</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.labelVal}>{'100'}</Text>
            <Text style={styles.label}>{'Followers'}</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.labelVal}>{'23'}</Text>
            <Text style={styles.label}>{'Following'}</Text>
          </View>
        </View>
        <Text style={styles.bio}>{'Ashutosh Dubey'}</Text>
        <Text style={styles.bio}>
          {'To log out go to options on top right '}
        </Text>
        <Text style={[styles.bio, {color: '#3897f0'}]}>{'abc.xyz.com'}</Text>
        <TopTab />
        <Modal
          style={styles.modalStyle}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          swipeDirection={'down'}
          onSwipeComplete={onPressOptions}
          useNativeDriver={true}
          onBackdropPress={onPressOptions}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.modalViewStyle}>
            <View style={styles.options}>
              <Image 
              source={require('../assets/photos/logout.png')}
              style={{height: 20, width: 20, marginRight: 16,}}
               />
              <Text onPress={()=> navigation.navigate('Login')} style={[styles.label, {fontSize: 16}]}>{'Sign out'}</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.options}>
              <Image 
              source={require('../assets/photos/logout.png')}
              style={{height: 20, width: 20, marginRight: 16,}}
               />
              <Text onPress={()=> navigation.navigate('Login')} style={[styles.label, {fontSize: 16}]}>{'Account'}</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.options}>
              <Image 
              source={require('../assets/photos/logout.png')}
              style={{height: 20, width: 20, marginRight: 16,}}
               />
              <Text onPress={()=> navigation.navigate('Login')} style={[styles.label, {fontSize: 16}]}>{'Settings'}</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.options}>
              <Image 
              source={require('../assets/photos/logout.png')}
              style={{height: 20, width: 20, marginRight: 16,}}
               />
              <Text onPress={()=> navigation.navigate('Login')} style={[styles.label, {fontSize: 16}]}>{'Archive'}</Text>
            </View>
            <View style={styles.line}/>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
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
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalStyle: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'flex-end',
  },
  modalViewStyle: {
    height: '50%',
    backgroundColor: '#121212',
    paddingTop:20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  options: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 14,
  },
  line: {
    backgroundColor: '#909090',
    height: 1,
    width: '90%',
    opacity: 0.2,
    alignSelf: 'center'
  },
});
