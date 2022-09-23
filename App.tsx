/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import React, { useState } from 'react';
import {StyleSheet, View, ImageBackground, SafeAreaView, StatusBar} from 'react-native';
import Colors from './constants/Colors';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
// import {LinearGradient} from 'react-native-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  const [userNumber, setUserNumber] = useState(null);
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const pickedNumberHandler = (pickedNumber: any) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };

  const gameOverHandler = (totalRounds: any) => {
    setGameIsOver(true);
    setGuessRounds(totalRounds);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGameIsOver(true);
    setGuessRounds(0);
  };
  
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  // Switch over to display game screen once the user has entered a number.
  if (userNumber) {
    screen = <GameScreen userPickedNumber={userNumber} onGameOver={gameOverHandler} />;
  }

  // If the state of the app changes i.e. game is over, then render the game over screen
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        userPickedNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.rootScreen}>
        <ImageBackground
          source={require('./assets/images/background.png')}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
          style={styles.imageBackgroundView}>
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: Colors.accent500,
    flex: 1,
  },
  imageBackgroundView: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
