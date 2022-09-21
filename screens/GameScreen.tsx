/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      {/* GUESS */}
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
});

