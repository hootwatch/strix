import { createStackNavigator } from "react-navigation";

import Splash from "./components/Splash";
import Dashboard from "./components/Dashboard";

const App = createStackNavigator(
  {
    Splash: { screen: Splash },
    Dashboard: { screen: Dashboard }
  },
  {
    initialRouteName: "Dashboard",
    headerMode: "none",
    navigationOptions: {
      swipeEnabled: false,
      gesturesEnabled: false
    }
  }
);

export default App;
