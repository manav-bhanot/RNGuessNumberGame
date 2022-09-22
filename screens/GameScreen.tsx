/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Title from '../components/Title';

// The initial random number guessed by the app.
  // We do not want the first random number which is guessed by app to be equal to what the user has picked
  const generateRandomBetween: any = (min: any, max: any, exclude: any) => {

    console.log(`Guessing an initial random number between ${min} and ${max} excluding ${exclude}`);
    const randomNum: Number = Math.floor(Math.random() * (max - min)) + min;

    if (randomNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    }

    return randomNum;
  };

function GameScreen(props: any) {

  const initialGuess = generateRandomBetween(0, 100, props.userPickedNumber);

  const [guessedNumber, setGuessedNumber] = useState(initialGuess);

  const guessNewNumber = () => {
    
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <View>
        <Text>{guessedNumber}</Text>
      </View>
      <View>
        <Text>Higher or Lower ?</Text>
        <Text>
          + Button to indicate that the actual number is HIGHER than the guessed
          number
        </Text>
        <Text>
          - Button to indicate that the actual number is LOWER than the guessed
          number
        </Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'yellow',
    textAlign: 'center',
    borderColor: 'yellow',
    borderWidth: 2,
  },
});

