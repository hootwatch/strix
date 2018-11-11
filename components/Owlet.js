import React from "react";
import moment from "moment";
import { View, Image, ImageBackground, Text, ScrollView } from "react-native";

import styles from "../styles";

import userService from "../services/user";

export default class Owlet extends React.Component {
  state = {
    vitals: [{ heartRate: "102", time: "10:58:33 pm", barometer: "1023" }],
    user: { name: "", pic: "" }
  };
  componentDidMount = async () => {
    try {
      const profile = await userService.read();

      this.setState({ vitals: profile.vitals, user: profile.user });
    } catch (e) {
      console.log(e);
    }
  };

  renderVitals = vitals =>
    vitals.map((v, i) => (
      <View style={styles.owlet_vital_container} key={i}>
        <Text style={styles.owlet_vital_container_text_white}>
          {v.heartRate} bpm
        </Text>
        <Text style={styles.owlet_vital_container_text_yellow}>
          {moment(v.time).format("MMMM Do YYYY, h:mm:ss a")}
        </Text>
        <Text style={styles.owlet_vital_container_text_white}>
          {v.barometer.substring(0, 4)} mb
        </Text>
      </View>
    ));

  render() {
    const { vitals, user } = this.state;

    return (
      <ImageBackground
        style={styles.dash_cover}
        source={require("../assets/bg_gif.gif")}
      >
        <View style={styles.dash_container}>
          <Image
            source={{
              uri: user.pic
                ? user.pic
                : "https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg"
            }}
            style={styles.user_icon}
          />

          <ScrollView>
            <View style={styles.owlet_container}>
              {this.renderVitals(vitals)}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    );
  }
}
