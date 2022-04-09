// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Landing from './components/Landing';
import Register from './components/Register';
import Login from './components/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LowerTab from './components/LowerTab';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen
        name='Landing'
        component={Landing}
        /> */}
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LowerTab" component={LowerTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
