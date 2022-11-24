import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {AppBar} from "@react-native-material/core";
import { COLORS } from '../ColorConsts';

type Props = {
  setAppView: (v: any) => void;
}

function Record ({setAppView}: Props) {
  const [position, setPosition] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);

  Geolocation.getCurrentPosition(
    (pos) => {
      setPosition(pos);
      // const crd = pos.coords;
    
      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    }, 
    (err) =>  {
      setError(`ERROR(${err.code}): ${err.message}`);
    }
  );

  Geolocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: 'always',
    locationProvider: 'auto',
  });

  if (error) {
    return <>
      {/* maddie: ideally this back button would be a const so I don't have to paste it 3 times, but function isn't working */}
      <AppBar 
        style={styles.appBar}
        title={'NEW ACTIVITY'}
        centerTitle={true}
        color={COLORS.LIGHT_GRAY}
        leading={(
          <View style={styles.backContainer}>
            <Pressable onPress={() => setAppView('DEFAULT')}>
              <Image style={[styles.back, {tintColor: COLORS.TEXT_WHITE}]} source={require('../assets/images/back.png')} />
            </Pressable>
          </View>
        )}
      />
      <Text>
        Please allow location services on this app for this functionality
      </Text>;
      <Text>{error}</Text>
    </>;
  }
  
  if (!position && !error) {
    return <>
      <AppBar 
        style={styles.appBar}
        title={'NEW ACTIVITY'}
        centerTitle={true}
        color={COLORS.LIGHT_GRAY}
        leading={(
          <View style={styles.backContainer}>
            <Pressable onPress={() => setAppView('DEFAULT')}>
              <Image style={[styles.back, {tintColor: COLORS.TEXT_WHITE}]} source={require('../assets/images/back.png')} />
            </Pressable>
          </View>
        )}
      />
      <Text>Loading...</Text>
    </>;
  }

  return (
    <View>
      <AppBar 
        style={styles.appBar}
        title={'NEW ACTIVITY'}
        centerTitle={true}
        color={COLORS.LIGHT_GRAY}
        leading={(
          <View style={styles.backContainer}>
            <Pressable onPress={() => setAppView('DEFAULT')}>
              <Image style={[styles.back, {tintColor: COLORS.TEXT_WHITE}]} source={require('../assets/images/back.png')} />
            </Pressable>
          </View>
        )}
      />
      <Text>Your current latitude is {position.coords.latitude}</Text>
      <Text>Your current longitude is {position.coords.latitude}</Text>
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
});

export default Record;
