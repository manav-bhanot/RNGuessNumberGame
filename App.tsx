/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */


import React from "react";
import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello World !!!</Text>
      <StatusBar barStyle={"default"}></StatusBar>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})