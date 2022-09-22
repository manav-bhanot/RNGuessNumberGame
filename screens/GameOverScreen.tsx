/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Title from '../components/ui/Title';

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER !!!</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/gameOver.png')}></Image>
      </View>
      <View>
        <Text>Moves summary</Text>
        <Text>Your phone needed X rounds to guess the number Y</Text>
      </View>
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
});

