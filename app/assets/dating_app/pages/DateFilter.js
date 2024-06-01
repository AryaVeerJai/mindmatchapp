import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { COLORS, FONTS, SIZES } from '../constants/theme';
import { GlobalStyleSheet } from '../constants/StyleSheet';
import Button from '../components/Button/Button';
import { Checkbox } from 'react-native-paper';

const DateFilter = (props) => {
    
    const {colors} = useTheme();
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false);

    return (
        <>
            <SafeAreaView
                style={{flex:1,backgroundColor:colors.background2}}
            >
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center',
                        paddingHorizontal:10,
                        paddingVertical:10,
                    }}
                >
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}
                        style={{
                            padding:10,
                            top:-1,
                            marginRight:10,
                        }}
                    >
                        <FeatherIcon size={24} color={colors.title} name='arrow-left'/>
                    </TouchableOpacity>
                    <Text style={{...FONTS.h5,color:colors.title}}>Date filter</Text>
                </View>
                <View style={{flex:1}}>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View
                                style={[styles.infoCard,GlobalStyleSheet.shadow,{
                                    backgroundColor:colors.cardBg, 
                                }]}
                            >
                                <Text style={[styles.cardtitle,{
                                    color:colors.text,
                                    borderColor:colors.borderColor,
                                }]}>Who you want to date</Text>
                                <View
                                    style={{
                                        marginHorizontal:-15,
                                    }}
                                >
                                    <Checkbox.Item 
                                        label="Men" 
                                        onPress={() => setToggleCheckBox(!toggleCheckBox)}
                                        status={toggleCheckBox ? "checked" : "unchecked"} 
                                        uncheckedColor={colors.textLight}
                                        color={COLORS.primary4}
                                        labelStyle={{
                                            ...FONTS.h6,
                                            color:colors.title
                                        }}
                                    />
                                    <Checkbox.Item 
                                        label="Women" 
                                        onPress={() => setToggleCheckBox2(!toggleCheckBox2)}
                                        status={toggleCheckBox2 ? "checked" : "unchecked"} 
                                        uncheckedColor={colors.textLight}
                                        color={COLORS.primary4}
                                        labelStyle={{
                                            ...FONTS.h6,
                                            color:colors.title
                                        }}
                                    />
                                    <Checkbox.Item 
                                        label="Nonbinary people" 
                                        onPress={() => setToggleCheckBox3(!toggleCheckBox3)}
                                        status={toggleCheckBox3 ? "checked" : "unchecked"} 
                                        uncheckedColor={colors.textLight}
                                        color={COLORS.primary4}
                                        labelStyle={{
                                            ...FONTS.h6,
                                            color:colors.title
                                        }}
                                    />
                                </View>
                            </View>
                            <View
                                style={[styles.infoCard,GlobalStyleSheet.shadow,{
                                    backgroundColor:colors.cardBg, 
                                }]}
                            >
                                <Text style={[styles.cardtitle,{
                                    color:colors.text,
                                    borderColor:colors.borderColor,
                                }]}>Age</Text>
                                <Text style={{...FONTS.h6,color:colors.title}}>Between 18 and 30</Text>
                                <View>

                                    <MultiSlider
                                        trackStyle={{height:4,borderRadius:2,backgroundColor:'rgba(142,165,200,.3)'}}
                                        selectedStyle={{
                                            backgroundColor:COLORS.primary4,
                                        }}
                                        values={[18,30]}
                                        markerStyle={{
                                            backgroundColor:COLORS.white,
                                            top:1,
                                            height:16,
                                            width:16,
                                            borderWidth:3,
                                            borderColor:COLORS.primary4,
                                        }}
                                        sliderLength={SIZES.width - 60}
                                        max={100}
                                    />

                                </View>
                            </View>
                            <View
                                style={[styles.infoCard,GlobalStyleSheet.shadow,{
                                    backgroundColor:colors.cardBg, 
                                }]}
                            >
                                <Text style={[styles.cardtitle,{
                                    color:colors.text,
                                    borderColor:colors.borderColor,
                                }]}>Distance</Text>
                                <Text style={{...FONTS.h6,color:colors.title}}>Up to 49 kilometers away</Text>
                                <View>

                                    <MultiSlider
                                        trackStyle={{height:4,borderRadius:2,backgroundColor:'rgba(142,165,200,.3)'}}
                                        selectedStyle={{
                                            backgroundColor:COLORS.primary4,
                                        }}
                                        markerStyle={{
                                            backgroundColor:COLORS.white,
                                            top:1,
                                            height:16,
                                            width:16,
                                            borderWidth:3,
                                            borderColor:COLORS.primary4,
                                        }}
                                        sliderLength={SIZES.width - 60}
                                        max={100}
                                    />

                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={GlobalStyleSheet.container}>
                    <Button btnRounded color={COLORS.primary4} title="Apply"/>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    infoCard : {
        borderRadius:10,
        paddingHorizontal:15,
        paddingVertical:15,
        marginBottom:15,
    },
    cardtitle : {
        ...FONTS.fontBold,
        ...FONTS.font,
        borderBottomWidth:1,
        paddingBottom:8,
        marginBottom:10,
    }
})

export default DateFilter;