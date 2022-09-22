/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';

function GameOverScreen(props: any) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER !!!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/gameOver.png')}></Image>
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone took <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number <Text style={styles.highlight}>{props.userPickedNumber}</Text>
        </Text>
      </View>
      <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden', //make sure to hide the square and rectangular nature of container of the image
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlight: {
    fontWeight: 'bold',
    color: Colors.primary500,
  },
});

