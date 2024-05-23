import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FONTS } from '../../constants/theme';
import Header from '../../layout/Header';
import {GlobalStyleSheet} from '../../constants/StyleSheet';

const PrivacyPolicy = (props) => {
    const {colors} = useTheme();
    return (
        // <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
        <SafeAreaView style={{flex:1, backgroundColor:'#111828'}}>
            <Header title="Privacy Policy" leftIcon={'back'}/>
            <ScrollView>
                <View style={GlobalStyleSheet.container}>

                    {/* <Text style={{...FONTS.h6,marginBottom:10,color:colors.title}}>Information We Collect</Text> */}
                    <Text style={{...FONTS.h6,marginBottom:10,color:'white'}}>Information We Collect</Text>
                    <View style={{marginBottom:10}}>
                        <View style={{flexDirection:'row',marginBottom:12}}>
                            <View
                                style={{
                                    height:5,
                                    width:5,
                                    borderRadius:5,
                                    backgroundColor:colors.title,
                                    marginRight:10,
                                    top:9,
                                }}
                            />
                            {/* <Text style={[FONTS.font,{color:colors.text}]}>Contact Information: We collect contact information, which includes personal information (e.g., name, phone number, and email address) that you knowingly provide when you use our Website.</Text> */}
                            <Text style={[FONTS.font,{color:'white'}]}>Contact Information: We collect contact information, which includes personal information (e.g., name, phone number, and email address) that you knowingly provide when you use our Website.</Text>
                        </View>
                        <View style={{flexDirection:'row',marginBottom:12}}>
                            <View
                                style={{
                                    height:5,
                                    width:5,
                                    borderRadius:5,
                                    backgroundColor:colors.title,
                                    marginRight:10,
                                    top:9,
                                }}
                            />
                            {/* <Text style={[FONTS.font,{color:colors.text}]}>Payment Details: Your payment details can be collected in connection with an order.</Text> */}
                            <Text style={[FONTS.font,{color:'white'}]}>Payment Details: Your payment details can be collected in connection with an order.</Text>
                        </View>
                        <View style={{flexDirection:'row',marginBottom:12}}>
                            <View
                                style={{
                                    height:5,
                                    width:5,
                                    borderRadius:5,
                                    backgroundColor:colors.title,
                                    marginRight:10,
                                    top:9,
                                }}
                            />
                            <Text style={[FONTS.font,{color:'white'}]}>Call records or email records: If you call or email our customer service agents, we may keep records of those conversations.</Text>
                        </View>
                    </View>
                    <Text style={{...FONTS.h6,marginBottom:10,color:'white'}}>How Your Information Is Collected</Text>
                    <View style={{marginBottom:10}}>
                        <View style={{flexDirection:'row',marginBottom:12}}>
                            <View
                                style={{
                                    height:5,
                                    width:5,
                                    borderRadius:5,
                                    backgroundColor:colors.title,
                                    marginRight:10,
                                    top:9,
                                }}
                            />
                            {/* <Text style={[FONTS.font,{color:colors.text}]}>You: We collect information directly from you, whenever you: visit our Website; contact us with questions or comments; upload content to our Social Media Pages; enter our contests or sweepstakes or contests or sweepstakes we are affiliated with; respond to surveys; or fill out any forms on our Website or Social Media Pages.</Text> */}
                            <Text style={[FONTS.font,{color:'white'}]}>You: We collect information directly from you, whenever you: visit our Website; contact us with questions or comments; upload content to our Social Media Pages; enter our contests or sweepstakes or contests or sweepstakes we are affiliated with; respond to surveys; or fill out any forms on our Website or Social Media Pages.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default PrivacyPolicy;