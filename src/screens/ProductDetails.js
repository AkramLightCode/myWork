import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../assest/Themes';
import Swiper from 'react-native-swiper';
import IMAGES from '../assest/IMAGES';
import GlobalButton from '../comman/GlobalButton';
import Headers from '../comman/Headers';

export default function ProductDetails({navigation}) {
  const [like, setLike] = useState(false);
  const onLike = () => {
    setLike(like => !like);
  };
  const [num, setNum] = useState(1);

  const [listData, setListData] = useState([
    {active: false, back: COLORS.lightGreen},
    {active: false, back: COLORS.blue},
    {active: false, back: 'red'},
    {active: false, back: 'green'},
    {active: true, back: 'orange'},
  ]);

  const [sizeData, setSizeData] = useState([
    {size: 'S', act: false},
    {size: 'M', act: false},
    {size: 'L', act: true},
    {size: 'XL', act: false},
    {size: 'XXL', act: false},
  ]);

  const RatingData = [1, 2, 3, 4];
  const RatingItem = ({item}) => {
    return (
      <View style={{marginTop: 10}}>
        <View style={[styles.comman, {marginBottom: 5}]}>
          <Text style={styles.rateNumber}>4</Text>
          <Text
            style={[
              styles.detailText,
              {fontWeight: '600', color: COLORS.black},
            ]}>
            Kristijan Binski
          </Text>
        </View>
        <Text style={styles.detailText}>
          Wow,it looks super tosty, I am gonna try it!
        </Text>
        <Text
          style={[
            styles.detailText,
            {fontWeight: '500', color: COLORS.black, marginTop: 5},
          ]}>
          1 day ago
        </Text>
        <View style={styles.rectangle} />
      </View>
    );
  };

  const [SimilarData, setSimilarData] = useState([
    {like: false},
    {like: false},
    {like: false},
    {like: false, last: true},
  ]);
  const SimilarItem = ({item, index}) => {
    return (
      <View
        style={[
          styles.similarContianor,
          {marginRight: item.last == true ? 15 : 0},
        ]}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={styles.imageBack}
          onPress={() => navigation.navigate('AllCategaries')}>
          <Image source={IMAGES.bag} style={styles.itemImage} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            var data = [...SimilarData];
            data.map((item, i) => {
              if (index == i) {
                if (item.like == false) {
                  item.like = true;
                } else if (item.like == true) {
                  item.like = false;
                }
              }
            });
            setSimilarData(data);
          }}
          style={{position: 'absolute', top: 5, right: 5}}>
          <Image
            source={item.like == true ? IMAGES.likeRed : IMAGES.like}
            style={{height: 20, width: 20}}
          />
        </TouchableOpacity>
        <View
          style={[
            styles.comman,
            {marginTop: 5, justifyContent: 'space-between'},
          ]}>
          <Text style={styles.listText}>At vero eos</Text>
          <Text
            style={[
              styles.detailText,
              {fontWeight: '700', color: COLORS.black},
            ]}>
            $70
          </Text>
        </View>
        <View style={[styles.comman, {marginTop: 3}]}>
          <View>
            <Text style={styles.smallText}>NEMO ENIM</Text>
            <View style={styles.comman}>
              <Image source={IMAGES.star} style={styles.starImageStyle} />
              <Image source={IMAGES.star} style={styles.starImageStyle} />
              <Image source={IMAGES.star} style={styles.starImageStyle} />
              <Image source={IMAGES.star} style={styles.starImageStyle} />
              <Image source={IMAGES.stargrey} style={styles.starImageStyle} />
            </View>
          </View>
          <Image
            source={IMAGES.addcart}
            style={{
              height: 18,
              width: 18,
              marginLeft: 'auto',
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.backColor}}>
      <Headers title={'Bags'} menu heart bell onDrawer={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 30}}>
          <View style={{height: 280, backgroundColor: COLORS.white}}>
            <Swiper
              showsButtons={false}
              loop={false}
              dot={
                <View style={[styles.dot, {backgroundColor: COLORS.gray}]} />
              }
              activeDot={<View style={styles.dot} />}>
              <View style={{backgroundColor: COLORS.backColor}}>
                <Image source={IMAGES.bag} style={styles.swiperImg} />
              </View>
              <View style={{backgroundColor: COLORS.backColor}}>
                <Image source={IMAGES.bag} style={styles.swiperImg} />
              </View>
              <View style={{backgroundColor: COLORS.backColor}}>
                <Image source={IMAGES.bag} style={styles.swiperImg} />
              </View>
            </Swiper>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={onLike}
              style={styles.likeBut}>
              <Image
                source={like == true ? IMAGES.likeRed : IMAGES.like}
                style={styles.likeImg}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.prodectDetailView}>
            <Text style={styles.Compny}>Sed ut perspiciatis</Text>
            <Text style={[styles.detailText, {marginTop: 3}]}>NEMO ENIM</Text>
            <View style={styles.offView}>
              <Text
                style={[
                  styles.detailText,
                  {color: COLORS.lightGreen, fontWeight: '500'},
                ]}>
                Special offer 20% off on Categary
              </Text>
            </View>
            <View style={[styles.comman, {marginTop: 5}]}>
              <Text style={styles.price}>$42.00</Text>
              <Text style={styles.lessprice}>$52.00</Text>
            </View>

            <View style={[styles.comman, {marginTop: 5}]}>
              <View style={styles.comman}>
                <Image source={IMAGES.star} style={styles.starImageStyle} />
                <Image source={IMAGES.star} style={styles.starImageStyle} />
                <Image source={IMAGES.star} style={styles.starImageStyle} />
                <Image source={IMAGES.star} style={styles.starImageStyle} />
                <Image source={IMAGES.stargrey} style={styles.starImageStyle} />
              </View>

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
            </View>
          </View>

          <View style={styles.colorContianor}>
            <Text style={styles.commanText}>COLOR</Text>
            <FlatList
              data={listData}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={[styles.color, {backgroundColor: item.back}]}
                    onPress={() => {
                      var data = [...listData];

                      data.map((item, i) => {
                        if (index == i) {
                          if (item.active == false) {
                            item.active = true;
                          }
                        } else {
                          item.active = false;
                        }
                      });
                      setListData(data);
                    }}>
                    <Image
                      source={item.active == true ? IMAGES.right : null}
                      style={{height: 10, width: 10, tintColor: COLORS.white}}
                    />
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View style={styles.colorContianor}>
            <View style={styles.comman}>
              <Text style={styles.commanText}>SIZE</Text>
              <Text
                style={[
                  styles.detailText,
                  {color: COLORS.blue, marginLeft: 'auto'},
                ]}>
                SIZE CHART
              </Text>
            </View>
            <FlatList
              data={sizeData}
              horizontal
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={[
                      styles.sizeView,
                      {
                        borderColor:
                          item.act == true ? COLORS.lightGreen : COLORS.gray,
                      },
                    ]}
                    onPress={() => {
                      var data = [...sizeData];

                      data.map((item, i) => {
                        if (index == i) {
                          if (item.act == false) {
                            item.act = true;
                          }
                        } else {
                          item.act = false;
                        }
                      });
                      setSizeData(data);
                    }}>
                    <Text
                      style={[
                        styles.commanText,
                        {color: item.act == true ? COLORS.black : COLORS.gray},
                      ]}>
                      {item.size}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          <View style={styles.colorContianor}>
            <Text style={[styles.commanText, {marginBottom: 10}]}>
              PRODUCT DETAILS
            </Text>
            <Text style={[styles.detailText, {lineHeight: 15}]}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for
            </Text>
            <View style={[styles.comman, {marginTop: 10}]}>
              <View style={styles.textDot} />
              <Text style={styles.detailText}>
                Dark blue suit for a tone-on-tong look
              </Text>
            </View>
            <View style={[styles.comman, {marginTop: 3}]}>
              <View style={styles.textDot} />
              <Text style={styles.detailText}>Regular fit</Text>
            </View>
            <View style={[styles.comman, {marginTop: 3}]}>
              <View style={styles.textDot} />
              <Text style={styles.detailText}>100% fit</Text>
            </View>
            <View style={[styles.comman, {marginTop: 3}]}>
              <View style={styles.textDot} />
              <Text style={styles.detailText}>
                Free shipping with 4 days delivery
              </Text>
            </View>
          </View>

          <View style={styles.colorContianor}>
            <View style={styles.comman}>
              <Text style={styles.commanText}>RATINGS & REVIEWS</Text>
              <TouchableOpacity activeOpacity={0.6} style={styles.rateView}>
                <Text style={[styles.detailText, {color: COLORS.lightGreen}]}>
                  Rate it
                </Text>
              </TouchableOpacity>
            </View>

            <FlatList data={RatingData} renderItem={RatingItem} />

            <View style={[styles.comman, {marginTop: 10}]}>
              <TouchableOpacity activeOpacity={0.6} style={[styles.comman]}>
                <Text
                  style={[
                    styles.commanText,
                    {color: COLORS.lightGreen, fontWeight: '500', flex: 1},
                  ]}>
                  View All reviews
                </Text>
                <Image
                  source={IMAGES.arrowGray}
                  resizeMode="contain"
                  style={{height: 12, width: 12}}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.colorContianor, {paddingHorizontal: 0}]}>
            <Text style={[styles.commanText, {marginHorizontal: 15}]}>
              SIMILAR PRODUCTS
            </Text>
            <FlatList
              data={SimilarData}
              renderItem={SimilarItem}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.comman}>
        <GlobalButton
          Title="ADD TO CART"
          buttonStyle={{borderRadius: 0, backgroundColor: COLORS.pimeryGreen}}
        />
        <GlobalButton
          Title="BUY NOW"
          buttonStyle={{borderRadius: 0}}
          onClick={() => navigation.navigate('MyCart')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  swiperImg: {
    width: '100%',
    height: 230,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  dot: {
    height: 6,
    width: 6,
    backgroundColor: COLORS.lightGreen,
    borderRadius: 10,
    marginHorizontal: 3,
  },
  likeBut: {
    top: 15,
    position: 'absolute',
    right: 10,
  },
  likeImg: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  Compny: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
  },
  detailText: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.gray,
    lineHeight: 13,
  },
  offView: {
    backgroundColor: COLORS.creamyGreen,
    marginRight: 'auto',
    marginTop: 5,
    paddingVertical: 4,
    paddingHorizontal: 7,
    borderRadius: 1,
  },
  comman: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 15,
    fontWeight: '900',
    color: COLORS.black,
  },
  lessprice: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.gray,
    marginLeft: 10,
    textDecorationLine: 'line-through',
  },
  starImageStyle: {
    width: 8,
    height: 8,
    resizeMode: 'cover',
    marginRight: 3,
    marginTop: 2,
  },
  prodectDetailView: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  backgroun: {
    height: 16,
    width: 18,
    backgroundColor: COLORS.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
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
    fontWeight: '500',
  },
  commanText: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.black,
  },
  colorContianor: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 5,
    backgroundColor: COLORS.white,
  },
  color: {
    height: 20,
    width: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    marginTop: 10,
  },
  sizeView: {
    height: 30,
    width: 35,
    borderWidth: 1,
    marginRight: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDot: {
    height: 3,
    width: 3,
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    marginRight: 5,
  },
  rateView: {
    borderWidth: 0.2,
    borderColor: COLORS.lightGreen,
    marginLeft: 'auto',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 2,
  },
  rateNumber: {
    backgroundColor: COLORS.lightGreen,
    paddingHorizontal: 12,
    paddingVertical: 2,
    color: COLORS.white,
    fontSize: 10,
    fontWeight: '600',
    lineHeight: 13,
    borderRadius: 10,
    marginRight: 5,
  },
  rectangle: {
    height: 0.5,
    backgroundColor: COLORS.backColor,
    marginTop: 10,
    elevation: 1,
  },
  listText: {
    fontSize: 10,
    fontWeight: '500',
    color: COLORS.black,
  },
  imageBack: {
    backgroundColor: COLORS.backColor,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    height: 150,
  },
  similarContianor: {
    marginLeft: 15,
    marginTop: 10,
    flex: 1,
  },
  itemImage: {
    height: 140,
    width: 140,
    resizeMode: 'contain',
  },
  smallText: {
    fontWeight: 'normal',
    color: COLORS.gray,
    fontSize: 8,
  },
});
