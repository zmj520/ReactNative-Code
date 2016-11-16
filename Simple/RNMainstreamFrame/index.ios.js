/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    NavigatorIOS,
    TabBarIOS,

} from 'react-native';

import Home from './app/Home/home'
import Classify from './app/Classify/classify'
import Choice from './app/Choice/choice'
import Shop from './app/Shop/shop'
import User from './app/User/user'


var HelloWorld = React.createClass({
    getInitialState: function() {
        return {
            selectedTab: 'home',
        };
    },

    renderContent: function(tabBarItemTitle, navTitle, icon, selectedIcon, selectedTabStr,component) {
    return (
        <TabBarIOS.Item
            title={tabBarItemTitle}
            icon={icon}
            selectedIcon={selectedIcon}
            renderAsOriginal
            selected={this.state.selectedTab === selectedTabStr}
            onPress={() => {
            this.setState({
                selectedTab: selectedTabStr,
                });
        } }>
            <NavigatorIOS
                barTintColor='#EE7600'
                titleTextColor='white'
                style={styles.navigator}
                initialRoute={{
                component: component,
                passProps: {
                },
                title: navTitle,
        }}/>
        </TabBarIOS.Item>
    );
},

render: function() {
    return (
        <TabBarIOS
            unselectedTintColor="gray"
            tintColor="#FF7F00"
            barTintColor="white">
            {this.renderContent('首页','我的首页',require('./image/icon_home.png'),
                require('./image/icon_home_pre.png'),'home',Home)}
            {this.renderContent('分类','分类搜索',require('./image/icon_classify.png'),
                require('./image/icon_classify_pre.png'),'classify',Classify)}
            {this.renderContent('拍卖','司法拍卖',require('./image/icon_choice.png'),
                require('./image/icon_choice_pre.png'),'choice',Choice)}
            {this.renderContent('购物车','我的购物车',require('./image/icon_Shop.png'),
                require('./image/icon_Shop_pre.png'),'shop',Shop)}
            {this.renderContent('我的','个人信息',require('./image/icon_user.png'),
                require('./image/icon_user_pre.png'),'user',User)}
        </TabBarIOS>
    );
},

});

var styles = StyleSheet.create({
    navigator: {
        flex: 1
    },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
