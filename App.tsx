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


import React from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
// import {LinearGradient} from 'react-native-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';

export default function App() {

  return (
    <View style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
        style={styles.imageBackgroundView}>
        <StartGameScreen />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: '#ddb52f',
    flex: 1,
  },
  imageBackgroundView: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  }
});
