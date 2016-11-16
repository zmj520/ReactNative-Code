/**
 * Created by zmj on 16/7/11.
 */
import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight

} from 'react-native';


import {HomeSecondPage} from './HomeSecondPage';

var Home = React.createClass({
    _onForward: function () {
        this.props.navigator.push({
            title: 'second home page ',
            component: HomeSecondPage
        });
    },
    render: function () {
        return (
            <View style={[styles.childBeCenter,{marginTop:64}]}>
                <Text>
                    购物车内容
                </Text>
                <TouchableHighlight onPress={this._onForward}>
                    <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        );
    }
});
const styles = StyleSheet.create({
    childBeCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    }

});

export default Home;