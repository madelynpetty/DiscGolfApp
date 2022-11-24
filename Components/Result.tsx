import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import { COLORS } from '../ColorConsts';

type Props = {
  course: string;
}

function Result ({course}: Props) {
  return (
    <View>
      {/* eventually this will have data from the asyncStorage */}
      <Text style={styles.text}>400 hits</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  text: {
    paddingLeft: 10,
    paddingTop: 10,
  }
});

export default Result;
