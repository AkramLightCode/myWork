import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import TabNavigation from './TabNavigation';
import ProductDetails from '../screens/ProductDetails';
import Notifications from '../screens/Notifications';
import MyCart from '../screens/Shoping/MyCart';
import Address from '../screens/Shoping/Address';
import AddNewCard from '../screens/Shoping/AddNewCard';
import Payment from '../screens/Shoping/Payment';
import CheckInCheckOut from '../screens/Shoping/CheckInCheckOut';
import AllCategaries from '../screens/Shoping/AllCategaries';
import Chat from '../screens/Chat';
import MyProfile from '../screens/MyProfile';
import Filters from '../screens/Filters';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyCart"
          component={MyCart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddNewCard"
          component={AddNewCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CheckInCheckOut"
          component={CheckInCheckOut}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllCategaries"
          component={AllCategaries}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Filters"
          component={Filters}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
