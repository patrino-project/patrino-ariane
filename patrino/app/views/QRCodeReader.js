'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  View,
  Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default class QRCodeReader extends Component {
  static navigationOptions = {
    header: null
  };

  onSuccess(e) {
    const URL = "http://35.202.173.125";
    const navigation = this.props.navigation.state.params.navigation;

    console.log(e.data);

    return fetch(URL + '/bottles/' + e.data, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        const item = responseJson[0];
        navigation.navigate("BottleView", {item})

      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Nenhum frasco encontrado!");

      });

  }

  render() {
    return (
      <QRCodeScanner
        onRead={this.onSuccess.bind(this)}

      />
    );
  }
}
