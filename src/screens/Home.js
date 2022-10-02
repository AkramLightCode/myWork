import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

import IMAGES from '../assest/IMAGES';
import {COLORS} from '../assest/Themes';
import Headers from '../comman/Headers';

export default function Home({navigation}) {
  // const [defaultRating, setDefaultRating] = useState(3);
  // const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  // const CustomRatingBar = () => {
  //   return (
  //     <View style={styles.customRatingBarStyle}>
  //       {maxRating.map((item, key) => {
  //         return (
  //           <TouchableOpacity
  //             activeOpacity={0.6}
  //             key={item}
  //             onPress={() => setDefaultRating(item)}>
  //             <Image
  //               style={styles.starImageStyle}
  //               source={item <= defaultRating ? IMAGES.star : IMAGES.stargrey}
  //             />
  //           </TouchableOpacity>
  //         );
  //       })}
  //     </View>
  //   );
  // };

  BrandData = [
    {
      logo: IMAGES.myntra,
      offText: 'Baby Clouths 80% Off',
    },
    {
      logo: IMAGES.cry,
      offText: 'Shoes 80% Sale Flat 80% Off',
    },

    {
      logo: IMAGES.toys,
      offText: 'Toys Discount Sale Flate 30% Off',
    },
    {
      logo: IMAGES.myntra,
      offText: 'Baby Clouths 30% Off',
    },
    {
      logo: IMAGES.cry,
      offText: 'Shoes 80% Sale Flat 80% Off',
    },
    {
      logo: IMAGES.toys,
      offText: 'Toys Discount Sale Flate 30% Off',
      right: true,
    },
  ];

  const BrandItem = ({item}) => {
    return (
      <View
        style={[
          styles.listContainor,
          {marginRight: item.right == true ? 15 : 0},
        ]}>
        <Image source={item.logo} style={styles.logo} />
        <Text style={styles.offText}>{item.offText}</Text>
        <TouchableOpacity activeOpacity={0.6} style={styles.listButton}>
          <Text style={styles.tuchText}>Open</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ProdectData = [
    {prodect: IMAGES.tady},
    {prodect: IMAGES.bag},
    {prodect: IMAGES.bee},
    {prodect: IMAGES.tady},
    {prodect: IMAGES.bag},
    {prodect: IMAGES.bee, right: true},
  ];

  const ProdecItem = ({item}) => {
    return (
      <View
        style={[
          styles.prodectView,
          {marginRight: item.right == true ? 15 : 0},
        ]}>
        <TouchableOpacity
          style={{backgroundColor: COLORS.backColor}}
          activeOpacity={0.6}
          onPress={() => navigation.navigate('ProductDetails')}>
          <Image
            source={item.prodect}
            style={{height: 100, width: 100, alignSelf: 'center'}}
          />
        </TouchableOpacity>
        <View style={{margin: 10}}>
          <View style={[styles.comman, {justifyContent: 'space-between'}]}>
            <Text style={styles.lisText}>At vero eos</Text>
            <Text style={styles.lisText}>$90</Text>
          </View>
          <Text style={styles.detailText}>NEMO ENIM</Text>
          <View style={[styles.comman, {marginTop: 5}]}>
            {/* <CustomRatingBar /> */}
            <View style={styles.comman}>
              <Image source={IMAGES.star} style={styles.starImageStyle} />
              <Image source={IMAGES.star} style={styles.starImageStyle} />
              <Image source={IMAGES.star} style={styles.starImageStyle} />
              <Image source={IMAGES.star} style={styles.starImageStyle} />
              <Image source={IMAGES.stargrey} style={styles.starImageStyle} />
            </View>
            <Image source={IMAGES.cart} style={styles.cartIcon} />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainor}>
      <Headers
        type={'Drawer'}
        title="Home"
        bell="bell"
        add
        menu
        onDrawer={() => navigation.toggleDrawer()}
        onClick={() => navigation.navigate('Filters')}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 30}}>
          <View style={styles.headerContainor}>
            <View style={styles.comman}>
              <Image source={IMAGES.bee} style={styles.userImage} />
              <View style={{marginLeft: 10}}>
                <Text style={styles.username}>Joseph Wilson</Text>
                <Text style={[styles.lisText, {color: COLORS.white}]}>
                  Age: 7 year
                </Text>
                <Text style={[styles.lisText, {color: COLORS.white}]}>
                  Kinderjoy Academy
                </Text>
              </View>
            </View>
            <Image source={IMAGES.cloud} style={styles.cloudImg} />
          </View>

          <View style={[styles.comman, {marginHorizontal: 15, marginTop: 25}]}>
            <View style={styles.comman}>
              <Image source={IMAGES.leftdeal} style={styles.dealicon} />
              <View style={{marginLeft: 10, flex: 1}}>
                <Text style={styles.dealText}>Deals & More</Text>
                <Text style={styles.detailText}>
                  we heve greaat deals for you baby!
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.6} style={styles.comman}>
                <Text style={[styles.detailText, {color: COLORS.lightGreen}]}>
                  See All
                </Text>
                <Image source={IMAGES.rightArrow} style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={BrandData}
            renderItem={BrandItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <View style={[styles.comman, {marginHorizontal: 15, marginTop: 25}]}>
            <View style={styles.comman}>
              <Image source={IMAGES.kidz} style={styles.dealicon} />
              <View style={{marginLeft: 10, flex: 1}}>
                <Text style={styles.dealText}>All My Kidz Acsdemy Deals</Text>
                <Text style={styles.detailText}>
                  we heve greaat deals for you baby!
                </Text>
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={styles.comman}
                onPress={() => navigation.navigate('AllCategaries')}>
                <Text style={[styles.detailText, {color: COLORS.lightGreen}]}>
                  See All
                </Text>
                <Image source={IMAGES.rightArrow} style={styles.arrowIcon} />
              </TouchableOpacity>
            </View>
          </View>

          <FlatList
            data={ProdectData}
            renderItem={ProdecItem}
            horizontal
            showsHorizontalScrollIndicator={false}
          />

          <View style={styles.card}>
            <View style={[styles.comman, {flex: 0.7}]}>
              <Image source={IMAGES.account} style={styles.accountIcon} />
              <View>
                <Text style={styles.dealText}>My Account</Text>
                <View style={styles.comman}>
                  <Text style={styles.detailText}>Daycare :</Text>
                  <Text style={styles.lisText}>Kinderjoy Kids Academy</Text>
                </View>
                <View style={styles.comman}>
                  <Text style={styles.detailText}>Child :</Text>
                  <Text style={styles.lisText}>John Smith</Text>
                </View>
              </View>
            </View>
            <View
              style={[styles.comman, {flex: 0.3, justifyContent: 'flex-end'}]}>
              <View>
                <Text style={[styles.dealText, {fontSize: 15}]}>$170.00</Text>
                <Text style={[styles.detailText, {fontSize: 8}]}>
                  Current Balance
                </Text>
              </View>
              <TouchableOpacity activeOpacity={0.6} style={{marginLeft: 10}}>
                <Image source={IMAGES.arrowbtn} style={styles.dealicon} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainor: {
    backgroundColor: COLORS.lightGreen,
    padding: 15,
  },
  userImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  username: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.white,
  },
  mainContainor: {
    flex: 1,
    backgroundColor: COLORS.backColor,
  },
  cloudImg: {
    height: 20,
    width: 150,
    position: 'absolute',
    bottom: 0,
    right: 0,
    resizeMode: 'contain',
  },
  comman: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dealicon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  dealText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.black,
  },
  detailText: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.gray,
    marginTop: 2,
  },
  arrowIcon: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  logo: {
    height: 70,
    width: 70,
    borderRadius: 50,
    resizeMode: 'contain',
  },
  listContainor: {
    marginTop: 25,
    alignItems: 'center',
    width: 95,
    marginLeft: 15,
  },
  offText: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.black,
    marginTop: 10,
    textAlign: 'center',
    flex: 1,
  },
  listButton: {
    backgroundColor: COLORS.lightGreen,
    paddingVertical: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 10,
  },
  tuchText: {
    fontSize: 10,
    color: COLORS.white,
    fontWeight: '500',
  },
  prodectView: {
    backgroundColor: COLORS.white,
    elevation: 2,
    width: 140,
    marginTop: 15,
    marginLeft: 15,
    // padding: 10,
    borderRadius: 3,
  },
  lisText: {
    fontSize: 10,
    fontWeight: '500',
    color: COLORS.black,
    marginTop: 2,
  },
  starImageStyle: {
    width: 10,
    height: 10,
    resizeMode: 'cover',
    marginRight: 2,
  },
  customRatingBarStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    height: 20,
    width: 20,
    marginLeft: 'auto',
    resizeMode: 'contain',
  },
  card: {
    marginHorizontal: 15,
    backgroundColor: COLORS.white,
    padding: 10,
    marginTop: 25,
    borderRadius: 5,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  accountIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 7,
    alignSelf: 'flex-start',
    top: 1,
  },
});
