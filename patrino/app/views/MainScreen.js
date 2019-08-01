import React, {Component} from "react";

import {View} from "react-native";

import {ThemeProvider} from "react-native-elements";

import MainHeader from "../components/MainHeader";
import TabsBar from "../components/TabsBar";

export default class MainScreen extends Component {
  /*Eliminando header padrão*/
  static navigationOptions = {
    header: null
  };

  render() {
    return(
      <ThemeProvider>
        <MainHeader navigation={this.props.navigation}/>

        <TabsBar navigation={this.props.navigation}/>
      </ThemeProvider>
    );
  }
}
