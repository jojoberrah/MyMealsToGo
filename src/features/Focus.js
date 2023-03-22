import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/colors';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ( {addSubject }) => {
  const [subject, setSubject] = useState('d');
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.TextInput}
          onChanbgeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addSubject(subject)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  TextInput: {
    flex: 1,
    marginRight: 10,
  },
  inputContainer: {
   // paddingTop: 50,
    //paddingRight: 20,
   // paddingBottom: 50,
    paddingLeft: 25,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
