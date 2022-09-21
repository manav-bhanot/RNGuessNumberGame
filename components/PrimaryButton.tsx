import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

function PrimaryButton(props) {

  function pressHandler() {
    console.log("Button Presed");
  }

  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <Text>{props.children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
    elevation: 2,
  }
})
