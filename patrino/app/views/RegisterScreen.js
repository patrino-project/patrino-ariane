import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Alert,
  ScrollView,

} from "react-native";

import {Text, Button, Input} from "react-native-elements";

import AsyncStorage from '@react-native-community/async-storage';

export default class RegisterScreen extends Component {
  /*Removendo header padrão*/
  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);

    this.state = {
      "name": "",
      "email": "",
      "password": "",
      "phone": "",
      "address": ""
    };
  }

  componentDidMount() {
    const mother = this.props.navigation.state.params.item;

    this.setState({
      "name": mother.name,
      "email": mother.email
    })
  }

  /*Registrando um novo usuário*/
  onRegisterPress() {
    var name = this.state.name;
    var email = this.state.email;
    var password = this.state.password;
    var phone = this.state.phone;
    var address = this.state.address;

    const URL = "http://35.202.173.125";

    return fetch(URL + '/mothers', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          phone: phone,
          address: address
        }),
      })
      .then((response) => response.json())
      .then((responseJson) => {

        this.props.navigation.navigate("Login");
      })
      .catch((error) => {
        console.error(error);
      });
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
          <Text>Nome</Text>
          <Input value={this.state.name} onChangeText={(name) => this.setState({name})} />

          <Text>E-mail</Text>
          <Input value={this.state.email} onChangeText={(email) => this.setState({email})} />

          <Text>Telefone</Text>
          <Input onChangeText={(phone) => this.setState({phone})} />

          <Text>Senha</Text>
          <Input onChangeText={(password) => this.setState({password})} />

          <Text>Endereço</Text>
          <Input onChangeText={(address) => this.setState({address})} />

          <Button success style={{ margin: 10 }}
            onPress={() => this.onRefuse()}
            title="Recusar"

            />

            <Button success style={{ margin: 10 }}
              onPress={() => this.onRegisterPress()}
              title="Editar"

              />

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
