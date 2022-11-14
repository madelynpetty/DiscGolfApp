import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  // AsyncStorage
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Props = {
  setAppView: (v: any) => void;
}

function EditDiscs ({setAppView}: Props) {
  const [error, setError] = React.useState<string | null>(null);
  const [discs, setDiscs] = React.useState([]);

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
  }

  const getData = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      console.log(keys);
      let discList = [];

      for (const key in keys) {
        try {
          discList.push(await AsyncStorage.getItem(key));
        } catch(e) {
          setError(`There was an error retrieving your disc(s): ${e}`);
        }
      }

      console.log("list " + discList[0] + discList[1]);
      // setDiscs(discList.filter(Boolean));
    } catch(e) {
      setError(`There was an error retrieving your disc(s): ${e}`);
      return;
    }
  }

  // const getKeys = async (): Promise<void | readonly string[]> => {
  //   try {
  //     return await AsyncStorage.getAllKeys()
  //   } catch(e) {
  //     setError(`There was an error retrieving your disc(s): ${e}`);
  //     return;
  //   }
  // }
  
  if (error) {
    return (
      <View>
      <Pressable onPress={() => setAppView('DEFAULT')}>
        <Text style={styles.heading}>BACK</Text>
      </Pressable>
      <Text>{error}</Text>
    </View>
    )
  }

  return (
    <View>
      <Pressable onPress={() => setAppView('DEFAULT')}>
        <Text style={styles.heading}>BACK</Text>
      </Pressable>
      <Pressable onPress={() => storeData('test')}>
        <Text>Add new disc</Text>
      </Pressable>
      <Pressable onPress={() => getData()}>
        <Text>test storage</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 14,
  }
});

export default EditDiscs;
