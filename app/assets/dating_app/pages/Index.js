import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import DateFilter from './DateFilter';
import ChatScreen from './ChatScreen';
import DrawerNavigation from './DrawerNavigation';
import Components from '../Screens/components';
import OnBoarding from './OnBoarding';

const StackComponent = createStackNavigator();

const Pages = () => {

    return (
        
        <StackComponent.Navigator
            initialRouteName={"OnBoarding"}
            detachInactiveScreens={true}
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: "transparent" },
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            }}
            >
            <StackComponent.Screen name={"OnBoarding"} component={OnBoarding} />
            <StackComponent.Screen name={"DrawerNavigation"} component={DrawerNavigation} />
            <StackComponent.Screen name={"DateFilter"} component={DateFilter} />
            <StackComponent.Screen name={"ChatScreen"} component={ChatScreen} />
            <StackComponent.Screen name={"Components"} component={Components} />
        </StackComponent.Navigator>
    );

};


export default Pages;