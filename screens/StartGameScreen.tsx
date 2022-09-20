import {TextInput, View} from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import React from 'react';

function StartGameScreen() {

  return (
    <View>
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
      <TextInput></TextInput>
    </View>
  );
}

export default StartGameScreen;