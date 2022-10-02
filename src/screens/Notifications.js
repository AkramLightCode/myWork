import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../assest/Themes';
import IMAGES from '../assest/IMAGES';
import Headers from '../comman/Headers';

export default function Notifications({navigation}) {
  const [Data, setData] = useState([
    {text: 'Status Bar', active: true},
    {text: 'On Lock Screen', active: false},
    {text: 'Pop Ups', active: false},
    {text: 'Weekly Digest', active: true},
  ]);

  return (
    <View style={{flex: 1, backgroundColor: COLORS.backColor}}>
      <Headers title="Notifications" menu onDrawer={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{paddingBottom: 30}}>
          <Image source={IMAGES.alert} style={styles.ballIcon} />

          <FlatList
            data={Data}
            renderItem={({item, index}) => {
              return (
                <View>
                  <View style={styles.view}>
                    <Text style={styles.text}>{item.text}</Text>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={() => {
                        var data = [...Data];
                        data.map((item, i) => {
                          if (index == i) {
                            if (item.active == false) {
                              item.active = true;
                            } else if (item.active == true) {
                              item.active = false;
                            }
                          }
                        });
                        setData(data);
                      }}
                      style={[
                        styles.switch,
                        {
                          backgroundColor:
                            item.active == true
                              ? COLORS.lightGreen
                              : COLORS.backColor,
                        },
                      ]}>
                      <Image
                        source={IMAGES.uncheckRound}
                        style={{height: 18, width: 18, resizeMode: 'contain'}}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.rectengal} />
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
  ballIcon: {
    alignSelf: 'center',
    height: 130,
    width: 130,
    resizeMode: 'contain',
    marginTop: 10,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  rectengal: {
    height: 0.5,
    backgroundColor: COLORS.backColor,
    elevation: 0.5,
  },
  switch: {
    height: 26,
    width: 52,
    justifyContent: 'center',
    borderRadius: 20,
    paddingHorizontal: 5,
    alignItems: 'flex-end',
    elevation:1
  },
  text: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.black,
    marginLeft: 10,
  },
});
