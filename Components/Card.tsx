import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {COLORS} from '../ColorConsts';
// import ScreenView from '../App';

type Props = {
  name: string,
}

function Default({name}: Props) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{name.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // width: '95%',
  },
  card: {
    flex: 1,
    aspectRatio: 1,
    // borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_GRAY,
    // padding: 10,
    // margin: 5,
  },
  text: {
    textAlign: 'center',
    color: COLORS.TEXT_WHITE,
    fontWeight: 'bold',
  },
});

export default Default;
