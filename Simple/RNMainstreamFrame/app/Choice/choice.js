/**
 * Created by zmj on 16/7/11.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,

} from 'react-native';

var Choice = React.createClass({
    render: function () {
        return (
            <View style={[styles.childBeCenter,{marginTop:64}]}>
                <Text>
                    司法拍卖内容
                </Text>
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

export default Choice;