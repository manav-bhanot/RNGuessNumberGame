/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

// The initial random number guessed by the app.
// We do not want the first random number which is guessed by app to be equal to what the user has picked
const generateRandomBetween: any = (min: any, max: any, exclude: any) => {
  const randomNum: Number = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return randomNum;
};

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen(this: any, props: any) {
  
  const initialGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    props.userPickedNumber,
  );

  const [guessedNumber, setGuessedNumber] = useState(initialGuess);

  useEffect(() => {
    if (guessedNumber === props.userPickedNumber) {
      // Call a function in App.js so as to change the state and hide the game screen and load the game over screen
      props.onGameOver();
    }
  }, [props.userPickedNumber, props.onGameOver, guessedNumber]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

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
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower ?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNewNumber.bind(this, 'lower')}>
              Guess Lower
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNewNumber.bind(this, 'higher')}>
              Guess Higher
            </PrimaryButton>
          </View>
        </View>
      </Card>
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
  instructionText: {
    marginBottom: 24,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
