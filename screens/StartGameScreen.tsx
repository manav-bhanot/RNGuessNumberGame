import {StyleSheet, TextInput, View} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import React from 'react';

function StartGameScreen() {

  return (
    <View style={styles.inputContainer}>
      <TextInput></TextInput>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
  }
})