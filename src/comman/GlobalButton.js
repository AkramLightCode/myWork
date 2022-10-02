import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../assest/Themes';

const GlobalButton = ({Title, onClick=()=>{}, buttonStyle, buttonText}) => {
  return (
    <TouchableOpacity
      onPress={() => onClick()}
      style={[styles.containar, buttonStyle]}
      activeOpacity={0.6}>
      <Text style={[styles.text, buttonText]}>{Title}</Text>
    </TouchableOpacity>
  );
};

export default GlobalButton;

const styles = StyleSheet.create({
  containar: {
    height: 45,
    backgroundColor: COLORS.lightGreen,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '500',
  },
});
