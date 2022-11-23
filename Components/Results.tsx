import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Pressable,
} from 'react-native';
import Result from './Result';

type Props = {
  setAppView: (v: any) => void;
}

type ResultView = 'RESULT' | 'RESULTS';

function Results ({setAppView}: Props) {
  const [resultView, setResultView] = React.useState<ResultView>('RESULTS');

  if (resultView === 'RESULTS') {
    return (
      <View>
        <Pressable onPress={() => setAppView('DEFAULT')}>
          <Text style={styles.back}>BACK</Text>
        </Pressable>
        <Pressable style={styles.card} onPress={() => setResultView('RESULT')}>
          <Text style={styles.text}>test</Text>
        </Pressable>
      </View>
    );
  }
  else {
    return (
      <>
        <Pressable onPress={() => setResultView('RESULTS')}>
            <Text style={styles.back}>BACK</Text>
          </Pressable>
        <Result  />
      </>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  card: {
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#404040',
    padding: 20,
    margin: 5,
  },
  text: {
    paddingLeft: 5,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Results;
