import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Contact extends React.Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 30}}>Contact</Text>
                <Text></Text>
                <View>
                    <Button title="Home" onPress={() => {}} />
                    <Text></Text>
                    <Button title="About" onPress={() => {}} />
                    {/* <Text>{this.props.navigation.params.}</Text> */}
                </View>
            </View>
        );
    }
}

export default Contact;
