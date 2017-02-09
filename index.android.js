/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import ToiletPage from './android_views/toiletPage';
import Read from './android_views/read';
import Setting from './android_views/setting';
import Weather from './android_views/weather';

export default class AwesomeProject extends Component {

  constructor( props ) {
    super( props );
    this.state = { selectedTab: 'home' }
  }

  render() {
    return (
      <TabNavigator>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="卫生间"
          renderIcon={() => <Image style={styles.icon} source={require( './images/1.png' )} />}
          onPress={() => this.setState( { selectedTab: 'home' })}>
          <View style={styles.container}>
            <ToiletPage ></ToiletPage>
          </View>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'read'}
          title="阅读"
          renderIcon={() => <Image style={styles.icon} source={require( './images/2.png' )} />}
          onPress={() => this.setState( { selectedTab: 'read' })}>
          <Read></Read>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'weather'}
          title="天气"
          renderIcon={() => <Image style={styles.icon} source={require( './images/3.png' )} />}
          onPress={() => this.setState( { selectedTab: 'weather' })}>
          <Weather></Weather>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'setting'}
          title="设置"
          renderIcon={() => <Image style={styles.icon} source={require( './images/4.png' )} />}
          onPress={() => this.setState( { selectedTab: 'setting' })}>
          <Setting></Setting>
        </TabNavigator.Item>
      </TabNavigator>
    );
  }

  // _renderView() {
  //   var view = null;
  //   switch ( this.state.selectedTab ) {
  //     case 'home':
  //       view = <ToiletPage ></ToiletPage>;
  //       break;
  //     case 'read':
  //       view = <Read></Read>;
  //       break;
  //     case 'setting':
  //       //view = <Setting></Setting>
  //       break;
  //     default:
  //       //view = <Weather></Weather>;
  //       break;
  //   }
  //   return view;
  // }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  icon: {
    width: 25,
    height: 25
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent( 'AwesomeProject', () => AwesomeProject );
