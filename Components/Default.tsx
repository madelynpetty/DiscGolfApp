import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import {COLORS} from '../ColorType';
// import ScreenView from '../App';

type Props = {
  setView: (v: any) => void; // maddie: fix this type
}

function Card ({setView}: Props) {
  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.card} onPress={() => setView('RECORD')}>
          <Text style={styles.text}>RECORD NEW ACTIVITY</Text>
        </Pressable>
        <Pressable style={styles.card} onPress={() => setView('EDIT')}>
          <Text style={styles.text}>EDIT DISCS</Text>
        </Pressable>
      </View>

      <View style={styles.container}>
        <Pressable style={styles.card} onPress={() => setView('RESULTS')}>
          <Text style={styles.text}>VIEW PREVIOUS RESULTS</Text>
        </Pressable>
        <Pressable style={styles.card} onPress={() => setView('SUGGEST')}>
          <Text style={styles.text}>SUGGEST NEW COURSE</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {    
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '95%',
    // padding: 5, // maddie: to make more spacing
  },
  card: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHT_GRAY,
    padding: 10,
    margin: 5,
  },
  text: {
    textAlign: 'center',
    color: COLORS.TEXT_WHITE,
    fontWeight: 'bold',
  },
});

export default Card;
