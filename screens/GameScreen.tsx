/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

// The initial random number guessed by the app.
// We do not want the first random number which is guessed by app to be equal to what the user has picked
const generateRandomBetween: any = (min: any, max: any, exclude: any) => {
  const randomNum: Number = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return randomNum;
};

let minBoundary = 0;
let maxBoundary = 100;

function GameScreen(this: any, props: any) {
  
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    props.userPickedNumber,
  );

  const [guessedNumber, setGuessedNumber] = useState(initialGuess);

  const guessNewNumber = (direction: string) => {
    // direction = higher if the number to be guessed needs to be higher than the previous guess
    // direction = lower if the number to be guessed needs to be lower than the previous guess => change max to previous guessed number

    if (
      (direction === 'lower' && guessedNumber < props.userPickedNumber) ||
      (direction === 'higher' && guessedNumber > props.userPickedNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = guessedNumber;
    } else {
      minBoundary = guessedNumber;
    }

    const newGuess = minBoundary + Math.floor((maxBoundary - minBoundary) / 2);
    setGuessedNumber(newGuess);

    if (newGuess === props.userPickedNumber) {
      console.log('Number is guessed. Game Over !!!');
    }
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <View>
        <Text>Higher or Lower ?</Text>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <PrimaryButton onPress={guessNewNumber.bind(this, 'lower')}>
            Guess Lower
          </PrimaryButton>
          <PrimaryButton onPress={guessNewNumber.bind(this, 'higher')}>
            Guess Higher
          </PrimaryButton>
        </View>
      </View>
      <View>
        <Text>Log The Guessed Rounds</Text>
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12, // To add some distance from device edges
  },
});
