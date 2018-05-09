import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class About extends React.Component {
    // static navigationOptions = {
    //     title: 'About'
    // };

    render() {
        return (
            <View>
                <Text style={{fontSize: 30}}>About</Text>
                <Text></Text>
                <View>
                    <Button title="Home" onPress={() => {}} />
                    <Text></Text>
                    <Button title="Contact" onPress={() => {}} />
                </View>
            </View>
        );
    }
}

export default About;
