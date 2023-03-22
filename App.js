import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Focus } from './assets/src/features/Focus';
import Constants from 'expo-constants';
import { colors } from './assets/src/utils/colors';

export default function App() {
  let navn = 'It datastuen';
  const [currentSubject, setcurrentSubject] = useState(navn);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setcurrentSubject} />
      ) : (
        <View>
          <Text style={{ color: colors.white }}>
            {' '}
            I am going to render the timer for {currentSubject}
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? <StatusBar.currentHeigh/> : 0,
    backgroundColor: colors.darkBlue,
  },
});
