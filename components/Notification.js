import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Notification() {
  return (
    <View style={styles.notification} >
      <Text>Notification</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    notification: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})