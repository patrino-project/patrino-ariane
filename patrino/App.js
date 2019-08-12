import React, {Component} from 'react';

import {
  StyleSheet,
  View
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

/*Importando componentes de telas*/
import LoginScreen from "./app/views/LoginScreen";
import MainScreen from "./app/views/MainScreen";
import ProfileScreen from "./app/views/ProfileScreen";
import RegisterScreen from "./app/views/RegisterScreen";
import QRCodeReader from "./app/views/QRCodeReader";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      "logging": false
    };
  }

  componentDidMount() {
    this.setLogging()

  }

  /*Eliminando header padrão*/
  static navigationOptions = {
    header: null
  };

  /*Definindo o valor de logging: true ou false*/
  async setLogging() {
    const value = await AsyncStorage.getItem('logging');

    this.setState({
      logging: value
    })
  };

  render() {
    if(this.state.logging == "true") {
      return (
        <View style={styles.container}>
          <MainScreen navigation={this.props.navigation} />

        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <LoginScreen navigation={this.props.navigation} />

        </View>
      );
    }
  }
}

const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      title: "Login"
    }
  },
  MainScreen: {
    screen: MainScreen,
    navigationOptions: {
      title: "MainScreen"
    }
  },
  ProfileScreen: {
    screen: ProfileScreen,
    navigationOptions: {
      title: "ProfileScreen"
    }
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      title: "RegisterScreen"
    }
  },

  QRCodeReader: {
    screen: QRCodeReader,
    navigationOptions: {
      title: "QRCodeReader"
    }
  },
});

export default createAppContainer(App);

/*Criando stylesheet*/
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
