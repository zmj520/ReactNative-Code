/**
 * Created by zmj on 16/7/11.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,

} from 'react-native';

var User = React.createClass({
    render: function () {
        return (
            <View style={[styles.childBeCenter,{marginTop:64}]}>
                <Text>
                    用户信息内容
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

export default User;