import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ChooseUsername from './ChooseUsername'
import ChoosePassword from './ChoosePassword'

const Stack = createNativeStackNavigator();

export default function Register({}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Username" component={ChooseUsername} />
      <Stack.Screen name="Password" component={ChoosePassword} />
    </Stack.Navigator>
  );
}
