import React, {Component} from "react";

import {Text} from "react-native";

import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from "./Home";
import News from "./News";
import Giver from "./Giver";

export default class TabsBar extends Component {
  constructor(props) {
      super(props);

      this.state = {
        "selectedTab": "home"
      };
  }

  render() {
    return(
      <TabNavigator>
          <TabNavigator.Item
            title="Início"
            selected={this.state.selectedTab === 'home'}
            onPress={() => this.setState({selectedTab: 'home'})}
            renderIcon={() => <Icon name="home" />}
            renderSelectedIcon={() => <Icon name="home" />}
            selectedTitleStyle={{color: "#3496f0"}}
          >
            <Home />
          </TabNavigator.Item>

          <TabNavigator.Item
            title="Doadoras"
            selected={this.state.selectedTab === 'giver'}
            onPress={() => this.setState({selectedTab: 'giver'})}
            renderIcon={() => <Icon name="home" />}
            renderSelectedIcon={() => <Icon name="home" />}
            selectedTitleStyle={{color: "#3496f0"}}
          >
            <Giver navigation={this.props.navigation} />
          </TabNavigator.Item>

          <TabNavigator.Item
            title="Notícias"
            selected={this.state.selectedTab === 'news'}
            onPress={() => this.setState({selectedTab: 'news'})}
            renderIcon={() => <Icon name="user" />}
            renderSelectedIcon={() => <Icon name="user" />}
            selectedTitleStyle={{color: "#3496f0"}}
          >
            <News />
          </TabNavigator.Item>
        </TabNavigator>

    );
  }
}
