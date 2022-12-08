import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
  View,
  Text,
  Pressable,
} from 'react-native';
import { COLORS } from './Constants';
import Default from './Components/Default';
import EditDiscs from './Components/EditDiscs';
import Record from './Components/Record';
import Results from './Components/Results';
import Suggest from './Components/Suggest';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export type ScreenView = 'DEFAULT' | 'RECORD' | 'EDIT' | 'RESULTS' | 'SUGGEST' | 'TBD';

const App = () => {
  const [view, setView] = React.useState<ScreenView>('DEFAULT');

  React.useEffect(() => {
    // here to reset view whenever app is opened
    setView('DEFAULT');
  }, []);
  
  if (view === 'DEFAULT') {
    return (
      <SafeAreaView style={styles.topContainer}>
        <StatusBar
          backgroundColor={COLORS.LIGHT_GRAY}
          hidden={false}
          barStyle='light-content'
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.bottomContainer}>
              <Default setView={setView} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  if (view === 'RECORD') {
    return (
      <SafeAreaView style={styles.topContainer}>
        <StatusBar
          backgroundColor={COLORS.LIGHT_GRAY}
          hidden={false}
          barStyle='light-content'
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.bottomContainer}>
            <Record setAppView={setView} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (view === 'EDIT')  {
    return (
      <SafeAreaView style={styles.topContainer}>
        <StatusBar
          backgroundColor={COLORS.LIGHT_GRAY}
          hidden={false}
          barStyle='light-content'
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.bottomContainer}>
            <EditDiscs setAppView={setView} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (view === 'RESULTS') {
    return (
      <SafeAreaView style={styles.topContainer}>
        <StatusBar
          backgroundColor={COLORS.LIGHT_GRAY}
          hidden={false}
          barStyle='light-content'
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.bottomContainer}>
            <Results setAppView={setView} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (view === 'SUGGEST') {
    return (
      <SafeAreaView style={styles.topContainer}>
        <StatusBar
          backgroundColor={COLORS.LIGHT_GRAY}
          hidden={false}
          barStyle='light-content'
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.bottomContainer}>
            <Suggest setAppView={setView} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (view === 'TBD') {
    return (
      <SafeAreaView style={styles.topContainer}>
        <StatusBar
          backgroundColor={COLORS.LIGHT_GRAY}
          hidden={false}
          barStyle='light-content'
        />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.bottomContainer}>
            <Pressable onPress={() => setView('DEFAULT')}>
              <Text>Back</Text>
            </Pressable>
            <Text>Not implemented</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
  
};

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: COLORS.TEXT_WHITE,
  }
});

export default App;
