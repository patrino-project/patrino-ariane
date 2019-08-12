import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Alert,
  ScrollView,

} from "react-native";

import {Text, Button, Input} from "react-native-elements";

import AsyncStorage from '@react-native-community/async-storage';

export default class BottleView extends Component {
  /*Removendo header padrão*/
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);

    this.state = {
      "code": "",
      "name": "",
      "email": "",
      "password": "",
      "phone": "",
      "address": ""
    };
  }

  componentDidMount() {
    const bottle = this.props.navigation.state.params.item;

    this.setState({
      "code": bottle.code.toString(),
      "name": bottle.name,
      "email": bottle.email,
      "phone": bottle.phone,
      "address": bottle.address
    })
  }

  /*Registrando um novo usuário*/
  onRefuse() {
    var email = this.state.email;

    const URL = "http://35.202.173.125";

    return fetch(URL + '/requests', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          note:"",
          status: 2
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {

        this.props.navigation.navigate("MainScreen");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

          <Text>Código do Frasco</Text>
          <Input value={this.state.code} onChangeText={(code) => this.setState({code})} />

          <Text>Nome</Text>
          <Input value={this.state.name} onChangeText={(name) => this.setState({name})} />

          <Text>E-mail</Text>
          <Input value={this.state.email} onChangeText={(email) => this.setState({email})} />

          <Text>Telefone</Text>
          <Input value={this.state.phone} onChangeText={(phone) => this.setState({phone})} />

          <Text>Endereço</Text>
          <Input value={this.state.address} onChangeText={(address) => this.setState({address})} />

        </ScrollView>
      </View>
    );
  }
}

/*Criando stylesheet*/
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
