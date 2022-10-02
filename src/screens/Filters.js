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
import Headers from '../comman/Headers';
import IMAGES from '../assest/IMAGES';
import Slider from '@react-native-community/slider';
import GlobalButton from '../comman/GlobalButton';

export default function Filters({navigation}) {
  const [select, setSelect] = useState(1);

  const onPress = v => {
    setSelect(v);
  };

  const [check, setCheck] = useState(false);

  const onchech = () => {
    setCheck(check => !check);
  };

  const [CategoryData, setCategoryData] = useState([
    {cate: 'Categary 1', active: false},
    {cate: 'Categary 2', active: false},
    {cate: 'Categary 3', active: false},
    {cate: 'Categary 4', active: false},
    {cate: 'Categary 5', active: false},
    {cate: 'Categary 6', active: false},
  ]);

  const CategoryItem = ({item, index}) => {
    return (
      <View style={styles.commanList}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            var data = [...CategoryData];

            data.map((item, i) => {
              if (index == i) {
                if (item.active == false) {
                  item.active = true;
                } else if (item.active == true) {
                  item.active = false;
                }
              }
            });
            setCategoryData(data);
          }}>
          <Image
            source={item.active == true ? IMAGES.checkBox : IMAGES.unCheck}
            style={styles.genderIcon}
          />
        </TouchableOpacity>
        <Text style={styles.genderText}>{item.cate}</Text>
      </View>
    );
  };

  const [brandData, setbrandData] = useState([
    {cate: 'Brand 1', active: false},
    {cate: 'Brand 2', active: false},
    {cate: 'Brand 3', active: false},
    {cate: 'Brand 4', active: false},
    {cate: 'Brand 5', active: false},
    {cate: 'Brand 6', active: false},
  ]);

  const brandItem = ({item, index}) => {
    return (
      <View style={styles.commanList}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            var data = [...brandData];

            data.map((item, i) => {
              if (index == i) {
                if (item.active == false) {
                  item.active = true;
                } else if (item.active == true) {
                  item.active = false;
                }
              }
            });
            setbrandData(data);
          }}>
          <Image
            source={item.active == true ? IMAGES.checkBox : IMAGES.unCheck}
            style={styles.genderIcon}
          />
        </TouchableOpacity>
        <Text style={styles.genderText}>{item.cate}</Text>
      </View>
    );
  };

  const [colorData, setColorData] = useState([
    {active: false, back: COLORS.lightGreen},
    {active: false, back: COLORS.blue},
    {active: false, back: 'red'},
    {active: false, back: 'green'},
    {active: true, back: 'orange'},
  ]);
  const colorItem = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        style={[styles.color, {backgroundColor: item.back}]}
        onPress={() => {
          var data = [...colorData];

          data.map((item, i) => {
            if (index == i) {
              if (item.active == false) {
                item.active = true;
              }
            } else {
              item.active = false;
            }
          });
          setColorData(data);
        }}>
        <Image
          source={item.active == true ? IMAGES.right : null}
          style={{height: 10, width: 10, tintColor: COLORS.white}}
        />
      </TouchableOpacity>
    );
  };

  const [retingData, setretingData] = useState([
    {cate: '1 Star', active: false},
    {cate: '2 Star', active: false},
    {cate: '3 Star', active: false},
    {cate: '4 Star', active: false},
    {cate: '5 Star', active: false},
  ]);

  const ratingItem = ({item, index}) => {
    return (
      <View style={styles.commanList}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            var data = [...retingData];

            data.map((item, i) => {
              if (index == i) {
                if (item.active == false) {
                  item.active = true;
                } else if (item.active == true) {
                  item.active = false;
                }
              }
            });
            setretingData(data);
          }}>
          <Image
            source={item.active == true ? IMAGES.checkBox : IMAGES.unCheck}
            style={styles.genderIcon}
          />
        </TouchableOpacity>
        <Text style={styles.genderText}>{item.cate}</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.backColor}}>
      <Headers filter clear />
      <ScrollView>
        <View style={{paddingBottom: 30}}>
          <Text style={styles.gender}>Gender</Text>
          <View style={styles.elivestion} />
          <View style={[styles.comman, {marginTop: 15}]}>
            <TouchableOpacity
              onPress={() => onPress(1)}
              activeOpacity={0.6}
              style={[styles.comman, {marginLeft: 15}]}>
              <Image
                source={select == 1 ? IMAGES.maleAct : IMAGES.male}
                style={styles.genderIcon}
              />
              <Text style={styles.genderText}>Boy</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onPress(2)}
              activeOpacity={0.6}
              style={[styles.comman, {marginLeft: 25}]}>
              <Image
                source={select == 2 ? IMAGES.femaleAct : IMAGES.female}
                style={styles.genderIcon}
              />
              <Text style={styles.genderText}>Girl</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.gender}>Category</Text>
          <View style={styles.elivestion} />
          <FlatList
            data={CategoryData}
            renderItem={CategoryItem}
            numColumns={3}
          />

          <Text style={styles.gender}>Brand</Text>
          <View style={styles.elivestion} />
          <FlatList data={brandData} renderItem={brandItem} numColumns={3} />

          <View style={styles.comman}>
            <Text style={styles.gender}>Price</Text>
            <Text style={styles.price}>$47 - $80</Text>
          </View>
          <View style={styles.elivestion} />
          <View style={{marginTop: 10}}>
            <Slider
              maximumValue={100}
              minimumValue={10}
              //   onSlidingStart={100}
              //   onSlidingComplete={0}
              minimumTrackTintColor={COLORS.lightGreen}
              maximumTrackTintColor={COLORS.gray}
              thumbTintColor={COLORS.lightGreen}
              step={1}
              //   onChange={sliderValue => setSliderValue(sliderValue)}
            />
          </View>

          <Text style={styles.gender}>Colors</Text>
          <View style={styles.elivestion} />
          <FlatList
            data={colorData}
            renderItem={colorItem}
            horizontal
            style={{marginLeft: 15}}
          />

          <Text style={styles.gender}>Availability</Text>
          <View style={styles.elivestion} />
          <View style={[styles.comman, {marginTop: 10, marginLeft: 15}]}>
            <TouchableOpacity onPress={onchech}>
              <Image
                source={check == true ? IMAGES.checkBox : IMAGES.unCheck}
                style={styles.genderIcon}
              />
            </TouchableOpacity>
            <Text style={styles.genderText}>In Stock</Text>
          </View>

          <Text style={styles.gender}>Ratings</Text>
          <View style={styles.elivestion} />
          <FlatList data={retingData} renderItem={ratingItem} numColumns={3} />
        </View>
      </ScrollView>
      <View style={styles.comman}>
        <GlobalButton
        onClick={() => navigation.navigate("TabNavigation")}
          Title="CLOSE"
          buttonText={{
            color: COLORS.black,
          }}
          buttonStyle={styles.button}
        />
        <GlobalButton
          Title="APPLY"
          buttonText={{
            color: COLORS.lightGreen,
          
          }}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gender: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.black,
    marginTop: 25,
    marginLeft: 15,
  },
  elivestion: {
    flex: 1,
    height: 0.5,
    backgroundColor: COLORS.backColor,
    elevation: 0.8,
    marginTop: 10,
  },
  comman: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genderIcon: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
    marginRight: 5,
  },
  genderText: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.gray,
  },
  commanList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 10,
    width: '33%',
  },
  price: {
    color: COLORS.lightGreen,
    marginTop: 25,
    marginRight: 15,
    fontSize: 12,
    fontWeight: '400',
    marginLeft: 'auto',
  },
  color: {
    height: 20,
    width: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
    marginTop: 10,
  },
  button: {
    backgroundColor: COLORS.backColor,
    borderWidth: 0.5,
    borderRadius: 0,
    borderColor: COLORS.gray,

  },
});
