import React, {Component} from "react";

import {View} from "react-native";

import {Button} from "react-native-elements";

export default class Home extends Component {

    render() {
      const navigation = this.props.navigation;

      return(
        <View>
          <Button
            onPress={() => this.props.navigation.navigate("QRCodeReader", {navigation})}
            title="Ler QR Code"
            />
        </View>
      );
    }
}
