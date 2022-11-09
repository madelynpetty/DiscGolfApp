import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar, // maddie: is this the heading thing? Or is it Header?
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from './Card/Card';

export type ScreenView = 'DEFAULT' | 'RECORD' | 'EDIT' | 'RESULTS' | 'SUGGEST';

const App = () => {
  // setView('DEFAULT')
  const [view, setView] = React.useState<ScreenView>('DEFAULT');
  
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
    return <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
            <Text>hi</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  }

  // maddie: implement other screens eventually
  return <Text>implement other screens</Text>
  
};

// const styles = StyleSheet.create({});

export default App;
