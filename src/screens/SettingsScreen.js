import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {COLORS} from '../assest/Themes';
import IMAGES from '../assest/IMAGES';
import Headers from '../comman/Headers';

const SettingsScreen = ({navigation}) => {
  const data = [
    {icon: IMAGES.user, text: 'Account', route: ''},
    {icon: IMAGES.bell, text: 'Notification', route: 'Notifications'},
    {icon: IMAGES.location, text: 'Location', route: ''},
    {icon: IMAGES.support, text: 'Support', route: ''},
    {icon: IMAGES.share, text: 'Share', route: ''},
    {icon: IMAGES.logout, text: 'Logout', route: 'Login'},
  ];

  const listItem = ({item}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => navigation.navigate(item.route)}
        style={styles.listContainor}>
        <View style={styles.comman}>
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <Image source={IMAGES.arrowGray} style={styles.arrow} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.mainContainor}>
      <Headers
        type={'Drawer'}
        title="Setting"
        menu
        onDrawer={() => navigation.toggleDrawer()}
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
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => navigation.navigate('MyProfile')}
                style={{marginLeft: 'auto'}}>
                <Image
                  source={IMAGES.edit}
                  style={{height: 20, width: 20, resizeMode: 'contain'}}
                />
              </TouchableOpacity>
            </View>
            <Image source={IMAGES.cloud} style={styles.cloudImg} />
          </View>
          <FlatList data={data} renderItem={listItem} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;

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
  lisText: {
    fontSize: 10,
    fontWeight: '500',
    color: COLORS.black,
    marginTop: 2,
  },
  listContainor: {
    marginHorizontal: 15,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.black,
    marginLeft: 10,
  },
  arrow: {
    height: 12,
    width: 12,
    resizeMode: 'contain',
  },
});
