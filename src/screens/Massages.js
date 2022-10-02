import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {COLORS} from '../assest/Themes';
import Headers from '../comman/Headers';
import IMAGES from '../assest/IMAGES';

export default function Massages({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.backColor}}>
      <Headers title="Messages" search bell="bell" menu  onDrawer={() =>navigation.goBack()}/>
      <ScrollView>
        <FlatList
          data={[
            {id: 1, active: true, unread: '1'},
            {id: 1, active: true, unread: '10'},
            {id: 1, active: false},
            {id: 1, active: false},
            {id: 1, active: false},
            {id: 1, active: false},
            {id: 1, active: false},
            {id: 1, active: false},
          ]}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.containor}
                activeOpacity={0.6}
                onPress={() => navigation.navigate('Chat')}>
                <Image source={IMAGES.ak} style={styles.user} />
                <View style={{flex: 1}}>
                  <View style={styles.comman}>
                    <Text style={styles.username}>Nick</Text>
                    <Text style={styles.time}>12.10 AM</Text>
                  </View>
                  <View style={styles.comman}>
                    <Text style={styles.msgtext}>Nick</Text>
                    <Text
                      style={[
                        styles.unread,
                        {
                          backgroundColor:
                            item.active == true ? COLORS.lightGreen : null,
                        },
                      ]}>
                      {item.unread}
                    </Text>
                  </View>
                  <View style={styles.elivetion} />
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  containor: {
    marginHorizontal: 15,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    height: 40,
    width: 40,
    borderRadius: 50,
    resizeMode: 'cover',
    marginRight: 15,
    justifyContent: 'space-between',
  },
  comman: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  username: {
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '500',
  },
  time: {
    fontSize: 10,
    fontWeight: '400',
    marginLeft: 'auto',
  },
  msgtext: {
    fontSize: 10,
    fontWeight: '400',
    marginTop: 5,
  },
  unread: {
    fontSize: 10,
    fontWeight: '400',
    borderRadius: 50,
    lineHeight: 15,
    marginTop: 5,
    marginLeft: 'auto',
    color: COLORS.white,
    paddingVertical: 1,
    paddingHorizontal: 5,
  },
  elivetion: {
    height: 0.5,
    marginTop: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: COLORS.imgeBackcolor,
  },
});
