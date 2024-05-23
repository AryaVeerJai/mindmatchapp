import React from 'react';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { FONTS, SIZES } from '../../constants/theme';
import BasicLineChart from '../../components/Charts/LineChart';
import BasicBarChart from '../../components/Charts/BarChart';
import BasicPieChart from '../../components/Charts/PieChart';

const Charts = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Charts'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Line Chart</Text>
                                </View>
                                
                                <BasicLineChart/>

                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Bar Chart</Text>
                                </View>
                                
                                <BasicBarChart/>

                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Pie Chart</Text>
                                </View>
                                
                                <BasicPieChart/>

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

export default Charts;