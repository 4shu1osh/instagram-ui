import {Image} from 'react-native';
import React from 'react';
import Feed from './Feed';
import Notification from './Notification';
import Profile from './Profile';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


import User from './User';
import Search from './Search';
// import Reels from './tempReels';
import Reels from './Reels';
import ShowPost from './ShowPost';



const Tab = createBottomTabNavigator();
const FeedStackNav = createNativeStackNavigator();

export default function LowerTab() {
  return (
    <Tab.Navigator
    initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'black',
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true
      }}
      >
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/photos/homef.png')
                    : require('../assets/photos/home.png')
                }
                style={{height: 26, width: 26}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/photos/search.png')
                    : require('../assets/photos/search-filled.png')
                }
                style={{height: 26, width: 26}}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Reels"
        component={Reels}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={
                  focused
                    ? require('../assets/photos/video.png')
                    : require('../assets/photos/reels-empty.png')
                }
                style={{height: 26, width: 26}}
              />
            );
          },
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarIcon: ({focused}) => {
            console.log('kuwqegyuqgweyu', focused);
            return (
              <Image
                source={
                  focused
                    ? require('../assets/photos/heart-filled.png')
                    : require('../assets/photos/heart-empty.png')
                }
                style={{height: 26, width: 26}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: () => {
            return (
              <Image
                source={require('../assets/photos/user.jpg')}
                style={{height: 30, width: 30, borderRadius: 50}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export function HomeStack() {
  return (
    <FeedStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FeedStackNav.Screen name="Feed" component={Feed} />
      <FeedStackNav.Screen name="User" component={User} />
      <FeedStackNav.Screen name="ShowPost" component={ShowPost} />
    </FeedStackNav.Navigator>
  );
}
