import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import CustomNavigation from './CustomNavigation';
import Likes from './Likes';
import Messages from './Messages';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const BottomNavigation = (props) => {
    return (
        <Tab.Navigator
            tabBar={props => <CustomNavigation {...props} />}
            screenOptions={{
                headerShown:false,
            }}
            initialRouteName="Change"
        >
            <Tab.Screen 
                name="Home"
                component={Home}

            />
            <Tab.Screen 
                name="Likes"
                component={Likes}
            />
            <Tab.Screen 
                name="Messages"
                component={Messages}
            />
            <Tab.Screen 
                name="Profile"
                component={Profile}
            />
        </Tab.Navigator>
    );
};


export default BottomNavigation;