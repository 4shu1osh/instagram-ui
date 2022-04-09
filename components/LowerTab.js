import {View, Text} from 'react-native';
import React from 'react';
import Feed from './Feed';
import Notification from './Notification';
import Profile from './Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

export default function LowerTab() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
