import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS} from '../assest/Themes';
import Headers from '../comman/Headers';
import IMAGES from '../assest/IMAGES';
import Modal from 'react-native-modal';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export default function Chat({navigation}) {
  const [msg, setmsg] = useState('');

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
        setFilePath(response);
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
      setFilePath(response);
      toggleModal(false);
    });
  };

  //   camera modall
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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

  return (
    <View style={styles.containor}>
      <Headers
        onDrawer={() => navigation.goBack()}
        title="Glenn Maxwell"
        ellipse
        menu
      />
      <Modal isVisible={isModalVisible}>
        <ModalItem />
      </Modal>

      <ScrollView>
        <View style={{margin: 15}}></View>
      </ScrollView>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Type your message..."
          placeholderTextColor={COLORS.gray}
          onChangeText={v => {
            setmsg(v);
          }}
          value={msg}
          style={styles.input}
        />
        <TouchableOpacity
          onPress={toggleModal}
          activeOpacity={0.6}
          style={{marginHorizontal: 10}}>
          <Image source={IMAGES.attachment} style={styles.attachment} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={IMAGES.send} style={styles.send} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containor: {
    flex: 1,
    backgroundColor: COLORS.backColor,
  },
  inputView: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: COLORS.white,
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    color: COLORS.black,
    fontSize: 12,
    fontWeight: '400',
  },
  attachment: {
    height: 15,
    width: 15,
    resizeMode: 'contain',
  },
  send: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
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
    fontWeight:'500'
  },
});
