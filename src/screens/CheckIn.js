import {StyleSheet, Text, View,StatusBar} from 'react-native';
import React from 'react';
import {COLORS} from '../assest/Themes';

export default function CheckIn() {
  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor={COLORS.lightGreen} translucent={false} />
      <Text>CheckIn</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
