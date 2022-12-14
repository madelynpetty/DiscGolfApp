import React from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppBar} from '@react-native-material/core';
import {COLORS} from '../Constants';

type Props = {
  setAppView: (v: any) => void;
};

type Tab = 'DRIVER' | 'MIDRANGE' | 'PUTTER';

function EditDiscs({setAppView}: Props) {
  const [error, setError] = React.useState<string | null>(null);
  const [discs, setDiscs] = React.useState([]);
  const [view, setView] = React.useState<Tab>('DRIVER');

  React.useEffect(() => {
    getData();
  }, [discs]);
  // AsyncStorage.clear();

  const storeData = async (value: string) => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      await AsyncStorage.setItem('0', value);
    } catch (e) {
      setError(`There was an error saving your disc(s): ${e}`);
    }
  };

  const getData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      let discList = [];

      for (const key in keys) {
        try {
          discList.push(await AsyncStorage.getItem(key));
        } catch (e) {
          setError(`There was an error retrieving your disc(s): ${e}`);
        }
      }

      console.log('list ' + discList[0] + discList[1]);
      // setDiscs(discList.filter(Boolean));
    } catch (e) {
      setError(`There was an error retrieving your disc(s): ${e}`);
      return;
    }
  };

  // const getKeys = async (): Promise<void | readonly string[]> => {
  //   try {
  //     return await AsyncStorage.getAllKeys()
  //   } catch(e) {
  //     setError(`There was an error retrieving your disc(s): ${e}`);
  //     return;
  //   }
  // }

  const DriverScreen = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <Image style={styles.card} source={require('../assets/images/discs/driver1.png')} />
          <Image style={styles.card} source={require('../assets/images/discs/driver2.png')} />
        </View>
        <View style={styles.container}>
          <Image style={styles.card} source={require('../assets/images/discs/driver3.png')} />
          <Image style={[styles.card, {tintColor: COLORS.TEXT_WHITE}]} source={require('../assets/images/discs/driver2.png')} />
        </View>
        <View style={styles.addNewDiscButton}>
          <Text style={styles.addNewDiscText}>Add new driver</Text>
        </View>

        {/* <Pressable onPress={() => storeData('test')}>
          <Text>Add new Driver</Text>
        </Pressable> */}
      </View>
    );
  };

  const MidrangeScreen = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <Image style={styles.card} source={require('../assets/images/discs/midrange1.png')} />
          <Image style={styles.card} source={require('../assets/images/discs/midrange2.png')} />
        </View>
        <View style={styles.addNewDiscButton}>
          <Text style={styles.addNewDiscText}>Add new midrange</Text>
        </View>     
      </View>
    );
  };

  const PutterScreen = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.container}>
          <Image style={styles.card} source={require('../assets/images/discs/putter1.png')} />
          <Image style={styles.card} source={require('../assets/images/discs/putter2.png')} />
        </View>
        <View style={styles.addNewDiscButton}>
          <Text style={styles.addNewDiscText}>Add new putter</Text>
        </View>
      </View>
    );
  };

  const Discs = () => {
    return (
      <View style={view === 'DRIVER' ? styles.header : styles.header2}>
        <Pressable style={view === 'DRIVER' ? [styles.thirdScreen, styles.activeTab] : styles.thirdScreen} onPress={() => setView('DRIVER')}>
          <Text style={styles.headerText}>Driver</Text>
        </Pressable>
        <Pressable style={view === 'MIDRANGE' ? [styles.thirdScreen, styles.activeTab] : styles.thirdScreen} onPress={() => setView('MIDRANGE')}>
          <Text style={styles.headerText}>Midrange</Text>
        </Pressable>
        <Pressable style={view === 'PUTTER' ?  [styles.thirdScreen, styles.activeTab] : styles.thirdScreen} onPress={() => setView('PUTTER')}>
          <Text style={styles.headerText}>Putter</Text>
        </Pressable>
      </View>
    )
  }

  if (error) {
    return (
      <View>
        <AppBar
          style={styles.appBar}
          title={'EDIT DISCS'}
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
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <AppBar
        style={styles.appBar}
        title={'Edit discs'}
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
      <Discs />
      {view === 'DRIVER' && <DriverScreen />}
      {view === 'MIDRANGE' && <MidrangeScreen />}
      {view === 'PUTTER' && <PutterScreen />}
      {/* <Pressable onPress={() => getData()}>
        <Text>test storage</Text>
      </Pressable> */}
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
  header: {
    paddingTop: 10,
    flexDirection: 'row',
    height: '8%',
    backgroundColor: COLORS.DARK_GRAY,
  },
  header2: {
    paddingTop: 10,
    flexDirection: 'row',
    height: '13%',
    backgroundColor: COLORS.DARK_GRAY,
  },
  thirdScreen: {
    width: '33.333%',
  },
  headerText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingBottom: 100,
  },
  activeTab: {
    borderBottomColor: COLORS.GREEN,
    borderBottomWidth: 3,
  },
  container: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    aspectRatio: 1,
    margin: 10,
  },
  card2: {
    flex: 1,
    aspectRatio: 1,
  },
  addNewDiscButton: {
    margin: 10,
    padding: 10,
    backgroundColor: COLORS.GREEN,
    borderRadius: 5,
  },
  addNewDiscText: {
    color: COLORS.TEXT_WHITE,
  }
});

export default EditDiscs;
