import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Alert,
  TextInput,
  ScrollView
} from "react-native";

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

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Label>Nome</Label>
          <TextInput value={this.state.name} onChangeText={(name) => this.setState({name})} />

          <Label>E-mail</Label>
          <TextInput value={this.state.email} onChangeText={(email) => this.setState({email})} />

          <Label>Telefone</Label>
          <TextInput onChangeText={(phone) => this.setState({phone})} />

          <Label>Senha</Label>
          <TextInput onChangeText={(password) => this.setState({password})} />

          <Label>Endereço</Label>
          <TextInput onChangeText={(address) => this.setState({address})} />

          <Button success style={{ margin: 10 }}
            onPress={() => this.onRegisterPress()}
          >
            <Text>Cadastrar-se</Text>
          </Button>

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
