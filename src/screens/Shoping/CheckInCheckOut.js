import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../assest/Themes';
import Headers from '../../comman/Headers';
import IMAGES from '../../assest/IMAGES';
import GlobalButton from '../../comman/GlobalButton';

export default function CheckInCheckOut({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.backColor}}>
      <Headers
        title="Check In/Checkout"
        ellipse
        menu
        onDrawer={() => navigation.goBack()}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={IMAGES.checkInImage} style={styles.Image} />
        <View style={{marginHorizontal: 15, flex: 1}}>
          <Text style={styles.text}>
            Currently checked out from all my Kidz Academy{'\n'}Last check-in
            was at
            <Text style={{color: COLORS.lightGreen}}> 6.30am 9/18/2020</Text>
          </Text>
          <GlobalButton
            Title="Check In"
            buttonStyle={{marginTop: 20, height: 45}}
          />
          <GlobalButton
            Title="Check Out"
            buttonStyle={{
              marginTop: 20,
              height: 45,
              backgroundColor: COLORS.red,
            }}
            onClick={() => navigation.navigate('TabNavigation')}
          />
          <Image source={IMAGES.checkOutImage} style={styles.Image} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Image: {
    width: '100%',
    height: 250,
    resizeMode: 'contain',
    marginTop: 30,
    flex: 1,
  },
  text: {
    textAlign: 'center',
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '500',
    lineHeight: 20,
    marginTop: 20,
  },
});
