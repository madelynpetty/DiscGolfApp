import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar, // maddie: is this the heading thing? Or is it Header?
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from './Components/Default';
import EditDiscs from './Components/EditDiscs';
import Record from './Components/Record';
import Results from './Components/Results';
import Suggest from './Components/Suggest';

export type ScreenView = 'DEFAULT' | 'RECORD' | 'EDIT' | 'RESULTS' | 'SUGGEST';

const App = () => {
  const [view, setView] = React.useState<ScreenView>('DEFAULT');

  React.useEffect(() => {
    // here to reset view whenever app is opened
    setView('DEFAULT');
  }, []);
  
  if (view === 'DEFAULT') {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
              <Text>App.tsx</Text>
              <Card setView={setView} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  if (view === 'RECORD') {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Record setAppView={setView} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (view === 'EDIT')  {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <EditDiscs setAppView={setView} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (view === 'RESULTS') {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Results setAppView={setView} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  if (view === 'SUGGEST') {
    return (
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Suggest setAppView={setView} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
};

// const styles = StyleSheet.create({});

export default App;
