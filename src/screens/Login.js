import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import IMAGES from '../assest/IMAGES';
import {COLORS} from '../assest/Themes';
import SignInData from '../component/LoginData';
import SignUpData from '../component/SignUpData';

global.isuserLogin = false;

export default function Login({navigation}) {
  const [salect, setSalect] = useState(1);

  const onCalick = v => {
    setSalect(v);
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.backColor}}>
      <StatusBar backgroundColor={'transparent'} translucent={true} />
      <ScrollView>
        <Image source={IMAGES.backImage} style={styles.image} />
        <Image source={IMAGES.logo} style={styles.logo} />
        <View style={styles.salectView}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => onCalick(1)}
            style={{
              borderBottomColor: salect == 1 ? COLORS.lightGreen : COLORS.white,
              marginRight: 5,
              borderBottomWidth: salect == 1 ? 2 : 0,
            }}>
            <Text
              style={[
                styles.text,
                {color: salect == 1 ? COLORS.lightGreen : COLORS.gray},
              ]}>
              SIGN IN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => onCalick(2)}
            style={{
              borderBottomColor: salect == 2 ? COLORS.lightGreen : COLORS.white,
              marginLeft: 5,
              borderBottomWidth: salect == 2 ? 2 : 0,
            }}>
            <Text
              style={[
                styles.text,
                {color: salect == 2 ? COLORS.lightGreen : COLORS.gray},
              ]}>
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 20, paddingBottom: 30}}>
          {salect == 1 && (
            <SignInData onClick={() => navigation.navigate("TabNavigation")} />
          )}
          {salect == 2 && (
            <SignUpData onClick={() => navigation.navigate('TabNavigation')} />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 230,
    width: '100%',
    resizeMode: 'stretch',
    position: 'absolute',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 185,
    height: 90,
    width: 90,
    resizeMode: 'contain',
  },
  salectView: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: '500',
  },
});
