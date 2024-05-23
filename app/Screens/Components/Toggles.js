import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import Header from '../../layout/Header';
import { FONTS, SIZES } from '../../constants/theme';
import ToggleStyle1 from '../../components/Toggles/ToggleStyle1';
import ToggleStyle2 from '../../components/Toggles/ToggleStyle2';
import ToggleStyle3 from '../../components/Toggles/ToggleStyle3';
import ToggleStyle4 from '../../components/Toggles/ToggleStyle4';

const Toggles = (props) => {
    const {colors} = useTheme();

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Toggles'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={{...GlobalStyleSheet.container}}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{paddingBottom:10,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Toggle Buttons</Text>
                                    <Text style={{...FONTS.font,color:colors.textLight}}>toggles for action the event.</Text>
                                </View>

                                <View
                                    style={{
                                        paddingVertical:14,
                                        borderBottomWidth:1,
                                        borderBottomColor:colors.borderColor,
                                        flexDirection:"row",
                                        alignItems:'center',
                                        justifyContent:'space-between',
                                    }}
                                >
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold}}>Default Toggle</Text>
                                    
                                    <ToggleStyle1/>
                                    
                                </View>
                                <View
                                    style={{
                                        paddingVertical:14,
                                        borderBottomWidth:1,
                                        borderBottomColor:colors.borderColor,
                                        flexDirection:"row",
                                        alignItems:'center',
                                        justifyContent:'space-between',
                                    }}
                                >
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold}}>Icon Toggle</Text>
                                    
                                    <ToggleStyle2/>
                                    
                                </View>
                                <View
                                    style={{
                                        paddingVertical:14,
                                        borderBottomWidth:1,
                                        borderBottomColor:colors.borderColor,
                                        flexDirection:"row",
                                        alignItems:'center',
                                        justifyContent:'space-between',
                                    }}
                                >
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold}}>Text Toggle</Text>
                                    
                                    <ToggleStyle3/>
                                    
                                </View>
                                <View
                                    style={{
                                        paddingVertical:14,
                                        borderBottomWidth:1,
                                        borderBottomColor:colors.borderColor,
                                        flexDirection:"row",
                                        alignItems:'center',
                                        justifyContent:'space-between',
                                    }}
                                >
                                    <Text style={{...FONTS.font,color:colors.title,...FONTS.fontBold}}>Circle Toggle</Text>
                                    
                                    <ToggleStyle4/>
                                    
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
    }
})

export default Toggles;