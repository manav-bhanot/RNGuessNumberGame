/* eslint-disable prettier/prettier */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Title(props: any) {
  return (
    <View>
      <Text style={styles.title}>{props.children}</Text>
    </View>
  );
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
});
