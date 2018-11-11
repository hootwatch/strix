import { createStackNavigator } from "react-navigation";

import Dashboard from "./components/Dashboard";
import Owlet from "./components/Owlet";

const App = createStackNavigator(
  {
    Dashboard: { screen: Dashboard },
    Owlet: { screen: Owlet }
  },
  {
    initialRouteName: "Owlet",
    headerMode: "none",
    navigationOptions: {
      swipeEnabled: true,
      gesturesEnabled: true
    }
  }
);

export default App;
