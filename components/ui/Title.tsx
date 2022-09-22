/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
    borderWidth: 2,
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
