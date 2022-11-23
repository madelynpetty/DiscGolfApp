import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

type Props = {
}

function Result ({}: Props) {
  return (
    <View>
      <Pressable style={styles.card}>
        <Text style={styles.textHeading}>DAVIS APPLIED TECHNOLOGY COLLEGE COURSE</Text>
      </Pressable>
      <Text style={styles.text}>400 hits</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  card: {
    borderRadius: 20,
    justifyContent: 'center',
    padding: 20,
    margin: 5,
  },
  textHeading: {
    paddingLeft: 5,
    color: '#404040',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'center',
  },
  text: {
    // intentionally left blank (for now)
  }
});

export default Result;
