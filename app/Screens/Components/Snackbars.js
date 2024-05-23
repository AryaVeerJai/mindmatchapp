import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Snackbar from 'react-native-snackbar';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Header from '../../layout/Header';
import { COLORS, SIZES } from '../../constants/theme';
import ListStyle1 from '../../components/list/ListStyle1';


const Snackbars = (props) => {

    const {colors} = useTheme();

    const ShowSnackbarSuccess = () => {
        Snackbar.show({
            text: 'Confirmed',
            backgroundColor: COLORS.success,
            duration: Snackbar.LENGTH_SHORT,
        });
    }
    const ShowSnackbarWarning = () => {
        Snackbar.show({
            text: "Something's wrong!",
            backgroundColor: COLORS.warning,
            duration: Snackbar.LENGTH_SHORT,
        });
    }
    const ShowSnackbarInfo = () => {
        Snackbar.show({
            text: "We're on it",
            backgroundColor: COLORS.info,
            duration: Snackbar.LENGTH_SHORT,
        });
    }
    const ShowSnackbarError = () => {
        Snackbar.show({
            text: 'Error Occured',
            backgroundColor: COLORS.danger,
            duration: Snackbar.LENGTH_SHORT,
        });
    }

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Snackbars'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={{...GlobalStyleSheet.container}}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <ListStyle1
                                    onPress={() => ShowSnackbarSuccess()}
                                    arrowRight
                                    icon={<FontAwesome size={14} color={COLORS.success} name={'check'}/>}
                                    title={'Confirmation Snackbar'}
                                    />
                                <ListStyle1
                                    onPress={() => ShowSnackbarWarning()}
                                    arrowRight
                                    icon={<FontAwesome size={14} color={COLORS.warning} name={'warning'}/>}
                                    title={'Warning Snackbar'}
                                    />
                                <ListStyle1
                                    onPress={() => ShowSnackbarInfo()}
                                    arrowRight
                                    icon={<FontAwesome size={14} color={COLORS.info} name={'refresh'}/>}
                                    title={'Loading Snackbar'}
                                    />
                                <ListStyle1
                                    onPress={() => ShowSnackbarError()}
                                    arrowRight
                                    icon={<FontAwesome size={14} color={COLORS.danger} name={'close'}/>}
                                    title={'Error Snackbar'}
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
        paddingHorizontal:15,
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
    }
})

export default Snackbars;