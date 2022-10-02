import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Deals from '../screens/Deals';
import CheckIn from '../screens/CheckIn';
import Massages from '../screens/Massages';
import SettingsScreen from '../screens/SettingsScreen';
import DrawerContainer from './DrawerContainer';
import {COLORS} from '../assest/Themes';
import IMAGES from '../assest/IMAGES';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const MyTab = () => {
  const getVisibleTab = route => {};
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          elevation: 1,
          paddingTop: 5,
          height: Platform.OS == 'android' ? 60 : 70,
        },
      }}
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({route}) => ({
          tabBarVisible: getVisibleTab(route),
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.bottamView}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={focused ? IMAGES.homeact : IMAGES.home}
              />
              <Text style={styles.label(focused)}>Home</Text>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Deals"
        component={Deals}
        options={({route}) => ({
          tabBarVisible: getVisibleTab(route),
          headerShown: false,

          tabBarIcon: ({focused}) => (
            <View style={styles.bottamView}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={focused ? IMAGES.dealact : IMAGES.deal}
              />
              <Text style={styles.label(focused)}>Deals</Text>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="CheckIn"
        component={CheckIn}
        options={({route}) => ({
          tabBarVisible: getVisibleTab(route),
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.bottamView}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={focused ? IMAGES.checkIconact : IMAGES.checkIcon}
              />
              <Text style={styles.label(focused)}>Check In</Text>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Massages"
        component={Massages}
        options={({route}) => ({
          tabBarVisible: getVisibleTab(route),
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.bottamView}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={focused ? IMAGES.msgact : IMAGES.msg}
              />
              <Text style={styles.label(focused)}>Massages</Text>
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={({route}) => ({
          tabBarVisible: getVisibleTab(route),
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <View style={styles.bottamView}>
              <Image
                resizeMode="contain"
                style={styles.icon}
                source={focused ? IMAGES.settinact : IMAGES.setting}
              />
              <Text style={styles.label(focused)}>Settings</Text>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};
export default function TabNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: 'back',
        drawerStyle: {
          width: '70%',
        },
        overlayColor: 'transparent',
      }}
      drawerContent={props => <DrawerContainer {...props} />}>
      <Drawer.Screen
        name="MyTab"
        component={MyTab}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  bottamView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    height: 20,
    width: 20,
  },
  label: (focused = false) => ({
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '500',
    top: 5,
    color: focused ? COLORS.lightGreen : COLORS.black,
    width: '100%',
  }),
});
