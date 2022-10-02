import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../assest/Themes';
import Headers from '../comman/Headers'

export default function DrawerContainer({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.backColor}}>
      <Headers menu onDrawer={() => navigation.goBack()} />
      <ScrollView></ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
