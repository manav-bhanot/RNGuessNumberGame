/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-trailing-spaces */

import React from 'react';
import {StyleSheet, View} from 'react-native';

function Card(props) {
  return <View style={styles.card}>{props.children}</View>;  
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center', // Position elements along the main axis which by default is column (top to bottom). Default flex direction in RN is COLUMN
    alignItems: 'center', // Default value is stretch. Positions elements in the cross axis which is OPPOSITE of the main axis
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#4e0329',
    borderRadius: 8,

    elevation: 4, // ANDROID ONLY property to add shadow behind the component on which this style is applied.

    // IOS only properties of adding shadow behind a component
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
