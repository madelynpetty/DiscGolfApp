import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import { COLORS } from '../ColorConsts';
import {AppBar} from "@react-native-material/core";

type Props = {
  setAppView: (v: any) => void;
}

function Suggest ({setAppView}: Props) {
  return (
    <View>
      <AppBar 
        style={styles.appBar}
        title={'SUGGESTIONS'}
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
      <Text>TBD</Text>
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

export default Suggest;
