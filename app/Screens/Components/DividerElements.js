import React from 'react';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextComponent, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Divider from '../../components/Dividers/Divider';
import DividerIcon from '../../components/Dividers/DividerIcon';

const DividerElements = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Dividers'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <Text style={{...FONTS.h5, color:colors.title}}>Simple Dividers</Text>
                                <Divider/>
                                <Divider color={COLORS.danger}/>
                                <Divider color={COLORS.primary}/>
                                <Divider color={COLORS.secondary}/>
                                <Divider color={COLORS.info}/>
                                <Divider color={colors.title}/>
                            </View>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <Text style={{...FONTS.h5, color:colors.title}}>Dashed Dividers</Text>
                                <Divider dashed/>
                                <Divider dashed color={COLORS.danger}/>
                                <Divider dashed color={COLORS.primary}/>
                                <Divider dashed color={COLORS.secondary}/>
                                <Divider dashed color={COLORS.info}/>
                                <Divider dashed color={colors.title}/>
                            </View>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <Text style={{...FONTS.h5, color:colors.title}}>Dividers with icon</Text>
                                <DividerIcon icon={<FeatherIcon name={'x'} color={colors.textLight} size={18}/>}/>
                                <DividerIcon color={COLORS.danger} icon={<FeatherIcon name={'alert-circle'} color={COLORS.danger} size={18}/>}/>
                                <DividerIcon color={COLORS.primary} icon={<FeatherIcon name={'alert-triangle'} color={COLORS.primary} size={18}/>}/>
                                <DividerIcon color={COLORS.secondary} icon={<FeatherIcon name={'sun'} color={COLORS.secondary} size={18}/>}/>
                                <DividerIcon color={COLORS.info} icon={<FeatherIcon name={'truck'} color={COLORS.info} size={18}/>}/>
                                <DividerIcon color={colors.title} icon={<FeatherIcon name={'settings'} color={colors.title} size={18}/>}/>
                            </View>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <Text style={{...FONTS.h5, color:colors.title}}>Dividers with icon</Text>
                                <DividerIcon dashed icon={<FeatherIcon name={'x'} color={colors.textLight} size={18}/>}/>
                                <DividerIcon dashed color={COLORS.danger} icon={<FeatherIcon name={'alert-circle'} color={COLORS.danger} size={18}/>}/>
                                <DividerIcon dashed color={COLORS.primary} icon={<FeatherIcon name={'alert-triangle'} color={COLORS.primary} size={18}/>}/>
                                <DividerIcon dashed color={COLORS.secondary} icon={<FeatherIcon name={'sun'} color={COLORS.secondary} size={18}/>}/>
                                <DividerIcon dashed color={COLORS.info} icon={<FeatherIcon name={'truck'} color={COLORS.info} size={18}/>}/>
                                <DividerIcon dashed color={colors.title} icon={<FeatherIcon name={'settings'} color={colors.title} size={18}/>}/>
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

export default DividerElements;