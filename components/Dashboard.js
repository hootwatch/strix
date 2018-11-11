import React from "react";
import { Font } from "expo";
import SocketIOClient from "socket.io-client";

import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "../styles";

// import vitalService from "../services/vitals";

const atheneURL = "https://4558692d.ngrok.io";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { heartRate: "00", barometer: "00", accelerometer: "00" };

    this.socket = SocketIOClient(atheneURL);
    this.socket.on("vitals", this.onReceivedVitals);
  }

  // componentDidMount = () => {
  //   await Font.loadAsync({
  //     "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf")
  //   });
  // };

  // read = async () => {
  //   try {
  //     const vital = await vitalService.read();
  //     this.setState({ vital });
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  onReceivedVitals = vitals => {
    console.log(vitals);
    this.setState(vitals);
  };

  owlet = () => console.log("owlet");

  render() {
    const { heartRate, barometer, accelerometer } = this.state;
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/splash_icon.png")}
          style={styles.splash_icon}
        />
        <View style={styles.dashboard_vitals_container}>
          <View style={styles.dashboard_vitals_flex}>
            <Text style={styles.dashboard_vitals_container_text}>
              {heartRate}
            </Text>
            <Text style={styles.dashboard_vitals_container_text_description}>
              bpm
            </Text>
          </View>
          <View style={styles.dashboard_vitals_flex}>
            <Text style={styles.dashboard_vitals_container_text}>
              {barometer}
            </Text>
            <Text style={styles.dashboard_vitals_container_text_description}>
              Pa
            </Text>
          </View>
          <TouchableOpacity
            style={styles.dashboard_button}
            onPress={this.owlet}
          >
            <Text style={styles.dashboard_button_text}>Owlet</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
