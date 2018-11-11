import React from "react";
import { Font } from "expo";
import SocketIOClient from "socket.io-client";

import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import styles from "../styles";

// import vitalService from "../services/vitals";

const atheneURL = "https://4558692d.ngrok.io";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      heartRate: "00",
      barometer: "00",
      accelerometer: "00"
    };

    this.socket = SocketIOClient(atheneURL);
    this.socket.on("vitals", this.onReceivedVitals);
  }

  // componentDidMount = () => {
  //   await Font.loadAsync({
  //     "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf")
  //   });
  // };

  componentWillUnMount() {
    this.socket.emit("disconnect");
  }

  onReceivedVitals = vitals => {
    this.setState(vitals);
  };

  render() {
    const { navigate } = this.props.navigation;
    const { heartRate, barometer, accelerometer } = this.state;
    return (
      <ImageBackground
        style={styles.dash_cover}
        source={require("../assets/bg_gif.gif")}
      >
        <View style={styles.dash_container}>
          <Image
            source={require("../assets/splash_icon.png")}
            style={styles.splash_icon}
          />
          <View style={styles.dashboard_vitals_container}>
            <View style={styles.dashboard_vitals_flex}>
              <Text
                style={styles.dashboard_vitals_container_text}
                numberOfLines={1}
              >
                {heartRate}
              </Text>
              <Text style={styles.dashboard_vitals_container_text_description}>
                bpm
              </Text>
            </View>
            <View style={styles.dashboard_vitals_flex}>
              <Text style={styles.dashboard_vitals_container_text}>
                {barometer.substring(0, 4)}
              </Text>
              <Text style={styles.dashboard_vitals_container_text_description}>
                mb
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.dashboard_button}
            onPress={() => navigate("Owlet")}
          >
            <Text style={styles.dashboard_button_text}>Owlet</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
