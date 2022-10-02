import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../assest/Themes';
import GlobalButton from '../../comman/GlobalButton';
import Headers from '../../comman/Headers';
import IMAGES from '../../assest/IMAGES';

export default function MyCart({navigation}) {
  const [num, setNum] = useState(1);
  const [velue, setValue] = useState('');

  const [like, setLike] = useState(false);
  const onClick = () => {
    setLike(like => !like);
  };

  const [check, setCheck] = useState(false);
  const onCheck = () => {
    setCheck(check => !check);
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.backColor}}>
      <Headers
        title="My Cart"
        cart
        menu
        Number="1"
        onDrawer={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 30}}>
          <View style={styles.prodectView}>
            <View style={[styles.comman, {flex: 6}]}>
              <Image source={IMAGES.bag} style={styles.bagImage} />
              <View>
                <Text style={[styles.prodectName, {color: COLORS.black}]}>
                  At vero eos
                </Text>
                <Text style={[styles.commanText, {marginTop: 2}]}>
                  NEMO ENIM
                </Text>
                <View style={[styles.comman, {marginTop: 5}]}>
                  <TouchableOpacity activeOpacity={0.6} onPress={onClick}>
                    <Image
                      source={like == true ? IMAGES.likeRed : IMAGES.like}
                      style={styles.likeIcon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.commanText}>Save</Text>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={{marginLeft: 20}}>
                    <Image source={IMAGES.delete} style={styles.deleteIcon} />
                  </TouchableOpacity>
                  <Text style={styles.commanText}>Delete</Text>
                </View>
              </View>
            </View>

            <View style={[styles.comman, {flex: 4}]}>
              <View style={[styles.comman, {marginLeft: 'auto'}]}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.backgroun}
                  onPress={() => {
                    if (num > 1) {
                      setNum(num - 1);
                    }
                  }}>
                  <Text style={styles.lessText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.add}>{num}</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.backgroun}
                  onPress={() => {
                    if (num > 0) {
                      setNum(num + 1);
                    }
                  }}>
                  <Text style={styles.lessText}>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.price}>$90</Text>
            </View>
          </View>

          <View style={styles.rectengal} />

          <View style={styles.prodectView}>
            <Image source={IMAGES.bag} style={styles.bagImage} />
            <Text style={[styles.prodectName, {color: COLORS.black}]}>
              Invoiced Weekly Daycare
            </Text>
            <Text style={[styles.price, {marginLeft: 'auto'}]}>$150</Text>
          </View>

          <View style={styles.rectengal} />

          <View style={styles.allpriceView}>
            <View style={styles.inputContainor}>
              <TextInput
                style={styles.input}
                placeholder="Promotion Code"
                placeholderTextColor={COLORS.gray}
                value={velue}
                onChangeText={v => {
                  setValue(v);
                }}
              />
              <TouchableOpacity activeOpacity={0.6} style={styles.inputbutton}>
                <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.comman, {marginTop: 20}]}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={onCheck}
                style={{marginRight: 5}}>
                <Image
                  source={check == true ? IMAGES.checkBox : IMAGES.uncheckBox}
                  style={styles.checkBox}
                />
              </TouchableOpacity>
              <Text
                style={{fontSize: 10, fontWeight: '400', color: COLORS.black}}>
                By as a gift
              </Text>
            </View>

            <View
              style={[
                styles.comman,
                {justifyContent: 'space-between', marginTop: 20},
              ]}>
              <Text style={styles.prodectName}>Cart Subtotal</Text>
              <Text style={styles.prodectName}>$240.00</Text>
            </View>

            <View
              style={[
                styles.comman,
                {justifyContent: 'space-between', marginTop: 20},
              ]}>
              <Text style={styles.prodectName}>Convenience fee</Text>
              <Text style={styles.prodectName}>$2.95</Text>
            </View>
          </View>

          <View style={styles.rectengal} />
          <View style={styles.prodectView}>
            <Text style={styles.price}>Total</Text>
            <Text style={[styles.price, {marginLeft: 'auto'}]}>$242.95</Text>
          </View>
          <View style={styles.rectengal} />
        </View>
      </ScrollView>
      <GlobalButton
        buttonStyle={{flex: 0}}
        Title="PLACE ORDER"
        onClick={() => navigation.navigate('Address')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  prodectView: {
    paddingVertical: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  comman: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bagImage: {
    height: 70,
    width: 70,
    resizeMode: 'contain',
    marginRight: 10,
  },
  prodectName: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.gray,
  },
  text: {
    fontSize: 10,
    color: COLORS.gray,
    fontWeight: 'normal',
  },
  commanText: {
    fontSize: 10,
    fontWeight: 'normal',
    color: COLORS.gray,
    marginLeft: 4,
  },
  likeIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  deleteIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  lessText: {
    color: COLORS.white,
    fontSize: 12,
    lineHeight: 15,
  },
  add: {
    color: COLORS.black,
    fontSize: 12,
    marginHorizontal: 5,
    fontWeight: '400',
  },
  backgroun: {
    height: 16,
    width: 18,
    backgroundColor: COLORS.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
    marginLeft: 10,
  },
  rectengal: {
    height: 0.5,
    backgroundColor: COLORS.backColor,
    elevation: 0.5,
  },
  inputContainor: {
    height: 45,
    borderWidth: 0.1,
    flex: 1,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: COLORS.gray,
  },
  inputbutton: {
    backgroundColor: COLORS.lightGreen,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.white,
  },

  input: {
    flex: 1,
    marginLeft: 15,
    fontSize: 12,
    color: COLORS.gray,
  },
  allpriceView: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flex: 1,
  },
  checkBox: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 5,
  },
});
