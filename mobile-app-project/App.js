import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Profile from "./screens/Profile.js";
import SettingGoal from "./screens/SettingGoal.js";
import SavingPage from "./screens/Saving.js";
import FirstPage from "./screens/FirstPage.js";

const RootStack = createStackNavigator(
  {
    Home: Profile,
    Setting: SettingGoal,
    Saving: SavingPage,
    First: FirstPage,
  },
  {
    initialRouteName: 'First',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
