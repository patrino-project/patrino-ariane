import React, {Component} from "react";

import {FlatList} from "react-native";

import {ThemeProvider, Card, Text} from "react-native-elements";

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
      return(
        <ThemeProvider>
          <FlatList
           data={this.state.givers}
           keyExtractor={(item, index) => item.email}
           renderItem={({item}) => <Card
                                   >
                                     <Text
                                       style={{marginBottom: 10}}
                                       onPress={() => this.props.navigation.navigate("Question", {item})}
                                     >
                                       {item.name}
                                     </Text>
                                   </Card>}
         />

        </ThemeProvider>
      );
    }
}
