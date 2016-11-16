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

import TitleImageButton from './titleImageButton.js'

class HelloWorld extends Component {
  render() {
    return (
      <View style={[styles.column]}>
          <View style={[styles.part_one, styles.height160]}>
              <View style={[styles.part_one_left, ]}>
                  <Text style={[styles.font14, styles.marTop20, styles.marLeft10,styles.green]}>我们约吧</Text>
                  <Text style={[styles.font10, styles.marTop15, styles.marLeft10, ]}>恋爱嫁人好朋友</Text>
                  <Image style={[styles.marTop10, styles.height80]} source={{uri: 'http://p0.meituan.net/mmc/fe4d2e89827aa829e12e2557ded363a112289.png'}}></Image>
              </View>
              <View style={[styles.part_one_right, styles.column, ]}>
                  <View style={[styles.row,{flex:1, }]}>
                      <View style={[{flex:1}, styles.childBeCenter]}>
                          <Text style={[styles.font14, styles.marTop20, styles.red]}>低价超值</Text>
                          <Text style={[styles.font10, styles.marTop15, {color:'black'}]}>十元惠生活</Text>
                      </View>
                      <View style={[{flex:1, alignItems: 'flex-start'}, ]}>
                          <Image style={[styles.hanbao, {marginTop: 15}]} source={{uri: 'http://p0.meituan.net/mmc/a06d0c5c0a972e784345b2d648b034ec9710.jpg'}}></Image>
                      </View>
                  </View>
                  <View style={[styles.row, styles.borderColor,{flex: 1, borderTopWidth: 1, }]}>
                      <View style={[styles.borderColor, {flex:1, borderRightWidth: 1, }, ]}>
                          <Text style={[styles.font14, styles.marTop10, styles.marLeft10, styles.pink]}>聚餐宴请</Text>
                          <Text style={[styles.font14, styles.marTop10, styles.marLeft10]}>朋友家人常聚聚</Text>
                          <Image style={[styles.yanqing, styles.selfCenter, ]} source={{uri: 'http://p1.meituan.net/mmc/08615b8ae15d03c44cc5eb9bda381cb212714.png'}}></Image>
                      </View>
                      <View style={[{flex:1, }, ]}>
                          <Text style={[styles.font14, styles.marTop10, styles.marLeft10, styles.orange]}>名店抢购</Text>
                          <Text style={[styles.font10, styles.marTop10, styles.marLeft10]}>{'还有\n12分:06秒'}</Text>
                      </View>
                  </View>
              </View>
          </View>

          <View style={[{height: 220,paddingLeft: 10,paddingRight: 10,}, styles.part_two]}>
              <View style={[styles.part_two_1, styles.row , {flex: 1}]}>
                  <View style={[styles.column, {flex: 1,paddingTop: 10}]}>
                      <Text style={[styles.font20, styles.red, ]}>一元吃大餐</Text>
                      <Text style={[styles.font14, {color: 'gray'}]}>新用户专享</Text>
                  </View>
                  <Image style={[{flex: 1,marginRight: 20},]} source={{uri: 'http://p1.meituan.net/280.0/groupop/7f8208b653aa51d2175848168c28aa0b23269.jpg'}}></Image>
              </View>
              <View style={[styles.part_two_2, styles.row, {flex: 1}]}>
                  <TitleImageButton title='撸串狂欢节'
                                    borderW={2}
                                    subTilte='烧烤6.6元起'
                                    imageUrl='http://p1.meituan.net/280.0/groupop/fd8484743cbeb9c751a00e07573c3df319183.png'>
                  </TitleImageButton>
                  <TitleImageButton title='毕业旅行'

                                    subTilte='选好酒店才安心'
                                    imageUrl='http://p0.meituan.net/280.0/groupop/ba4422451254f23e117dedb4c6c865fc10596.jpg'>
                  </TitleImageButton>
              </View>
              <View style={[styles.part_two_2, styles.row, {flex: 1}]}>
                  <TitleImageButton title='0元餐来袭'
                                    borderW={2}
                                    subTilte='免费吃喝玩乐购'
                                    imageUrl='http://p0.meituan.net/280.0/groupop/6bf3e31d75559df76d50b2d18630a7c726908.png'>
                  </TitleImageButton>
                  <TitleImageButton title='热门团购'
                                    subTilte='大家都在买什么'
                                    imageUrl='http://p1.meituan.net/mmc/a616a48152a895ddb34ca45bd97bbc9d13050.png'>
                  </TitleImageButton>
              </View>
          </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    part_one: {
        flexDirection: 'row',
        borderColor: '#DCD7CD',
        borderBottomWidth: 10,
    },
    part_one_left: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#DCD7CD',
    },
    part_one_right: {
        flex: 2,
        borderWidth: 1,
        borderColor: '#DCD7CD',

    },
    part_two: {
        flexDirection: 'column',
        borderColor: '#DCD7CD',
        borderBottomWidth: 10,

    },
    part_two_1: {
        flexDirection: 'row',
        borderColor: '#DCD7CD',
        borderBottomWidth: 1,

    },
    part_two_2: {
        flexDirection: 'row',
        borderColor: '#DCD7CD',
        borderBottomWidth: 1,

    },
    height160: {
        height: 160,
    },
    height80: {
        height: 80,
    },
    font20: {
        fontSize: 20,
    },
    font14: {
        fontSize: 14,
    },
    font10: {
        fontSize: 10,
    },
    marTop20: {
        marginTop: 20,
    },
    marTop15: {
        marginTop: 15,
    },
    marTop10: {
        marginTop: 10,
    },
    marLeft10: {
        marginLeft: 10,
    },
    green: {
        color:'#55A44B',
        fontWeight: '900',
    },
    red: {
        color:'#FF3F0D',
        fontWeight: '900',

    },
    orange: {
        color: '#FF8601',
        fontWeight: '900',
    },
    pink: {
        color:'#F742AB',
        fontWeight: '900',
    },
    borderColor: {
        borderColor: '#DCD7CD'
    },
    hanbao:{
        height:55,
        width:55
    },
    yanqing: {
        height: 25,
        width: 25,
    },
    selfCenter: {
        alignSelf: 'center'
    },
    horizontalCenter: {
        alignItems: 'center',
    },
    verticalCenter: {
        justifyContent: 'center',
    },
    childBeCenter: {
        justifyContent: 'center',
        alignItems: 'center',
    }

});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
