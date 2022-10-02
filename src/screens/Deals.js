import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../assest/Themes';

export default function Deals() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.lightGreen} translucent={false} />
      <Text>Deals</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
