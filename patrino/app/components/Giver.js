import React, {Component} from "react";

import {FlatList, Alert} from "react-native";

import {ThemeProvider, Card, Text, Button} from "react-native-elements";

export default class Giver extends Component {
    constructor(props) {
        super(props);

        this.state = {
          "givers": []
        };
    }

    componentDidMount() {
      this.loadGivers();

    }

    loadGivers() {
      const URL = "http://35.202.173.125";

      return fetch(URL + '/mothers', {
          method: 'GET'

        })
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);

            this.setState({
              "givers": responseJson.data
            });
        })
        .catch((error) => {
          console.error(error);
        });

    }

    render() {
      const navigation = this.props.navigation;
      return(
        <ThemeProvider>
          <FlatList
           data={this.state.givers}
           keyExtractor={(item, index) => item.email}
           renderItem={({item}) => <Card
                                   >
                                     <Text
                                       style={{marginBottom: 10}}
                                     >
                                       {item.name}
                                     </Text>
                                     <Button
                                       onPress={() => this.props.navigation.navigate("RegisterScreen", {item, navigation})}

                                       title="Visualizar"
                                     />
                                     <Button
                                       onPress={() => this.props.navigation.navigate("QRCodeReader", {item, navigation})}
                                       title="Novo Frasco"
                                       />
                                   </Card>}
         />

        </ThemeProvider>
      );
    }
}
