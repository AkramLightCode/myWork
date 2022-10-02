import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import GlobalInput from '../comman/GlobalInput';
import IMAGES from '../assest/IMAGES';
import {COLORS} from '../assest/Themes';
import GlobalButton from '../comman/GlobalButton';

export default function SignInData({onClick}) {
  const [email, setEmail] = useState('');
  const [emailErr, setSetEmailErr] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErr, setSetPasswordErr] = useState('');

  const onCheck = () => {
    if (email == '') {
      setSetEmailErr('Enter Email / Phone Number');
    }
    if (password == '') {
      setSetPasswordErr('Enter Password');
    } else {
      onClick(onClick);
    }
  };

  console.log('navigate');
  const [hide, setHide] = useState();
  const onChange = () => {
    setHide(hide => !hide);
  };

  const [check, setCheck] = useState('');
  const onSalect = () => {
    setCheck(check => !check);
  };

  return (
    <View style={{marginTop: 15}}>
      <Text style={styles.heading}>Email Id/Phone Number</Text>
      <GlobalInput
        type="email"
        icon={IMAGES.email}
        placeHolder="johnsmith@mailinator.com"
        value={email}
        onChangeText={v => {
          setEmail(v);
          setSetEmailErr('');
        }}
      />

      <Text style={styles.errText}>{emailErr}</Text>

      <Text style={styles.heading}>Password</Text>
      <GlobalInput
        type="password"
        icon={IMAGES.password}
        placeHolder="*******"
        value={password}
        onChangeText={v => {
          setPassword(v);
          setSetPasswordErr('');
        }}
        secureTextEntry={hide ? false : true}
        onClick={onChange}
      />

      <Text style={styles.errText}>{passwordErr}</Text>

      <GlobalButton
        Title={'SIGN IN'}
        buttonStyle={{marginTop: 15}}
        onClick={() => onCheck()}
      />

      <View style={[styles.comman, {marginTop: 15}]}>
        <View style={styles.comman}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{marginRight: 10}}
            onPress={onSalect}>
            <Image
              source={check == true ? IMAGES.check : IMAGES.unCheck}
              style={{height: 20, width: 20}}
            />
          </TouchableOpacity>

          <Text style={styles.Text}>Stay Connected</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('MyCart')}
          style={{marginLeft: 'auto'}}
          activeOpacity={0.6}>
          <Text style={[styles.Text, {color: COLORS.lightGreen}]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.comman, {marginVertical: 25}]}>
        <View style={styles.elivesion} />
        <Text style={styles.Login}>or Login Via</Text>
        <View style={styles.elivesion} />
      </View>

      <View style={[styles.comman, {justifyContent: 'center'}]}>
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={IMAGES.fb} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6}>
          <Image source={IMAGES.google} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 10,
    marginTop: 15,
    fontWeight: '400',
    color: COLORS.gray,
  },
  comman: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Text: {
    fontSize: 11,
    fontWeight: '400',
    color: COLORS.black,
  },
  elivesion: {
    flex: 1,
    height: 0.5,
    elevation: 1,
    backgroundColor: COLORS.white,
  },
  Login: {
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '400',
    marginHorizontal: 3,
  },
  icon: {
    height: 30,
    width: 30,
    marginHorizontal: 5,
    resizeMode: 'stretch',
  },
  errText: {
    fontSize: 10,
    fontWeight: '400',
    marginLeft: 'auto',
    color: COLORS.red,
  },
});
