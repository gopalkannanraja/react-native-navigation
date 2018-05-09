import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import { FontAwesome } from '@expo/vector-icons';

const AppNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
    },
    About: {
        screen: About
    },
    Contact: {
        screen: Contact
    }
}, {
    initialRouteName: 'Home',
    tabBarOption: {
        activeTintColor: 'green',
        inactiveTintColor: 'grey'
    },
    navigationOptions: ({navigation}) => ({
        // title: 'Navigation App',
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state
            // if(routeName === 'Home') {
            //     return <FontAwesome name='home' size={25} color={`${focused ? 'red': 'grey'}`} />
            // }
            if(routeName === 'Home') {
                return <FontAwesome name='home' size={25} color={tintColor} />
            }
            if(routeName === 'About') {
                return <FontAwesome name='user' size={25} color={tintColor} />
            }
            if(routeName === 'Contact') {
                return <FontAwesome name='envelope' size={25} color={tintColor} />
            }
        },
        headerStyle:{
            backgroundColor: 'lightblue'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: 'green'
        }
    })
});

// const AppNavigator = createStackNavigator({
//     Home: {
//         screen: Home,
//     },
//     About: {
//         screen: About
//     },
//     Contact: {
//         screen: Contact
//     }
// }, {
//     initialRouteName: 'Home',
//     navigationOptions: {
//         title: 'Navigation App',
//         headerStyle:{
//             backgroundColor: 'lightblue'
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//             color: 'green'
//         }
//     }
// });

export default AppNavigator;