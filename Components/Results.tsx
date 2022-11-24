import React from 'react';
import {Text, View, StyleSheet, Pressable, FlatList, Image} from 'react-native';
import {COLORS} from '../ColorConsts';
import Result from './Result';
import {AppBar} from '@react-native-material/core';

// if iconify supports react native eventually:
// import {Icon} from '@iconify/react';
// import DiscGolfBasketIcon from '@iconify-icons/game-icons/disc-golf-basket';
// <Icon icon={'@iconify-icons/game-icons/disc-golf-basket'} />

type Props = {
  setAppView: (v: any) => void;
};

enum courses {
  empty = 'empty',
  davisTech = 'Davis Tech',
  freedomHills = 'Freedom Hills',
  weberStateUniversity = 'Weber State University',
  utahStateHospital = 'Utah State Hospital',
  slateCanyon = 'Slate Canyon',
  bicentennial = 'Bicentennial',
  universityOfUtah = 'University of Utah',
  utahValleyUniversity = 'Utah Valley University',
  harrisvilleCity = 'Harrisville City',
  millsPark = 'Mills Park',
}

function Results({setAppView}: Props) {
  const [resultView, setResultView] = React.useState<courses>(courses.empty);

  if (resultView === 'empty') {
    return (
      <View>
        <AppBar
          style={styles.appBar}
          title="Disc Golf Courses"
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
        <FlatList
          scrollEnabled={false}
          data={[
            {key: courses.davisTech},
            {key: courses.freedomHills},
            {key: courses.weberStateUniversity},
            {key: courses.utahStateHospital},
            {key: courses.slateCanyon},
            {key: courses.bicentennial},
            {key: courses.universityOfUtah},
            {key: courses.utahValleyUniversity},
            {key: courses.harrisvilleCity},
            {key: courses.millsPark},
          ]}
          renderItem={({item, index}) => (
            <Pressable
              style={index % 2 == 1 ? styles.row : styles.row2}
              onPress={() => setResultView(item.key)}>
              <Image
                style={styles.basketImage}
                source={require('../assets/images/basket.png')}
              />
              <Text style={styles.text}>{item.key}</Text>
              <Image
                style={styles.forwardsImage}
                source={require('../assets/images/forwards.png')}
              />
            </Pressable>
          )}
        />
      </View>
    );
  } else {
    return (
      <>
        <AppBar
          style={styles.appBar}
          title={resultView}
          centerTitle={true}
          color={COLORS.LIGHT_GRAY}
          leading={
            <View style={styles.backContainer}>
              <Pressable onPress={() => setResultView(courses.empty)}>
                <Image
                  style={[styles.back, {tintColor: COLORS.TEXT_WHITE}]}
                  source={require('../assets/images/back.png')}
                />
              </Pressable>
            </View>
          }
        />
        <Result course={resultView} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  backContainer: {
    paddingLeft: 10,
  },
  back: {
    width: '20%',
    height: undefined,
    aspectRatio: 1,
  },
  appBar: {
    paddingBottom: 5,
  },
  // a much better way to do row and row2 would be cx, just cx(row, row2) and leave
  // row2 with background color. I can't get rid of this duplication yet though because
  // cx is not downloading properly.
  row: {
    paddingLeft: 15,
    paddingTop: 12,
    paddingBottom: 12,
    // borderTopColor: COLORS.DARK_GRAY,
    // borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  row2: {
    paddingLeft: 15,
    paddingTop: 12,
    paddingBottom: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.LIGHTEST_GREEN,
  },
  basketImage: {
    width: '7%',
    height: undefined,
    aspectRatio: 1,
  },
  forwardsImage: {
    position: 'absolute',
    right: 0,
    marginRight: 10,
    width: '3%',
    height: undefined,
    aspectRatio: 1,
  },
  text: {
    paddingLeft: 10,
  },
});

export default Results;
