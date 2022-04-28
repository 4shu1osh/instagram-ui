// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from './components/Register';
import Login from './components/Login';
import LowerTab from './components/LowerTab';
import TopTab from './components/TopTab';
import {StatusBar} from 'react-native';
import PlayReel from './components/PlayReel';
import ShowPost from './components/ShowPost';
import User from './components/Profile';
import PlayStory from './components/PlayStory';
import ShowVideoPost from './components/ShowVideoPost';




const Stack = createNativeStackNavigator();

function App() {
  return (
    // <Notification/>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="LowerTab" component={LowerTab} />
        <Stack.Screen name="TopTab" component={TopTab} />
        <Stack.Screen name="PlayReel" component={PlayReel} />
        <Stack.Screen name="ShowPost" component={ShowPost} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="PlayStory" component={PlayStory} />
        <Stack.Screen name="ShowVideoPost" component={ShowVideoPost} />

      </Stack.Navigator>
      <StatusBar barStyle='light-content'/>

    </NavigationContainer>
  );
}

export default App;
