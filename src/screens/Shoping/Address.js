import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../assest/Themes';
import Headers from '../../comman/Headers';
import GlobalButton from '../../comman/GlobalButton';
import IMAGES from '../../assest/IMAGES';

export default function Address({navigation}) {
  const [check, setCheck] = useState(false);
  const onCheck = () => {
    setCheck(check => !check);
  };

  return (
    <View style={styles.maincontainor}>
      <Headers
        title="Address"
        cart
        menu
        Number="2"
        onDrawer={() => navigation.goBack()}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 30}}>
          <View style={styles.Containoe}>
            <View style={styles.view}>
              <View style={{flex: 0.7}}>
                <Text style={[styles.username, {marginBottom: 10}]}>
                  John Smith
                </Text>
                <Text style={styles.commonText}>
                  A-68, Sed ut perspiciatis unde omnis eiusmod tempor incididunt
                  mogna aliqua
                </Text>
                <Text style={styles.commonText}>Lorem - 395004</Text>
                <Text style={styles.commonText}>United Kingdom</Text>
                <Text style={styles.commonText}>Mobile: 6889 999 999</Text>
              </View>
              <View style={styles.secondView}>
                <TouchableOpacity activeOpacity={0.6} onPress={onCheck}>
                  <Image
                    source={
                      check == true ? IMAGES.roungcheck : IMAGES.uncheckRound
                    }
                    style={styles.checkIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.common}>
              <GlobalButton
                Title="Edit"
                buttonText={{
                  color: COLORS.lightGreen,
                  fontSize: 12,
                  fontWeight: '500',
                }}
                buttonStyle={[styles.button, {borderBottomLeftRadius: 3}]}
              />
              <GlobalButton
                Title="Add New Address"
                buttonText={{
                  color: COLORS.black,
                  fontSize: 12,
                  fontWeight: '500',
                }}
                buttonStyle={[styles.button, {borderBottomRightRadius: 3}]}
              />
            </View>
          </View>

          <View style={[styles.rectengal, {marginTop: 20}]} />

          <View style={[styles.flexView, {marginTop: 20}]}>
            <Text style={styles.username}>Order Summary</Text>
            <Text style={styles.smallText}>2 items</Text>
          </View>

          <View style={[styles.rectengal, {height: 0.1}]} />

          <View style={styles.flexView}>
            <Text style={styles.normalText}>Card Subtotal</Text>
            <Text style={styles.normalText}>$240.00</Text>
          </View>

          <View style={styles.flexView}>
            <Text style={styles.normalText}>Convenience Fee</Text>
            <Text style={styles.normalText}>$2.95</Text>
          </View>

          <View style={[styles.rectengal, {height: 0.2}]} />

          <View style={styles.flexView}>
            <Text style={styles.price}>TOTAL</Text>
            <Text style={styles.price}>$242.95</Text>
          </View>

          <View style={[styles.rectengal, {height: 0.5}]} />
        </View>
      </ScrollView>

      <GlobalButton
        buttonStyle={{flex: 0}}
        Title="CONTINUE"
        onClick={() => navigation.navigate('Payment')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainor: {
    flex: 1,
    backgroundColor: COLORS.backColor,
  },
  Containoe: {
    marginHorizontal: 15,
    borderWidth: 0.1,
    marginTop: 20,
    borderRadius: 3,
    borderColor: COLORS.gray,
  },
  view: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  secondView: {
    flex: 0.3,
    alignItems: 'flex-end',
  },
  username: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
  },
  commonText: {
    fontSize: 12,
    color: COLORS.gray,
    fontWeight: 'normal',
    lineHeight: 18,
  },
  checkIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    alignSelf: 'flex-end',
  },
  common: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: COLORS.backColor,
    borderWidth: 0.1,
    borderRadius: 0,
    borderColor: COLORS.gray,
    height: 40,
  },
  rectengal: {
    height: 2,
    backgroundColor: COLORS.backColor,
    marginTop: 10,
    elevation: 0.5,
  },
  flexView: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  smallText: {
    fontSize: 10,
    color: COLORS.lightGreen,
    fontWeight: '600',
  },
  normalText: {
    fontSize: 12,
    color: COLORS.gray,
    fontWeight: '400',
  },
  price: {
    fontSize: 12,
    fontWeight: '900',
    color: COLORS.black,
  },
});
