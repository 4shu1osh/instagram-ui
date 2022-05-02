import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

export default function SearchStuff() {
  return (
    <Modal
      style={styles.modalStyle}
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      swipeDirection={'down'}
      onSwipeComplete={onPressOptions}
      useNativeDriver={true}
      onBackdropPress={onPressOptions}
      backdropOpacity={0}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>

      <View>
          <Text> jdskfhjkdshflkjsdhf</Text>
      </View>

      </Modal>
  );
}

const styles = StyleSheet.create({});
