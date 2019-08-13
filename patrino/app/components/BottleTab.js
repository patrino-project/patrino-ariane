import React, {Component} from "react";

import {FlatList, Alert} from "react-native";

import {ThemeProvider, Card, Text, Button} from "react-native-elements";

export default class BottleTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
          "bottles": []
        };
    }

    componentDidMount() {
      this.loadBottles();

    }

    loadBottles() {
      const URL = "http://35.202.173.125";

      return fetch(URL + '/bottles', {
          method: 'GET'

        })
        .then((response) => response.json())
        .then((responseJson) => {
            let bottles = responseJson;

            for(i in bottles) {
              let date = new Date(bottles[i].createdAt);
              let date1 = new Date(bottles[i].deadline);

              bottles[i].createdAt = date.getDay() + "/" + date.getMonth() + "/" + date.getYear();
              bottles[i].deadline = date.getDay() + "/" + date.getMonth() + "/" + date.getYear();
            }

            this.setState({
              "bottles": bottles
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
           data={this.state.bottles}
           keyExtractor={(item, index) => item.email}
           renderItem={({item}) => <Card
                                   >
                                     <Text
                                       style={{marginBottom: 10}}
                                     >
                                       Recebido em {item.createdAt}
                                     </Text>

                                     <Text
                                       style={{marginBottom: 10}}
                                     >
                                       Valido até {item.deadline}
                                     </Text>
                                     <Button
                                       onPress={() => this.props.navigation.navigate("BottleView", {item, navigation})}

                                       title="Visualizar"
                                     />

                                   </Card>}
         />

        </ThemeProvider>
      );
    }
}
