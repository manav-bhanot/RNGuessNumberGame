/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useEffect} from 'react';
import {Alert, FlatList, StyleSheet, Text, View, useWindowDimensions} from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import GuessLogItem from '../components/game/GuessLogItem';

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

  const windowDimension = useWindowDimensions();

  const [guessedNumber, setGuessedNumber] = useState(initialGuess);

  const [guessRoundsArray, setGuessRoundsArray] = useState([initialGuess]);

  // The code in this effect is executed only when there is a change in the dependencies.
  useEffect(() => {
    if (guessedNumber === props.userPickedNumber) {
      // Call a function in App.js so as to change the state and hide the game screen and load the game over screen
      props.onGameOver(guessRoundsArray.length);
    }
  }, [props.userPickedNumber, props.onGameOver, guessedNumber]);

  // Adding an empty array of dependencies in useEffect => that this effect will only execute when
  // this GameScreen component is executed the very first time and there will not be any executions
  // of this effect when this componennt reloads because of some state change.
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
    setGuessRoundsArray(prevGuessRoundsArray => [newGuess, ...prevGuessRoundsArray]);
  };

  let content = (
    <>
      <NumberContainer>{guessedNumber}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>
          Higher or Lower ?
        </InstructionText>
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
    </>
  );

  if (windowDimension.width > 500) {
    content = (
      <>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNewNumber.bind(this, 'lower')}>
              Guess Lower
            </PrimaryButton>
          </View>
          <NumberContainer>{guessedNumber}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={guessNewNumber.bind(this, 'higher')}>
              Guess Higher
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.listContainer}>
        {/* {guessRoundsArray.map(guessRound => (
          <Text key={guessRound}>{guessRound}</Text>
        ))} */}
        <FlatList
          data={guessRoundsArray}
          renderItem={itemData => (
            <GuessLogItem
              roundNumber={guessRoundsArray.length - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={item => item}
        />
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
  listContainer: {
    flex: 1,
    padding: 16,
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
