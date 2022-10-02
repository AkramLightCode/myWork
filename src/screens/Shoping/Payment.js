import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../../assest/Themes';
import Headers from '../../comman/Headers';
import GlobalButton from '../../comman/GlobalButton';
import IMAGES from '../../assest/IMAGES';

export default function Payment({navigation}) {
  const [Data, setData] = useState([
    {
      image: IMAGES.visa,
      cardTxt: 'Visa',
      number: '**** **** **** 5413',
      active: true,
    },
    {
      image: IMAGES.paypal,
      cardTxt: 'Paypal',
      number: '**** **** **** 5738',
      active: false,
    },
    {
      image: IMAGES.mastercard,
      cardTxt: 'Master Card',
      number: '**** **** **** 7598',
      active: false,
    },
  ]);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.backColor}}>
      <Headers
        title="Payment"
        menu
        cart
        Number="3"
        onDrawer={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 30}}>
          <View style={[styles.comman, {marginTop: 20}]}>
            <Text style={styles.heddingText}>Choose Pay Method</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('AddNewCard')}
              style={styles.tuch}>
              <Image source={IMAGES.add} style={styles.icon} />
              <Text
                style={{
                  fontSize: 10,
                  color: COLORS.lightGreen,
                  fontWeight: '400',
                }}>
                Add New
              </Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={Data}
            renderItem={({item, index}) => {
              return (
                <View style={{marginTop: 20}}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.comman}
                    onPress={() => {
                      var data = [...Data];

                      data.map((item, i) => {
                        if (index == i) {
                          if (item.active == false) {
                            item.active = true;
                          }
                        } else {
                          item.active = false;
                        }
                      });
                      setData(data);
                    }}>
                    <View style={styles.listView}>
                      <Image source={item.image} style={styles.image} />
                      <View style={{marginLeft: 10}}>
                        <Text style={styles.visaText}>{item.cardTxt}</Text>
                        <Text style={styles.numberText}>{item.number}</Text>
                      </View>
                    </View>
                    <Image
                      source={
                        item.active == true
                          ? IMAGES.roungcheck
                          : IMAGES.uncheckRound
                      }
                      style={styles.checkIcon}
                    />
                  </TouchableOpacity>
                  <View style={styles.rectengal} />
                </View>
              );
            }}
          />
          <View
            style={[
              styles.rectengal,
              {height: 0.5, marginTop: 0, backgroundColor: COLORS.gray},
            ]}
          />

          <View style={styles.flexView}>
            <Text style={styles.heddingText}>Order Summary</Text>
            <Text style={styles.smallText}>2 items</Text>
          </View>

          <View style={[styles.rectengal, {height: 0.5, marginTop: 10}]} />

          <View style={styles.flexView}>
            <Text style={styles.normalText}>Card Subtotal</Text>
            <Text style={styles.normalText}>$240.00</Text>
          </View>

          <View style={styles.flexView}>
            <Text style={styles.normalText}>Convenience Fee</Text>
            <Text style={styles.normalText}>$2.95</Text>
          </View>

          <View style={[styles.rectengal, {height: 0.4}]} />

          <View style={styles.flexView}>
            <Text style={styles.price}>TOTAL</Text>
            <Text style={styles.price}>$242.95</Text>
          </View>
          <View style={[styles.rectengal, {height: 0.4}]} />
        </View>
      </ScrollView>
      <GlobalButton
        Title="PROCEED TO CHECKOUT"
        buttonStyle={{flex: 0}}
        onClick={() => navigation.navigate('CheckInCheckOut')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  comman: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  heddingText: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
  },
  icon: {
    height: 8,
    width: 8,
    tintColor: COLORS.lightGreen,
    marginRight: 3,
    resizeMode: 'contain',
  },
  tuch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 50,
    resizeMode: 'contain',
  },
  listView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  visaText: {
    fontSize: 13,
    color: COLORS.black,
    fontWeight: '500',
  },
  numberText: {
    fontSize: 12,
    color: COLORS.gray,
    fontWeight: '600',
    marginTop: 5,
  },
  checkIcon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  rectengal: {
    height: 1,
    backgroundColor: COLORS.backColor,
    marginTop: 15,
    elevation: 0.5,
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
  flexView: {
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
