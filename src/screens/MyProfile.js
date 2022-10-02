import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../assest/Themes';
import Headers from '../comman/Headers';
import GlobalButton from '../comman/GlobalButton';
import IMAGES from '../assest/IMAGES';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import GlobalInput from '../comman/GlobalInput';

export default function MyProfile({navigation}) {
  //   camera and gallery
  const [filePath, setFilePath] = useState({});

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        setFilePath(response.assets[0]);
        toggleModal(false);
      });
    }
  };

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      setFilePath(response.assets[0]);
      toggleModal(false);
    });
  };

  //   camera modall
  const [isVisible, setVisible] = useState(false);
  const toggleModal = () => {
    setVisible(!isVisible);
  };
  const ModalItem = ({navigation}) => {
    return (
      <View style={{flex: 1}}>
        <View style={styles.ModalView}>
          <TouchableOpacity onPress={() => chooseFile('photo')}>
            <Image source={IMAGES.gallery} style={styles.modalIcon} />
            <Text style={styles.cameraText}>Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.cameraText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => captureImage('photo')}>
            <Image source={IMAGES.camera} style={styles.modalIcon} />
            <Text style={styles.cameraText}>camera</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const [pname, setPname] = useState('');
  const [Relation, setRelation] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.mainContainor}>
      <Headers title="My Profile" menu onDrawer={() => navigation.goBack()} />
      <Modal isVisible={isVisible}>
        <ModalItem />
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginVertical: 30, marginHorizontal: 15}}>
          <View style={{marginBottom: 20}}>
            <View style={styles.dotView}>
              <Image
                source={!!filePath.uri ? {uri: filePath.uri} : IMAGES.userthumb}
                style={styles.userImage}
              />
            </View>
            <TouchableOpacity
              onPress={toggleModal}
              activeOpacity={0.6}
              style={styles.cameraView}>
              <Image source={IMAGES.cameraGreen} style={styles.cameraIcon} />
            </TouchableOpacity>
          </View>

          <Text style={styles.heading}>Parent/Guardian Name</Text>
          <GlobalInput
            type="email"
            icon={IMAGES.userIcon}
            placeHolder="Glenn Maxwell"
            value={pname}
            onChangeText={v => {
              setPname(v);
            }}
          />

          <Text style={styles.heading}>Relation with Child</Text>
          <GlobalInput
            type="email"
            icon={IMAGES.child}
            placeHolder="Son"
            value={Relation}
            onChangeText={v => {
              setRelation(v);
            }}
          />

          <Text style={styles.heading}>Email id</Text>
          <GlobalInput
            type="email"
            icon={IMAGES.email}
            placeHolder="johnsmith@mailinator.com"
            keyboardType="email-address"
            value={email}
            onChangeText={v => {
              setEmail(v);
            }}
          />

          <Text style={styles.heading}>Phone Number</Text>
          <GlobalInput
            type="email"
            icon={IMAGES.phone}
            placeHolder="+99 99899 88888"
            keyboardType="numeric"
            value={number}
            onChangeText={v => {
              setNumber(v);
            }}
          />
        </View>
      </ScrollView>
      <GlobalButton Title="UPDATE PROFILE" buttonStyle={{flex: 0}} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainor: {
    flex: 1,
    backgroundColor: COLORS.backColor,
  },
  dotView: {
    borderWidth: 1,
    borderColor: COLORS.lightGreen,
    borderStyle: 'dashed',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 130,
    alignSelf: 'center',
  },
  userImage: {
    height: 130,
    width: 130,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  cameraView: {
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
  },
  ModalView: {
    backgroundColor: COLORS.lightGreen,
    height: 100,
    position: 'absolute',
    width: '100%',
    bottom: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  modalIcon: {
    height: 30,
    width: 30,
    alignSelf: 'center',
    tintColor: COLORS.white,
  },
  cameraText: {
    fontSize: 14,
    color: COLORS.white,
    fontWeight: '500',
  },
  cameraIcon: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 10,
    marginTop: 25,
    fontWeight: '400',
    color: COLORS.gray,
  },
});
