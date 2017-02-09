import React, { Component } from 'react';

import { BackAndroid } from 'react-native';

export default class AndroidBackComponent extends Component {
    constructor( props ) {
        super( props );

        this.handleBack = this.handleBack.bind( this );
    }


    componentDidMount() {
        BackAndroid.addEventListener( 'hardwareBackPress', this.handleBack );
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener( 'hardwareBackPress', this.handleBack );
    }

    handleBack() {
        let {navigator} = this.props;
        if ( navigator && navigator.getCurrentRoutes().length > 1 ) {
            navigator.pop();
            return true;
        } else {
            return false;
        }
    }


}