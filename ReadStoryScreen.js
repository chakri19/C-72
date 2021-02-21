import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View>
                 <Image
                  source = {require("../PRO+C70+Images/read.png")}
                  style = {{width: 200, height: 200}}
                />
                <Text>Read Story</Text>
            </View>
        )
    }
}