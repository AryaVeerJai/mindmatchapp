import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Onboarding from './Onboarding';
import SignIn from './SignIn';
import CreateAccount from './CreateAccount';
import ForgotPassword from './ForgotPassword';
import EnterCode from './EnterCode';
import ChangePassword from './ChangePassword';


const StackComponent = createStackNavigator();

const SystemPage = () => {

    return (
        <>
            <StackComponent.Navigator
                initialRouteName={"Home"}
                detachInactiveScreens={true}
                screenOptions={{
                    headerShown: false,
                    cardStyle: { backgroundColor: "transparent" },
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                }}
                >
                <StackComponent.Screen name={"Home"} component={Home} />
                <StackComponent.Screen name={"Onboarding"} component={Onboarding} />
                <StackComponent.Screen name={"SignIn"} component={SignIn} />
                <StackComponent.Screen name={"CreateAccount"} component={CreateAccount} />
                <StackComponent.Screen name={"ForgotPassword"} component={ForgotPassword} />
                <StackComponent.Screen name={"EnterCode"} component={EnterCode} />
                <StackComponent.Screen name={"ChangePassword"} component={ChangePassword} />
            </StackComponent.Navigator>
        </>
    );

};


export default SystemPage;