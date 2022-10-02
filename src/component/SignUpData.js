import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import GlobalInput from '../comman/GlobalInput';
import {COLORS} from '../assest/Themes';
import IMAGES from '../assest/IMAGES';
import GlobalButton from '../comman/GlobalButton';

export default function SignUpData({onClick}) {
  const [parent, setParent] = useState('');
  const [parentErr, setParentErr] = useState('');

  const [child, setChild] = useState('');
  const [childErr, setChildErr] = useState('');

  const [email, setEmail] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const [number, setNumber] = useState('');
  const [numberErr, setNumberErr] = useState('');

  const [password, setPassword] = useState('');
  const [passwordErr, setPasswordErr] = useState('');

  const [confirmPass, setConfirmPass] = useState('');
  const [confirmPassErr, setConfirmPassErr] = useState('');

  const onCheck = () => {
    const emails = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

    if (parent == '') {
      setParentErr('Enter Parent Name');
    }
    if (child == '') {
      setChildErr('Enter Child Name');
    }
    if (email == '') {
      setEmailErr('Enter Email Address');
    }
    if (number == '') {
      setNumberErr('Enter Phone Number');
    }
    if (password == '') {
      setPasswordErr('Enter Password');
    }
    if (confirmPass == '') {
      setConfirmPassErr('Enter Confirm Password');
    } else if (emails.test(email) == false) {
      setEmailErr('Check Email Address');
    } else if (number.length < 10) {
      setNumberErr('Check Phone Number');
    }
    // else if (password.match (confirmPass)) {
    //   setConfirmPassErr('Check Confirm Password');
    // }
    else {
      onClick(onClick);
    }
  };

  const [hide, setHide] = useState();
  const onChange = () => {
    setHide(hide => !hide);
  };

  const [hide2, setHide2] = useState();
  const onChange2 = () => {
    setHide2(hide2 => !hide2);
  };

  return (
    <View>
      <Text style={styles.heading}>Parent/Guardian Name</Text>
      <GlobalInput
        type="email"
        icon={IMAGES.userIcon}
        placeHolder="Glenn Maxwell"
        value={parent}
        onChangeText={v => {
          setParent(v);
          setParentErr('');
        }}
      />

      <Text style={styles.errText}>{parentErr}</Text>

      <Text style={styles.heading}>Parent/Guardian Name</Text>
      <GlobalInput
        type="email"
        icon={IMAGES.child}
        placeHolder="Son"
        value={child}
        onChangeText={v => {
          setChild(v);
          setChildErr('');
        }}
      />

      <Text style={styles.errText}>{childErr}</Text>

      <Text style={styles.heading}>Email id </Text>
      <GlobalInput
        type="email"
        icon={IMAGES.email}
        keyboardType="email-address"
        placeHolder="johnsmith@mailinator.com"
        value={email}
        onChangeText={v => {
          setEmail(v);
          setEmailErr('');
        }}
      />

      <Text style={styles.errText}>{emailErr}</Text>

      <Text style={styles.heading}>Phone Number </Text>
      <GlobalInput
        type="email"
        keyboardType="numeric"
        maxLength={10}
        icon={IMAGES.phone}
        placeHolder="+99 99899 8888"
        value={number}
        onChangeText={v => {
          setNumber(v);
          setNumberErr('');
        }}
      />

      <Text style={styles.errText}>{numberErr}</Text>

      <Text style={styles.heading}>Password</Text>
      <GlobalInput
        type="password"
        icon={IMAGES.password}
        placeHolder="*******"
        value={password}
        onChangeText={v => {
          setPassword(v);
          setPasswordErr('');
        }}
        secureTextEntry={hide ? false : true}
        onClick={onChange}
      />

      <Text style={styles.errText}>{passwordErr}</Text>

      <Text style={styles.heading}>Confirm Password</Text>
      <GlobalInput
        type="password"
        icon={IMAGES.password}
        placeHolder="*******"
        value={confirmPass}
        onChangeText={v => {
          setConfirmPass(v);
          setConfirmPassErr('');
        }}
        secureTextEntry={hide2 ? false : true}
        onClick={onChange2}
      />

      <Text style={styles.errText}>{confirmPassErr}</Text>

      <GlobalButton
        Title={'SIGN UP'}
        buttonStyle={{marginTop: 15}}
        onClick={onCheck}
      />

      <View style={styles.comman}>
        <Text style={styles.text}>Already have an account?</Text>
        <TouchableOpacity activeOpacity={0.6}>
          <Text style={[styles.text, {color: COLORS.lightGreen}]}>Sign in</Text>
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
    justifyContent: 'center',
    marginTop: 30,
  },
  text: {
    fontSize: 11,
    color: COLORS.black,
    fontWeight: '400',
    marginHorizontal: 3,
  },
  errText: {
    fontSize: 10,
    fontWeight: '400',
    marginLeft: 'auto',
    color: COLORS.red,
  },
});
