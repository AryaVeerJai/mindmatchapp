import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { FONTS, SIZES } from '../../constants/theme';
import ClassicAccordion from '../../components/Accordion/ClassicAccordion';
import AccordionHighlight from '../../components/Accordion/AccordionHighlight';
import AccordionSeprator from '../../components/Accordion/AccordionSeprator';

const AccordionScreen = (props) => {

    const {colors} = useTheme();
    

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Accordions'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{marginBottom:15}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Classic Accordion</Text>
                                    <Text style={{...FONTS.font,color:colors.textLight}}>You can use accordion with icon or without icon.</Text>
                                </View>
                                <ClassicAccordion/>
                            </View>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{marginBottom:20}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Accordion Highlight</Text>
                                    <Text style={{...FONTS.font,color:colors.textLight}}>You can use accordion with icon or without icon.</Text>
                                </View>
                                <AccordionHighlight/>
                            </View>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{marginBottom:20}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Accordion Seprator</Text>
                                    <Text style={{...FONTS.font,color:colors.textLight}}>You can use accordion with icon or without icon.</Text>
                                </View>
                                <AccordionSeprator/>
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

export default AccordionScreen;