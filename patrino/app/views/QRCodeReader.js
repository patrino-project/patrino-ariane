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
    title: 'Voltar',
    headerStyle: {
      backgroundColor: "#1e88e5",
      elevation: null,
      color: "#fff"
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  onSuccess(e) {
    const URL = "http://10.16.150.18:3000";
    const mother = this.props.navigation.state.params.item;

    console.log(mother);

    return fetch(URL + '/bottles', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mother: mother.code
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
        Alert.alert("Novo frasco anexado com sucesso!");

      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Novo frasco não anexado!");

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
