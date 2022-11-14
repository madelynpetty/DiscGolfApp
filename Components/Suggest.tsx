import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';

type Props = {
  setAppView: (v: any) => void;
}

function Suggest ({setAppView}: Props) {
  return (
    <View>
      <Pressable onPress={() => setAppView('DEFAULT')}>
        <Text style={styles.heading}>BACK</Text>
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

export default Suggest;
