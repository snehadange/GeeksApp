import React from 'react';
import { View,Text } from 'react-native';
import {WebView} from 'react-native-webview'

export default class Hoblist extends React.Component{
    render(){
        return(
           
                <WebView source={{ uri: 'https://hoblist.com' }} />

            
        )
    }
}