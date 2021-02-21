import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator, createSwitchNavigator} from 'react-navigation-tabs';

import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';

export default class App extends Component {
    render(){
        return(
            <View style = {{flex:1}}>
                <AppContainer/>
            </View>
        )
    }
}

var tabNavigator = createBottomTabNavigator({
    WriteStoryScreen: WriteStoryScreen,
    ReadStoryScreen: ReadStoryScreen
})

var switchNavigator = createSwitchNavigator({
    TabNavigator: {screen: tabNavigator}
})

const AppContainer = createAppContainer(switchNavigator);