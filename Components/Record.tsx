import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

type Props = {
  setAppView: (v: any) => void;
}

function Record ({setAppView}: Props) {
  const [position, setPosition] = React.useState<any>(null);
  const [error, setError] = React.useState<string | null>(null);

  Geolocation.getCurrentPosition(
    (pos) => {
      setPosition(pos);
      const crd = pos.coords;
    
      console.log('Your current position is:');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
      console.log(`More or less ${crd.accuracy} meters.`);
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
      <Pressable onPress={() => setAppView('DEFAULT')}>
        <Text style={styles.heading}>BACK</Text>
      </Pressable>
      <Text>
        Please allow location services on this app for this functionality
      </Text>;
      <Text>{error}</Text>
    </>;
  }
  
  if (!position && !error) {
    return <>
      <Pressable onPress={() => setAppView('DEFAULT')}>
        <Text style={styles.heading}>BACK</Text>
      </Pressable>
      <Text>Loading...</Text>
    </>;
  }

  return (
    <View>
      <Pressable onPress={() => setAppView('DEFAULT')}>
        <Text style={styles.heading}>BACK</Text>
      </Pressable>
      <Text>{position.coords.latitude}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 14,
  }
});

export default Record;
