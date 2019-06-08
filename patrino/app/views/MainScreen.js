import React, {Component} from "react";

import {View} from "react-native";

import {ThemeProvider} from "react-native-elements";

import MainHeader from "../components/MainHeader";
import TabsBar from "../components/TabsBar";

export default class MainScreen extends Component {
  render() {
    return(
      <ThemeProvider>
        <MainHeader />

        <TabsBar />
      </ThemeProvider>
    );
  }
}