/**
 * Created by zmj on 16/7/11.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,

} from 'react-native';

var Shop = React.createClass({
    render: function () {
        return (
            <View style={[styles.childBeCenter,{marginTop:64}]}>
                <Text>
                    购物车内容
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

export default Shop;