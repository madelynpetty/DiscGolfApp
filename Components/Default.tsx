import React from 'react';
import {Text, View, StyleSheet, Pressable, Image} from 'react-native';
import {COLORS} from '../Constants';
import {AppBar} from '@react-native-material/core';
// import ScreenView from '../App';

type Props = {
  setView: (v: any) => void; // maddie: fix this type
};

function Default({setView}: Props) {
  return (
    <>
      <AppBar
        style={styles.appBar}
        title="Disc Golf App"
        centerTitle={true}
        color={COLORS.LIGHT_GRAY}
      />

      <View style={styles.container}>
        <Pressable style={[styles.card, {backgroundColor: COLORS.TEXT_WHITE}]} onPress={() => setView('RECORD')}>
          <Text style={styles.text}>Record new activity</Text>
          <Image
            style={[styles.image, styles.recordImage, {tintColor: COLORS.GREEN}]}
            source={require('../assets/images/golfer.png')}
          />
        </Pressable>
        <Pressable style={[styles.card, {backgroundColor: COLORS.DARK_GRAY}]} onPress={() => setView('EDIT')}>
          <Text style={styles.text}>Edit discs</Text>
          <Image
            style={[styles.image, styles.discImage, {tintColor: COLORS.TEXT_GRAY}]}
            source={require('../assets/images/frisbee1.png')}
          />
        </Pressable>
      </View>

      <View style={styles.container}>
        <Pressable style={[styles.card, {backgroundColor: COLORS.LIGHT_GREEN}]} onPress={() => setView('RESULTS')}>
          <Text style={styles.text}>View previous results</Text>
          <Image
            style={[styles.image, styles.resultImage, {tintColor: COLORS.LIGHTEST_GREEN}]}
            source={require('../assets/images/basket.png')}
          />
        </Pressable>
        <Pressable style={[styles.card, {backgroundColor: COLORS.TEXT_WHITE}]} onPress={() => setView('SUGGEST')}>
          <Text style={styles.text}>Suggest new course</Text>
          <Image
            style={[styles.image, styles.cartImage, {tintColor: COLORS.GREEN}]}
            source={require('../assets/images/cart.png')}
          />
        </Pressable>
      </View>

      <View style={styles.container}>
        <Pressable style={[styles.card, {backgroundColor: COLORS.DARK_GRAY}]} onPress={() => setView('TBD')}>
          <Text style={styles.text}>Records</Text>
          <Image
            style={[styles.image, styles.trophyImage, {tintColor: COLORS.TEXT_GRAY}]}
            source={require('../assets/images/trophy.png')}
          />
        </Pressable>
        <Pressable style={[styles.card, {backgroundColor: COLORS.LIGHT_GREEN}]} onPress={() => setView('TBD')}>
          <Text style={styles.text}>News</Text>
          <Image
            style={[styles.image, styles.newsImage, {tintColor: COLORS.LIGHTEST_GREEN}]}
            source={require('../assets/images/news.png')}
          />
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    aspectRatio: 1,
    paddingTop: 5,
    paddingLeft: 5,
  },
  text: {
    color: COLORS.DARK_GREEN,
    fontSize: 16,
    margin: 5,
  },
  appBar: {
    paddingBottom: 5,
  },
  image: {
    position: "absolute", 
    bottom: 0, 
    right: 0,
    height: undefined,
    aspectRatio: 1,
  },
  recordImage: {
    marginBottom: -35,
    width: '75%',
  },
  discImage: {
    marginRight: 5,
    width: '50%',
  },
  cartImage: {
    marginRight: 5,
    width: '50%',
  },
  resultImage: {
    marginRight: -10,
    width: '50%',
  },
  trophyImage: {
    width: '42%',
  },
  newsImage: {
    marginRight: 5,
    width: '42%',
  }
});

export default Default;
