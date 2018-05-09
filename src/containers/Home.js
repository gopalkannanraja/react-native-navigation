import React from 'react';
import { ActivityIndicator, View, Text, StyleSheet, Button } from 'react-native';

class Home extends React.Component {
    render() {
        return (
            <View>
                <Text style={{fontSize: 30}}>Home</Text>
                <Text></Text>
                <View>
                    <Button title="About" onPress={() => this.props.navigation.navigate('About')} />
                    <Text></Text>
                    {/* <Button title="Contact" onPress={() => this.props.navigation.navigate('Contact', {name: 'fgdsgfg'})} /> */}
                    <Button title="Contact" onPress={() => this.props.navigation.navigate('Contact')} />
                </View>
            </View>
        );
    }
}

export default Home;
