/* eslint-disable prettier/prettier */

import React from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

function Title(props: any) {
  return (
    <View style={styles.rootContainer}>
      <Text style={[styles.title, props.style]}>{props.children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  rootContainer: {
    borderColor: 'white',
    // borderWidth: Platform.OS === 'android' ?  2 : 0,
    borderWidth: Platform.select({ios: 0, android: 2}),
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 10,
    marginHorizontal: 64,
  },
});
