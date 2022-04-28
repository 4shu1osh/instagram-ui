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
    setModalVisible(!modalVisible)
  };

  const onPressSignOut = () => {
    setModalVisible(!modalVisible)
    navigation.navigate('Login')
  }

  return (
    <SafeAreaView style={{flex:1, backgroundColor: 'black'}}>

    <View style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.header}>
          
          <Text style={[styles.text, {fontWeight:'700', marginLeft:10}]}>{'ashutosh_12'}</Text>
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
      <Text style={styles.bio}>{'To log out go to options on top right '}</Text>
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
          {/* <View style={styles.centeredView}>
            <View style={styles.modalView}>
              
              <Text style={styles.modalText}>Settings</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onPressSignOut}>
                <Text style={styles.textStyle}>Sign out</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={onPressOptions}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View> */}
   <View style={{height:'50%', backgroundColor:'grey',justifyContent:'flex-end'}}>
   <Text>HEllo</Text>
          <Text>HEllo</Text>
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
    marginTop:10
    // paddingTop: 60,
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
  centeredView: {
    // flex: 0.2,
    // borderRadius: 10,
    // marginTop: 22,
    // width: '100%',
    // height: '100%',

  },
  modalView: {
    backgroundColor: '#121212',
    // borderRadius: 20,
    // padding: 35,
    // shadowColor: '#000',
    // width: '100%',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
    // elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    // textAlign: 'center',
  },
  modalStyle:{
    width:'100%',
    alignSelf:'center',
    justifyContent:'flex-end'

  }
});
