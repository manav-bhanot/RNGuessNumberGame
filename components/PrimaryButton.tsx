/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

function PrimaryButton(props: any) {
  
  const pressHandler = () => {
    console.log('Button Presed');
    props.onPress(); // This is basically executing the function confirmInputHandler defined in StartGameScreen
  };

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={pressData =>
          pressData.pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{color: 'white'}}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.75, // opacity takes in values between 0 and 1. 0 => 0% opaque and 100% transparent and 1 => 100% opaque and 0% transparent
  }
})
