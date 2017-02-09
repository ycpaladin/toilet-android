import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
} from 'react-native';

import AndroidBackComponent from './androidBackComponent';

export default class TWebView extends AndroidBackComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShowErrorPage: false,
    };
  }

  render() {
    //file:///android_asset/
    // let content = require()
    let {url, isMargin, isNearBy, isWeather, isLocal = false} = this.props;
    let source = isLocal ? url : { uri: url };

    let content = this.state.isShowErrorPage ? (<View style={styles.textView}>
      <Text style={styles.text}>不好意思,请检查网络连接情况或者报告错误</Text>
    </View>) : (
        <WebView
          style={[styles.container, { marginTop: this.state.isMargin || -20 }]}
          startInLoadingState={true}
          onError={this._loadError.bind(this)}
          source={source}
          renderError={this._renderError.bind(this)}>
        </WebView>
      );
    return (
      <View style={styles.container}>
        {content}
      </View>
    );
  }

  _loadError() {
    this.setState({
      isShowErrorPage: true
    });
  }


  _renderError() {
    console.log('error.................');
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 16,
    fontWeight: '300'
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

// module.exports = TWebView;