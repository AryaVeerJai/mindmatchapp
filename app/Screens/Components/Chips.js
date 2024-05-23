import React from 'react';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, IMAGES, SIZES } from '../../constants/theme';
import Chip from '../../components/Chip';

const Chips = () => {

    const {colors} = useTheme();

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Chips'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Light Mode</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Chip 
                                        style={{marginRight:8}}
                                        color={COLORS.success}
                                        icon={<FeatherIcon name='check' size={18} color={COLORS.white}/>}
                                        title={'All good'}
                                    />
                                    <Chip 
                                        style={{marginRight:8}}
                                        color={COLORS.danger}
                                        icon={<FeatherIcon name='x' size={18} color={COLORS.white}/>}
                                        title={'Error'}
                                    />
                                    <Chip 
                                        style={{marginRight:8}}
                                        image={IMAGES.user1}
                                        title={'Profile'}
                                    />
                                </View>
                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Dark Mode</Text>
                                </View>
                                <View style={{flexDirection:'row'}}>
                                    <Chip 
                                        darkMode
                                        style={{marginRight:8}}
                                        color={COLORS.success}
                                        icon={<FeatherIcon name='check' dark size={18} color={COLORS.white}/>}
                                        title={'All good'}
                                    />
                                    <Chip 
                                        darkMode
                                        style={{marginRight:8}}
                                        color={COLORS.danger}
                                        icon={<FeatherIcon name='x' size={18} color={COLORS.white}/>}
                                        title={'Error'}
                                    />
                                    <Chip 
                                        darkMode
                                        style={{marginRight:8}}
                                        image={IMAGES.user1}
                                        title={'Profile'}
                                    />
                                </View>
                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Diffrent Sizes</Text>
                                </View>
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <Chip 
                                        style={{marginRight:8}}
                                        chipLarge
                                        icon={<FeatherIcon name='settings' size={16} color={COLORS.white}/>}
                                        title={'Large'}
                                    />
                                    <Chip 
                                        style={{marginRight:8}}
                                        icon={<FeatherIcon name='settings' size={16} color={COLORS.white}/>}
                                        title={'Default'}
                                    />
                                    <Chip 
                                        style={{marginRight:8}}
                                        chipSmall
                                        icon={<FeatherIcon name='settings' size={16} color={COLORS.white}/>}
                                        title={'Small'}
                                    />
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

export default Chips;