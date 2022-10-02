import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../assest/Themes';
import Headers from '../../comman/Headers';
import IMAGES from '../../assest/IMAGES';
import RNPickerSelect from 'react-native-picker-select';
import GlobalButton from '../../comman/GlobalButton';

export default function AddNewCard({navigation}) {
  const [number, setNumber] = useState('');
  const [userName, setUserName] = useState('');
  const [cvv, setCVV] = useState('');

  const [check, setCheck] = useState(false);
  const onPress = () => {
    setCheck(check => !check);
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.backColor}}>
      <Headers
        title="Add New Pay Method"
        scan
        menu
        onDrawer={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containor}>
          <Text style={styles.heading}>Card Number</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              maxLength={16}
              placeholder="9595 5895 9569 599"
              keyboardType="numeric"
              onChangeText={v => {
                setNumber(v);
              }}
              value={number}
            />
            <Image source={IMAGES.mastercard} style={styles.cardIcon} />
          </View>

          <Text style={styles.heading}>Card Holder Name</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              placeholder="John Smith"
              keyboardType="default"
              onChangeText={v => {
                setUserName(v);
              }}
              value={userName}
            />
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{flex: 1}}>
              <Text style={styles.heading}>MM</Text>
              <View style={styles.pickerView}>
                <RNPickerSelect
                  onValueChange={value => console.log(value)}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{
                    label: null,
                    value: null,
                  }}
                  style={pickerSelectStyles}
                  items={[
                    {label: 'JAN', value: 'JAN'},
                    {label: 'FUB', value: 'FUB'},
                    {label: 'MAR', value: 'MAR'},
                  ]}
                  Icon={() => {
                    return (
                      <Image
                        source={IMAGES.downarrow}
                        style={styles.bottamIcon}
                      />
                    );
                  }}
                />
              </View>
            </View>

            <View style={{flex: 1, marginHorizontal: 10}}>
              <Text style={styles.heading}>YYYY</Text>
              <View style={styles.pickerView}>
                <RNPickerSelect
                  onValueChange={value => console.log(value)}
                  useNativeAndroidPickerStyle={false}
                  placeholder={{
                    label: null,
                    value: null,
                  }}
                  style={pickerSelectStyles}
                  items={[
                    {label: '2022', value: '2022'},
                    {label: '2023', value: '2023'},
                    {label: '2024', value: '2024'},
                    {label: '2025', value: '2025'},
                  ]}
                  Icon={() => {
                    return (
                      <Image
                        source={IMAGES.downarrow}
                        style={styles.bottamIcon}
                      />
                    );
                  }}
                />
              </View>
            </View>

            <View style={{flex: 1}}>
              <Text style={styles.heading}>CVV</Text>
              <View style={styles.inputView}>
                <TextInput
                  style={styles.input}
                  maxLength={3}
                  keyboardType="numeric"
                  onChangeText={v => {
                    setCVV(v);
                  }}
                  value={cvv}
                />
              </View>
            </View>
          </View>

          <View style={styles.checkView}>
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={0.6}
              style={{marginRight: 5}}>
              <Image
                source={check == true ? IMAGES.checkBox : IMAGES.uncheckBox}
                style={styles.checkIcon}
              />
            </TouchableOpacity>
            <Text style={[styles.heading, {marginTop: 0}]}>
              Save card information
            </Text>
          </View>
        </View>
      </ScrollView>
      <GlobalButton
        Title="ADD CARD"
        buttonStyle={{flex: 0}}
        onClick={() => navigation.navigate('Payment')}
      />
    </View>
  );
}

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontWeight: '500',
    color: COLORS.gray,
    fontSize: 12,
  },

  placeholder: {
    fontWeight: '500',
    color: COLORS.gray,
    fontSize: 12,
  },
});

const styles = StyleSheet.create({
  containor: {
    marginHorizontal: 15,
    marginBottom: 30,
  },
  heading: {
    marginTop: 25,
    fontSize: 10,
    color: COLORS.gray,
  },
  inputView: {
    borderWidth: 0.2,
    height: 40,
    marginTop: 5,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.black,
    flex: 1,
  },
  cardIcon: {
    height: 20,
    width: 30,
    resizeMode: 'contain',
  },
  bottamIcon: {
    height: 10,
    width: 10,
    resizeMode: 'contain',
    marginTop: 15,
  },
  pickerView: {
    borderWidth: 0.2,
    height: 40,
    marginTop: 5,
    borderRadius: 2,
    paddingHorizontal: 10,
    width: '100%',
    justifyContent: 'center',
  },
  checkIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  checkView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25,
  },
});
