import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { GlobalStyleSheet } from '../../../constants/StyleSheet';
import Header from '../../../layout/Header';
import ListStyle1 from '../../../components/list/ListStyle1';
import { COLORS, SIZES } from '../../../constants/theme';

const Home = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'System Pages'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <ListStyle1 
                                    onPress={() => props.navigation.navigate('Onboarding')}
                                    arrowRight 
                                    icon={<FontAwesome name={'square'} size={15} color={COLORS.red} />}
                                    title={'OnBoarding'}
                                    />
                                <ListStyle1 
                                    onPress={() => props.navigation.navigate('SignIn')}
                                    arrowRight 
                                    icon={<FontAwesome name={'lock'} size={18} color={COLORS.secondary} />}
                                    title={'Login'}
                                    />
                                <ListStyle1 
                                    onPress={() => props.navigation.navigate('CreateAccount')}
                                    arrowRight 
                                    icon={<FontAwesome5 name={'code'} size={13} color={COLORS.info} />}
                                    title={'Register'}
                                    />
                                <ListStyle1 
                                    onPress={() => props.navigation.navigate('ForgotPassword')}
                                    arrowRight 
                                    icon={<FontAwesome name={'envelope'} size={15} color={COLORS.primary} />}
                                    title={'Forgot Password'}
                                    />
                                <ListStyle1 
                                    onPress={() => props.navigation.navigate('EnterCode')}
                                    arrowRight 
                                    icon={<FontAwesome name={'mobile-phone'} size={22} color={COLORS.dark} />}
                                    title={'OTP Verification'}
                                    />
                                <ListStyle1 
                                    onPress={() => props.navigation.navigate('ChangePassword')}
                                    arrowRight 
                                    icon={<FontAwesome name={'eye-slash'} size={15} color={COLORS.success} />}
                                    title={'Change Password'}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    card : {
        padding:15,
        borderRadius:SIZES.radius,
        marginBottom:15,
        shadowColor: "rgba(0,0,0,.6)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },
})

export default Home;