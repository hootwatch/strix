import { StyleSheet } from "react-native";
import { Font } from "expo";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

// Font.loadAsync({
//   "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf")
// });

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
    height: 180,
    width: 180
  },
  container: {
    // fontFamily: "Poppins-Bold",
    flex: 1,
    width: width,
    height: height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#212A49"
  },

  /* -------------------- */
  dashboard_vitals_container: {
    justifyContent: "center",
    // alignItems: "center"
  },
  dashboard_vitals_container_text: {
    fontSize: 120,
    color: "#FFF",
    fontWeight: "bold",
    marginRight: 15

  },
  dashboard_vitals_flex: {
    // flex: 1,
    flexDirection: "row"
  },
  dashboard_vitals_container_text_description: {
    fontSize: 30,
    color: "#EEAC46",
    fontWeight: "800",
    marginTop: 60,

  },

  dashboard_button: {
    minWidth: 200,
    maxWidth: 200,
    marginTop: 25,
    color: "#FFF",
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#EEAC46",
    alignItems: "center"
  },
  dashboard_button_text: {
    color: "#FFF",
    fontWeight: "900",
    padding: 10,
    fontSize: 23
  }
});
