import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Modal,
  Pressable
} from 'react-native';
import React, {useState} from 'react';
import TopTab from './TopTab';
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
    <View style={styles.container}>
      <View style={styles.topHeader}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../assets/photos/left-arrow.png')}
              style={{height: 30, width: 30, marginRight: 10}}
            />
          </TouchableOpacity>
          <Text style={styles.text}>{'ashutosh_12'}</Text>
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
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
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
          </View>
        </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 60,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
    textAlign: 'center',
  },
});
