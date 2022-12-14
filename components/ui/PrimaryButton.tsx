/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

function PrimaryButton(props: any) {
  
  const pressHandler = () => {
    props.onPress(); // This is basically executing the function assigned to onPress attribute of this button wherever it is used.
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
        android_ripple={{color: Colors.primaryWhite}}>
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
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: Colors.primaryWhite,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75, // opacity takes in values between 0 and 1. 0 => 0% opaque and 100% transparent and 1 => 100% opaque and 0% transparent
  },
});
