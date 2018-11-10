import { createStackNavigator } from "react-navigation";

import Splash from "./components/Splash";

const App = createStackNavigator(
  {
    Splash: { screen: Splash }
  },
  {
    initialRouteName: "Splash",
    headerMode: "none",
    navigationOptions: {
      swipeEnabled: false,
      gesturesEnabled: false
    }
  }
);

export default App;
