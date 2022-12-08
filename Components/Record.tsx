import React from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {AppBar} from '@react-native-material/core';
import {COLORS} from '../Constants';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
// import Toast from 'react-native-simple-toast';
import Toast from 'react-native-root-toast';

type Props = {
  setAppView: (v: any) => void;
};

function Record({setAppView}: Props) {
  const [position, setPosition] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [recording, setRecording] = React.useState<boolean>(false);

  Geolocation.getCurrentPosition(
    pos => {
      setPosition(pos);
      // const crd = pos.coords;

      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    },
    err => {
      setError(`ERROR(${err.code}): ${err.message}`);
    },
  );

  Geolocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: 'always',
    locationProvider: 'auto',
  });

  const changeRecording = () => {
    // store coordinates
    setRecording(!recording);
    !recording
      ? Toast.show('Started a new activity', {
          duration: Toast.durations.SHORT,
        })
      : Toast.show('Finished recording', {
          duration: Toast.durations.SHORT,
        });
  };

  const setInterval = () => {
    // store coordinates
    Toast.show('Added new data point', {
      duration: Toast.durations.SHORT,
    });
  };

  if (error) {
    return (
      <>
        {/* maddie: ideally this back button would be a const so I don't have to paste it 3 times, but function isn't working */}
        <AppBar
          style={styles.appBar}
          title={'NEW ACTIVITY'}
          centerTitle={true}
          color={COLORS.LIGHT_GRAY}
          leading={
            <View style={styles.backContainer}>
              <Pressable onPress={() => setAppView('DEFAULT')}>
                <Image
                  style={[styles.back, {tintColor: COLORS.TEXT_WHITE}]}
                  source={require('../assets/images/back.png')}
                />
              </Pressable>
            </View>
          }
        />
        <Text>
          Please allow location services on this app for this functionality
        </Text>
        ;<Text>{error}</Text>
      </>
    );
  }

  if (!position && !error) {
    return (
      <>
        <AppBar
          style={styles.appBar}
          title={'NEW ACTIVITY'}
          centerTitle={true}
          color={COLORS.LIGHT_GRAY}
          leading={
            <View style={styles.backContainer}>
              <Pressable onPress={() => setAppView('DEFAULT')}>
                <Image
                  style={[styles.back, {tintColor: COLORS.TEXT_WHITE}]}
                  source={require('../assets/images/back.png')}
                />
              </Pressable>
            </View>
          }
        />
        <Text>Loading...</Text>
      </>
    );
  }

  return (
    <View>
      <AppBar
        style={styles.appBar}
        title={'NEW ACTIVITY'}
        centerTitle={true}
        color={COLORS.LIGHT_GRAY}
        leading={
          <View style={styles.backContainer}>
            <Pressable onPress={() => setAppView('DEFAULT')}>
              <Image
                style={[styles.back, {tintColor: COLORS.TEXT_WHITE}]}
                source={require('../assets/images/back.png')}
              />
            </Pressable>
          </View>
        }
      />
      <MapView
        style={styles.mapContainer}
        initialRegion={{
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }}
        />
      </MapView>
      {!recording ? (
        <Pressable style={styles.recordButton} onPress={changeRecording}>
          <Text style={styles.recordText}>
            {!recording ? 'Record' : 'Finish'}
          </Text>
        </Pressable>
      ) : (
        <View style={styles.buttons}>
          <Pressable
            style={[styles.recordButton, styles.otherButtons]}
            onPress={setInterval}>
            <Text style={styles.recordText}>Record Interval</Text>
          </Pressable>
          <Pressable
            style={[styles.recordButton, styles.otherButtons]}
            onPress={changeRecording}>
            <Text style={styles.recordText}>Finish</Text>
          </Pressable>
        </View>
      )}
      <Text style={styles.debug}>Debug statements...</Text>
      <Text>Your current latitude is {position.coords.latitude}</Text>
      <Text>Your current longitude is {position.coords.longitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  backContainer: {
    paddingLeft: 10,
  },
  appBar: {
    paddingBottom: 5,
  },
  back: {
    width: '20%',
    height: undefined,
    aspectRatio: 1,
  },
  mapContainer: {
    width: '95%',
    aspectRatio: 1.1,
    margin: 10,
    borderRadius: 30,
  },
  buttons: {
    flexDirection: 'row',
  },
  recordButton: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: COLORS.GREEN,
    borderRadius: 5,
  },
  otherButtons: {
    width: '45%',
  },
  recordText: {
    color: COLORS.TEXT_WHITE,
  },
  debug: {
    paddingTop: 150
  }
});

export default Record;
