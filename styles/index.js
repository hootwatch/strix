import { StyleSheet } from "react-native";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  camera: {
    width: width,
    height: height,
    flex: 1
  },
  overlay: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "rgba(93, 0, 255,0.5)",
    justifyContent: "center",
    alignItems: "center"
  },
  splash_icon: {
    height: 90,
    width: 155
  }
});
