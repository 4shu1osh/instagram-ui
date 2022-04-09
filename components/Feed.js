import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Feed() {
  return (
    <View style={styles.feed} >
      <Text>Feed</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    feed: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})