import React, {Component} from "react";

import {StyleSheet, View, TextInput, Alert} from "react-native";

import {ThemeProvider, Button } from "react-native-elements";

import AsyncStorage from '@react-native-community/async-storage';

export default class LoginScreen extends Component {
  /*Eliminando header padrão*/
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);

    this.state = {
      "email": "",
      "password": ""
    };
  }

  /*Definindo as credenciais do usuário*/
  async login(responseJson) {
    try {
      if(responseJson.message == "OK") {
        await AsyncStorage.setItem('code', "" + responseJson.code);
        await AsyncStorage.setItem('logging', "true");

        this.props.navigation.navigate("MainScreen");

      }
    } catch (error) {
      console.debug(error);
    }
  };

  async onLoginPress() {
    const email = this.state.email;
    const password = this.state.password;

    const URL = "http://35.202.173.125";

    return fetch(URL + '/attendants/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {
          if(responseJson.message == "OK") {
            this.login(responseJson);
          } else {
            Alert.alert("E-mail ou senha estão incorretos!");
          }
      })
      .catch((error) => {
        console.error(error);
      });

  }

  render() {
    return(
      <ThemeProvider style={styles.container}>
        <View style={styles.form}>
          <View style={styles.item}>
            <TextInput
              placeholder="E-mail"
              returnKeyType="next"
              onSubmitEditing={() => this.passwordInput.focus()}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(email) => this.setState({email})}
            />
          </View>

          <View style={styles.item}>
            <TextInput
              placeholder="Senha"
              returnKeyType="go"
              secureTextEntry
              autoCapitalize="none"
              ref={input => (this.passwordInput = input)}
              onChangeText={(password) => this.setState({password})}              />

          </View>

          <View style={styles.item}>
            <Button
              onPress={this.onLoginPress.bind(this)}
              style={styles.item}
              title="Entrar"
            />
          </View>
        </View>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  form: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    marginTop: 200
  },
  item: {
    marginTop: 10,
    marginBottom: 10,
  }
});
