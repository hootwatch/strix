import React from "react";
import { Camera } from "expo";
import { View, Image } from "react-native";

import styles from "../styles";

export default class Splash extends React.Component {
  render() {
    return (
      <Camera
        ref={ref => (this.camera = ref)}
        style={styles.camera}
        type="back"
      >
        <View style={styles.overlay}>
          <Image
            source={require("../assets/splash_icon.png")}
            style={styles.splash_icon}
          />
        </View>
      </Camera>
    );
  }
}
