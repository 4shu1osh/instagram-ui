import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React from 'react';
import { Image } from 'react-native';
import Posts from './Posts';
import Tagged from './Tagged';
import Videos from './Videos';


const Tab = createMaterialTopTabNavigator();

export default function MyTabs() {
  return (
      <Tab.Navigator
        initialRouteName="Posts"
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: {fontSize: 12},
          tabBarStyle: {backgroundColor: 'black'},
          tabBarIndicatorStyle: {
            backgroundColor: 'white',
          },
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Posts"
          component={Posts}
          options={{
            tabBarLabel: 'Posts',
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  source={
                   require('../assets/photos/pixels.png')
                  }
                  style={focused ? {height: 20, width: 20} : {height: 20, width: 20, opacity: 0.5}}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Videos"
          component={Videos}
          options={{
            tabBarLabel: 'Videos',
            tabBarIcon: ({focused}) => {
                return (
                  <Image
                    source={
                     require('../assets/photos/play-button.png')
                    }
                    style={focused ? {height: 20, width: 20} : {height: 20, width: 20, opacity: 0.5}}
                  />
                );
              },
          }}
        />
        <Tab.Screen
          name="Tagged"
          component={Tagged}
          options={{
            tabBarLabel: 'Tagged',
            tabBarIcon: ({focused}) => {
                return (
                  <Image
                    source={
                     require('../assets/photos/reels-empty.png')
                    }
                    style={focused ? {height: 20, width: 20, alignSelf: 'center'} : {height: 20, width: 20, alignSelf: 'center', opacity: 0.5}}
                  />
                );
              },
          }}
        />
      </Tab.Navigator>
  );
}
