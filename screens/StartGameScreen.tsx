/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import {StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import React, { useState } from 'react';

function StartGameScreen() {

  const [enteredNumber, setEnteredNumber] = useState('');

  const numberInputHandler = (enteredText: any) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    console.log(enteredNumber);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center', // Position elements along the main axis which by default is column (top to bottom). Default flex direction in RN is COLUMN
    alignItems: 'center', // Default value is stretch. Positions elements in the cross axis which is OPPOSITE of the main axis
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#4e0329',
    borderRadius: 8,

    elevation: 4, // ANDROID ONLY property to add shadow behind the component on which this style is applied.

    // IOS only properties of adding shadow behind a component
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  numberInput: {
    height: 50,
    width: 38,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
