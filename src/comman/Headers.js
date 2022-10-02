import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS, FONT} from '../assest/Themes';
import IMAGES from '../assest/IMAGES';

const Headers = ({
  type,
  menu,
  title,
  search,
  add,
  heart,
  bell,
  cart,
  Number,
  scan,
  ellipse,
  filter,
  clear,

  onClick,
  onDrawer,
}) => {
  return (
    <View style={styles.maincontainor}>
      <StatusBar backgroundColor={COLORS.lightGreen} translucent={false} />
      <View style={styles.containor}>
        <View style={styles.first}>
          {menu && (
            <TouchableOpacity onPress={onDrawer} activeOpacity={0.6}>
              <Image
                source={type !== 'Drawer' ? IMAGES.back : IMAGES.menu}
                style={type !== 'Drawer' ? styles.drawerIcon : styles.imgStyle}
              />
            </TouchableOpacity>
          )}

          {filter && <Text style={styles.text}>Filters</Text>}
        </View>

        <View style={styles.second}>
          <Text style={styles.text}>{title}</Text>
        </View>

        <View style={styles.therd}>
          <View style={{marginRight: 3}}>
            {search && (
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={IMAGES.search} style={styles.RightimgStyle} />
              </TouchableOpacity>
            )}
          </View>
          <View style={{marginRight: 5}}>
            {add && (
              <TouchableOpacity activeOpacity={0.6} onPress={onClick}>
                <Image source={IMAGES.add} style={styles.RightimgStyle} />
              </TouchableOpacity>
            )}

            {heart && (
              <TouchableOpacity activeOpacity={0.6}>
                <Image source={IMAGES.heart} style={styles.RightimgStyle} />
              </TouchableOpacity>
            )}
          </View>

          <View>
            {bell && (
              <TouchableOpacity
                style={{flexDirection: 'row'}}
                activeOpacity={0.6}>
                <Image
                  source={bell == 'bell' ? IMAGES.bell : IMAGES.cartHead}
                  style={styles.RightimgStyle}
                />
                <Text
                  style={
                    bell == 'bell'
                      ? styles.positionTextleft
                      : styles.positionTextright
                  }>
                  12
                </Text>
              </TouchableOpacity>
            )}
          </View>

          {cart && (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.commanText}>Stap :</Text>
              <Text style={styles.NumberText}>{Number}</Text>
              <Text style={styles.commanText}>/3</Text>
            </View>
          )}

          {scan && (
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={IMAGES.scan} style={styles.RightimgStyle} />
            </TouchableOpacity>
          )}
          {ellipse && (
            <TouchableOpacity activeOpacity={0.6}>
              <Image source={IMAGES.ellipse} style={styles.ellipse} />
            </TouchableOpacity>
          )}

          {clear && <Text style={styles.clearText}>CLEAR ALL</Text>}
        </View>
      </View>
    </View>
  );
};

export default Headers;

const styles = StyleSheet.create({
  maincontainor: {
    height: 40,
    backgroundColor: COLORS.lightGreen,
    justifyContent: 'flex-start',
  },

  first: {
    flexDirection: 'row',
    flex: 0.25,
  },
  imgStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  second: {
    flexDirection: 'row',
    flex: 0.5,
    justifyContent: 'center',
  },
  RightimgStyle: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
    marginLeft: 10,
    tintColor: COLORS.white,
  },
  text: {
    textAlignVertical: 'bottom',
    fontSize: 15,
    color: COLORS.white,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  flex: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  drawerIcon: {
    height: 18,
    width: 18,
    tintColor: COLORS.white,
    resizeMode: 'contain',
  },
  positionTextleft: {
    position: 'absolute',
    top: -4,
    left: 0,
    fontSize: 6,
    backgroundColor: COLORS.lightGreen,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 10,
    color: COLORS.white,
    elevation: 2,
  },
  containor: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 15,
  },
  therd: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 0.25,
    alignItems: 'center',
  },
  positionTextright: {
    position: 'absolute',
    top: -4,
    right: -10,
    fontSize: 6,
    backgroundColor: COLORS.lightGreen,
    paddingHorizontal: 4,
    paddingVertical: 1,
    borderRadius: 10,
    color: COLORS.white,
    elevation: 2,
  },
  commanText: {
    color: COLORS.white,
    fontSize: 10,
    fontWeight: 'normal',
  },
  NumberText: {
    fontSize: 15,
    marginLeft: 3,
    color: COLORS.white,
    fontWeight: 'normal',
  },
  ellipse: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  clearText: {
    fontSize: 10,
    color: COLORS.white,
    fontWeight:'400'
  },
});
