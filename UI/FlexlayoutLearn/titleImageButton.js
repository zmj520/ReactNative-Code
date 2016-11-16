/**
 * Created by zmj on 16/7/8.
 */


import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

var TitleImageButton = React.createClass({
    render:function()
    {
        
        return(
            <View style={[{paddingTop: 10, paddingBottom: 5,borderRightWidth:this.props.borderW, borderColor:'#DCD7CD', flex: 1}, styles.row]}>
                <View style={[{flex:2, },styles.column]}>
                    <Text style={[styles.red, styles.font20, styles.horizontalCenter]}>{this.props.title}</Text>
                    <Text style={[styles.gray, styles.font14]}>{this.props.subTilte}</Text>
                </View>
                <Image style={[{flex:1,},]} source={{uri: this.props.imageUrl}}></Image>
            </View>
        );
    },

    
});
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    horizontalCenter: {
        alignItems: 'center',
    },
    selfCenter: {
        alignSelf: 'center'
    },
    font20: {
        fontSize: 20,
    },
    font14: {
        fontSize: 14,
    },
    green: {
        color:'#55A44B',
        fontWeight: '900',
    },
    gray: {
        color:'#CFCFCF',
        fontWeight: '900',
    },
    red: {
        color:'#FF3F0D',
    fontWeight: '900',

},

});
export default TitleImageButton;