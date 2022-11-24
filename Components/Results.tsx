import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList,
} from 'react-native';
import { COLORS } from '../ColorConsts';
import Result from './Result';

type Props = {
  setAppView: (v: any) => void;
}

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

function Results ({setAppView}: Props) {
  const [resultView, setResultView] = React.useState<courses>(courses.empty);

  if (resultView === 'empty') {
    return (
      <View>
        <Pressable onPress={() => setAppView('DEFAULT')}>
          <Text style={styles.back}>BACK</Text>
        </Pressable>
        <Text style={styles.textHeading}>Disc Golf Courses</Text>
        <FlatList
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
          renderItem={({item}) => 
            <Pressable style={styles.rowItem} onPress={() => setResultView(item.key)}>
              <Text>{item.key}</Text>
            </Pressable>
          }
        />
      </View>  
    );
  }
  else {
    return (
      <>
        <Pressable onPress={() => setResultView(courses.empty)}>
            <Text style={styles.back}>BACK</Text>
          </Pressable>
        <Result course={resultView} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom: 10,
  },
  rowItem: {
    margin: 2,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#dedede',
    borderBottomWidth: 1,
  },
  textHeading: {
    paddingLeft: 10,
    color: COLORS.DARK_GREEN,
    fontWeight: 'bold',
    fontSize: 18,
  },
  text: {
    paddingLeft: 5,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Results;
