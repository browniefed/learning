import React, { Component } from "react";
import { StyleSheet, Text, View, Animated, Dimensions } from "react-native";

const BOX_DIM = 50;
const { width, height } = Dimensions.get("window");

export default class App extends Component {
  
  componentWillMount() {
    this.animation = new Animated.ValueXY(0);
  }
  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.animation.x, {
        toValue: width * 2,
        duration: 500
      }),
      Animated.timing(this.animation.y, {
        toValue: height * 2,
        duration: 500
      })
    ]).start()
  }
  
  
  render() {

    const widthRange = [0, width - BOX_DIM];
    const heightRange = [0, height - BOX_DIM];

    const xAnimation = this.animation.x.interpolate({
      inputRange: widthRange,
      outputRange: widthRange,
      extrapolate: "clamp",
    })

    const yAnimation = this.animation.y.interpolate({
      inputRange: heightRange,
      outputRange: heightRange,
      extrapolate: "clamp",
    })

    const moveStyle = {
      transform: [
        { translateX: xAnimation },
        { translateY: yAnimation }
      ]
    }
    return (
      <View style={styles.container}>
        <Animated.View style={[styles.box, moveStyle]} />
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
