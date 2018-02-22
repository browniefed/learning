import React, { Component } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";

const BOX_DIM = 50;

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Animated.View style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: BOX_DIM,
    width: BOX_DIM,
    backgroundColor: "tomato",
  },
});
