import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Pressable} from 'react-native';
import {COLORS, COURSE_DATA} from '../Constants';

type Props = {
  course: string;
};

type CourseData = {
  throws: number;
  totalDistance: number;
  longestDistance: number;
  frequentDisc: string;
};

function Result({course}: Props) {
  const [data, setData] = React.useState<CourseData[] | null>(null);

  React.useEffect(() => {
    console.log('Useeffect called');
    console.log(course);

    const dataArray: CourseData[] = COURSE_DATA.filter(item => {
      console.log(item.courseName);
      console.log(item.courseName === course);
      return item.courseName === course;
    });
    setData(dataArray);
    console.log(dataArray);
  }, [course]);

  if (!data) {
    return <Text style={styles.errorText}>Loading....</Text>;
  }

  if (!data.length) {
    return (
      <Text style={styles.errorText}>
        You have not attempted this course yet.
      </Text>
    );
  }

  return (
    <View>
      {/* eventually this will have data from the asyncStorage */}
      {data.map(item => {
        return (
          <View style={styles.stats}>
            <Text style={styles.largeHeader}>Highlights:</Text>
            <Text style={styles.header}>Total distance travelled</Text>
            <Text style={styles.statText}>{item.totalDistance} miles</Text>

            <Text style={styles.header}>Most frequent disc</Text>
            <Text style={styles.statText}>{item.frequentDisc}</Text>

            <Text style={styles.header}>Total throws</Text>
            <Text style={styles.statText}>{item.throws}</Text>

            <Text style={styles.header}>Farthest distance thrown</Text>
            <Text style={styles.statText}>{item.longestDistance} feet</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  stats: {
    margin: 15,
    paddingLeft: 7.5,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: COLORS.DARK_GRAY,
    shadowColor: COLORS.TEXT_GRAY,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 100,
  },
  largeHeader: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop: 5,
  },
  header: {
    fontWeight: '600',
  },
  statText: {
    paddingBottom: 10,
  },
  errorText: {
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default Result;
