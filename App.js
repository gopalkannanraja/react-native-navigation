import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import AppNavigator from './src/routes';

export default class App extends React.Component {
    render() {
        return (<AppNavigator />);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
