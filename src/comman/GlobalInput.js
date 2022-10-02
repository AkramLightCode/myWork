import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {COLORS} from '../assest/Themes';

export default function GlobalInput({
  placeHolder,
  value,
  onChangeText,
  keyboardType,
  icon,
  onClick,
  type,
  secureTextEntry,
  maxLength,
}) {
  return (
    <View>
      {type == 'email' && (
        <View style={styles.containor}>
          <TextInput
            placeholder={placeHolder}
            placeholderTextColor={COLORS.gray}
            style={styles.textInput}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            maxLength={maxLength}
          />
          <Image source={icon} style={styles.icon} />
        </View>
      )}

      {type == 'password' && (
        <View style={styles.containor}>
          <TextInput
            placeholder={placeHolder}
            style={styles.textInput}
            value={value}
            placeholderTextColor={COLORS.gray}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity onPress={onClick} activeOpacity={0.6}>
            <Image source={icon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 12,
    fontWeight: '500',
    flex: 1,
  },
  containor: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: COLORS.gray,
    borderBottomWidth: 0.3,
    flex: 1,
    height: 45,
  },
  icon: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});
