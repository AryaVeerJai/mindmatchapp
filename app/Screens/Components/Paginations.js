import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import DefaultPagination from '../../components/Paginations/DefaultPagination';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { FONTS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';
import RoundedPagination from '../../components/Paginations/RoundedPagination';

const Paginations = (props) => {

    const {colors} = useTheme(); 

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Paginations'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:20}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Default Pagination</Text>
                                </View>

                                <DefaultPagination/>

                            </View>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:20}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Rounded Pagination</Text>
                                </View>

                                <RoundedPagination/>

                            </View>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:20}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Pagination Sizes</Text>
                                </View>

                                <View style={{marginBottom:15}}>
                                    <DefaultPagination paginationLg/>
                                </View>
                                <View style={{marginBottom:15}}>
                                    <DefaultPagination/>
                                </View>
                                <View style={{marginBottom:15}}>
                                    <DefaultPagination paginationSm/>
                                </View>

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

export default Paginations;