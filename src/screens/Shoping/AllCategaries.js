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
import IMAGES from '../../assest/IMAGES';

export default function AllCategaries({navigation}) {
  const [listdata, setListData] = useState([
    {id: 1, active: false},
    {id: 2, active: false},
    {id: 3, active: false},
    {id: 4, active: false},
    {id: 5, active: false},
    {id: 6, active: false},
    {id: 7, active: false},
    {id: 8, active: false},
  ]);
  return (
    <View style={styles.mainContainor}>
      <Headers
        title="All Categaries"
        heart
        bell
        search
        menu
        onDrawer={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 30}}>
          <View style={styles.Containor}>
            <TouchableOpacity style={styles.flexView} activeOpacity={0.6}>
              <Text style={styles.headingText}>GENDER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexView} activeOpacity={0.6}>
              <Image source={IMAGES.sort} style={styles.icon} />
              <Text style={styles.headingText}>SORT BY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.flexView} activeOpacity={0.6}>
              <Image source={IMAGES.refine} style={styles.icon} />
              <Text style={styles.headingText}>REFINE</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={listdata}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={[styles.prodectView, {flex: 0.5}]}>
                  <TouchableOpacity
                    style={styles.backColorView}
                    activeOpacity={0.6}
                    onPress={() => navigation.navigate('ProductDetails')}>
                    <Image source={IMAGES.bag} style={styles.prodectImage} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={styles.likeView}
                    onPress={() => {
                      var data = [...listdata];

                      data.map((item, i) => {
                        if (index == i) {
                          if (item.active == false) {
                            item.active = true;
                          } else if (item.active == true) {
                            item.active = false;
                          }
                        }
                      });
                      setListData(data);
                    }}>
                    <Image
                      source={
                        item.active == true ? IMAGES.likeRed : IMAGES.like
                      }
                      style={styles.likeIcon}
                    />
                  </TouchableOpacity>
                  <View style={[styles.Containor, {marginTop: 10}]}>
                    <Text style={styles.lisText}>At vero eos</Text>
                    <Text style={styles.lisText}>$90</Text>
                  </View>
                  <Text style={styles.detailText}>NEMO ENIM</Text>
                  <View style={[styles.Containor, {marginTop: 5}]}>
                    <View style={styles.Containor}>
                      <Image
                        source={IMAGES.star}
                        style={styles.starImageStyle}
                      />
                      <Image
                        source={IMAGES.star}
                        style={styles.starImageStyle}
                      />
                      <Image
                        source={IMAGES.star}
                        style={styles.starImageStyle}
                      />
                      <Image
                        source={IMAGES.star}
                        style={styles.starImageStyle}
                      />
                      <Image
                        source={IMAGES.stargrey}
                        style={styles.starImageStyle}
                      />
                    </View>
                    <Image source={IMAGES.cart} style={styles.cartIcon} />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainor: {
    flex: 1,
    backgroundColor: COLORS.backColor,
  },
  Containor: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingVertical: 10,
    borderWidth: 0.2,
    borderColor: COLORS.backColor,
    elevation: 0.5,
    justifyContent: 'center',
  },
  icon: {
    height: 10,
    width: 10,
    marginRight: 5,
    resizeMode: 'contain',
  },
  headingText: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.black,
  },
  prodectView: {
    backgroundColor: COLORS.backColor,

    width: 140,
    marginTop: 15,
    marginHorizontal: 10,
    paddingBottom: 10,
    borderRadius: 3,
  },
  lisText: {
    fontSize: 10,
    fontWeight: '500',
    color: COLORS.black,
    marginTop: 2,
  },
  detailText: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.gray,
    marginTop: 2,
  },
  starImageStyle: {
    width: 10,
    height: 10,
    resizeMode: 'cover',
    marginRight: 2,
  },
  cartIcon: {
    height: 20,
    width: 20,
    marginLeft: 'auto',
    resizeMode: 'contain',
  },
  backColorView: {
    backgroundColor: COLORS.imgeBackcolor,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
  },
  likeView: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  prodectImage: {
    height: 140,
    width: '90%',
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  likeIcon: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
});
