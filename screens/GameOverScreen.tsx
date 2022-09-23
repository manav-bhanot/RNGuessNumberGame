/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import React from 'react';
import {Image, StyleSheet, Text, View, Dimensions, useWindowDimensions, ScrollView} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import Colors from '../constants/Colors';

function GameOverScreen(props: any) {

  const windowDimensions = useWindowDimensions();

  const windowHeight = windowDimensions.height;
  const windowWidth = windowDimensions.width;

  let imageSize = 300;

  if (windowWidth < 380) {
    imageSize = 150;
  }

  if (windowHeight < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER !!!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require('../assets/images/gameOver.png')}
          />
        </View>
        <View>
          <Text style={styles.summaryText}>
            Your phone took
            <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
            guess the number.
            <Text style={styles.highlight}>{props.userPickedNumber}</Text>
          </Text>
        </View>
        <PrimaryButton onPress={props.onStartNewGame}>
          Start New Game
        </PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 150 : 300,
    // height: deviceWidth < 380 ? 150 : 300,
    // borderRadius: deviceWidth < 380 ? 75 : 150,
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

