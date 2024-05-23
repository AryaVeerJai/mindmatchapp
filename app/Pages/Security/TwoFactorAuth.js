import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Switch, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS } from '../../constants/theme';
import Header from '../../layout/Header';

const TwoFactorAuth = () => {
    const theme = useTheme();
    const {colors} = theme;
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <Header title={'Two factor authentication'} leftIcon={'back'}/>
            <ScrollView>
                <View style={GlobalStyleSheet.container}>
                    <View style={{
                        flexDirection:'row',
                        alignItems:'center',
                    }}>
                        <Text style={{...FONTS.h6,flex:1,color:colors.title}}>Two factor authentication</Text>

                        <Switch
                            trackColor={{ false: "#767577", true: COLORS.primayLight }}
                            thumbColor={isEnabled ? COLORS.primary : "#f4f3f4"}
                            ios_backgroundColor={theme.dark ? "rgba(255,255,255,.1)" : "#eee"}
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />

                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default TwoFactorAuth;