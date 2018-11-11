import React from "react";
import { Font } from "expo";
import SocketIOClient from "socket.io-client";
import Pusher from "pusher-js/react-native";

import config from "../services/config";

import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import styles from "../styles";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { heartRate: 0, barometer: 0 };

    this.socket = new Pusher(config.PUSHER_KEY, {
      cluster: config.PUSHER_CLUSTER
    });
    this.channel = this.socket.subscribe("hoot");
    this.channel.bind("vitals", vitals => {
      this.setState({
        heartRate: vitals.heartRate,
        barometer: vitals.barometer
      });
    });
  }

   render() {
    const { navigate } = this.props.navigation;
    const { heartRate, barometer } = this.state;

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
                {barometer.toString().substring(0, 4)}
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
