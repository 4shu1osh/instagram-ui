import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Profile({navigation}) {
  return (
    <View style={styles.profile} >
      <Button
      title='Sign Out'
      onPress={()=> navigation.navigate('Login')}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    profile: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#121212'
    }
})