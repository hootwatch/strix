import { StyleSheet } from "react-native";
import { Font } from "expo";

const Dimensions = require("Dimensions");
const { width, height } = Dimensions.get("window");

// Font.loadAsync({
//   "Poppins-Bold": require("../assets/fonts/Poppins/Poppins-Bold.ttf")
// });

export default StyleSheet.create({
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
  dash_container: {
    // fontFamily: "Poppins-Bold",
    flex: 1,
    width: width,
    height: height,
    // justifyContent: "center",
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "rgba(33, 42, 73,0.5)"
  },
  dash_cover: {
    flex: 1,
    resizeMode: "center",
    position: "absolute",
    width: width,
    height: height,
    justifyContent: "center"
  },

  /* -------------------- */
  dashboard_vitals_container: {
    justifyContent: "center"
    // alignItems: "center"
  },
  dashboard_vitals_container_text: {
    fontSize: 120,
    color: "#FFF",
    fontWeight: "bold",
    marginRight: 15,
    maxWidth: 280
  },
  dashboard_vitals_flex: {
    // flex: 1,
    flexDirection: "row"
  },
  dashboard_vitals_container_text_description: {
    fontSize: 30,
    color: "#EEAC46",
    fontWeight: "800",
    marginTop: 60
  },

  dashboard_button: {
    minWidth: 200,
    maxWidth: 200,
    marginTop: 25,
    color: "#FFF",
    borderRadius: 50,
    borderWidth: 4,
    borderColor: "#EEAC46",
    alignItems: "center"
  },
  dashboard_button_text: {
    color: "#FFF",
    fontWeight: "900",
    padding: 10,
    fontSize: 23
  },

  /* -------------------- */

  user_icon: {
    height: 110,
    width: 110,
    borderRadius: 55,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#EEAC46",
    borderWidth: 1,
    marginBottom: 20
  },

  owlet_container: {
    justifyContent: "center",
    alignItems: "center"
  },

  owlet_vital_container: {
    flexDirection: "row",
    // backgroundColor: "rgba(33, 42, 73,0.5)",
    borderRadius: 10,
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 5,
    width: width / 1.25
  },
  owlet_vital_container_text_white: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "500"
  },
  owlet_vital_container_text_yellow: {
    color: "#EEAC46",
    fontSize: 20,
    fontWeight: "700"
  }
});
