import React, { Component } from "react";
import { PanResponder, StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  state = {
    inactive: true,
  };
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => {
        clearTimeout(this.timeout);

        this.setState(state => {
          if (state.inactive === false) return null;
          return {
            inactive: false,
          };
        });

        this.timeout = setTimeout(() => {
          this.setState({
            inactive: true,
          });
        }, 3000);
        return false;
      },
    });
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <View style={styles.container}>
        <View
          style={[styles.activity, this.state.inactive ? styles.inactive : styles.active]}
          {...this._panResponder.panHandlers}
        >
          <Text style={styles.text}>{this.state.inactive + ""}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  activity: {
    width: 200,
    height: 80,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  active: {
    backgroundColor: "tomato",
  },
  inactive: {
    backgroundColor: "black",
  },
  text: {
    color: "#FFF",
  },
});
