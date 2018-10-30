import React from "react";
import { HelloScreen, HomeScreen, MenuScreen, TestScreen } from "../Components";
import {
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

const Tab = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Test: { screen: TestScreen }
});

const Drawer = createDrawerNavigator(
  {
    TabScreen: {
      screen: Tab
    }
  },
  {
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",

    contentComponent: props => {
      // console.log(props);
      return <MenuScreen {...props} />;
    }
  }
);

const App = createStackNavigator({
  Drawer: { screen: Drawer },
  Hello: { screen: HelloScreen }
});

export default App;
