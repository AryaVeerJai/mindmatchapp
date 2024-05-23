import React from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FONTS } from '../../constants/theme';
import Header from '../../layout/Header';
import {GlobalStyleSheet} from '../../constants/StyleSheet';

const TermsUse = (props) => {
    const {colors} = useTheme();
    return (
        // <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
        <SafeAreaView style={{flex:1, backgroundColor:'#111828'}}>
            <Header title="Terms of Use" leftIcon={'back'}/>
            <ScrollView>
                <View style={GlobalStyleSheet.container}>

                    {/* <Text style={{...FONTS.h6,marginBottom:5,color:colors.title}}>Introduction</Text> */}
                    <Text style={{...FONTS.h6,marginBottom:5,color: 'white'}}>Introduction</Text>
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
                            {/* <Text style={[FONTS.font,{color:colors.text}]}>The Terms are to be read together by you with any terms, conditions or disclaimers provided in the pages of our website. Please review the Terms carefully. The Terms apply to all users of our website, including without limitation, users who are browsers, customers, merchants, vendors and/or contributors of content. If you access and use this website, you accept and agree to be bound by and comply with the Terms and our Privacy Policy. If you do not agree to the Terms or our Privacy Policy, you are not authorized to access our website, use any of our website’s services or place an order on our website.</Text> */}
                            <Text style={[FONTS.font,{color: 'grey'}]}>The Terms are to be read together by you with any terms, conditions or disclaimers provided in the pages of our website. Please review the Terms carefully. The Terms apply to all users of our website, including without limitation, users who are browsers, customers, merchants, vendors and/or contributors of content. If you access and use this website, you accept and agree to be bound by and comply with the Terms and our Privacy Policy. If you do not agree to the Terms or our Privacy Policy, you are not authorized to access our website, use any of our website’s services or place an order on our website.</Text>
                        </View>
                    </View>
                    {/* <Text style={{...FONTS.h6,marginBottom:5,color:colors.title}}>Use of our Website</Text> */}
                    <Text style={{...FONTS.h6,marginBottom:5,color: 'white'}}>Use of our Website</Text>
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
                            {/* <Text style={[FONTS.font,{color:colors.text}]}>You agree to not use our website to conduct any activity that would constitute a civil or criminal offence or violate any law. You agree not to attempt to interfere with our website’s network or security features or to gain unauthorized access to our systems.</Text> */}
                            <Text style={[FONTS.font,{color: 'grey'}]}>You agree to not use our website to conduct any activity that would constitute a civil or criminal offence or violate any law. You agree not to attempt to interfere with our website’s network or security features or to gain unauthorized access to our systems.</Text>
                        </View>
                    </View>
                    {/* <Text style={{...FONTS.h6,marginBottom:5,color:colors.title}}>General Conditions </Text> */}
                    <Text style={{...FONTS.h6,marginBottom:5,color: 'white'}}>General Conditions </Text>
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
                            {/* <Text style={[FONTS.font,{color:colors.text}]}>You agree that we will not be liable to you or any third party for any modification, suspension or discontinuance of our website or for any service, content, feature or product offered through our website.</Text> */}
                            <Text style={[FONTS.font,{color: 'grey'}]}>You agree that we will not be liable to you or any third party for any modification, suspension or discontinuance of our website or for any service, content, feature or product offered through our website.</Text>
                        </View>
                    </View>
                    {/* <Text style={{...FONTS.h6,marginBottom:5,color:colors.title}}>Products or Services  </Text> */}
                    <Text style={{...FONTS.h6,marginBottom:5,color: 'white'}}>Products or Services  </Text>
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
                            {/* <Text style={[FONTS.font,{color:colors.text}]}>All purchases through our website are subject to product availability. We may, in our sole discretion, limit or cancel the quantities offered on our website or limit the sales of our products or services to any person, household, geographic region or jurisdiction.</Text> */}
                            <Text style={[FONTS.font,{color: 'grey'}]}>All purchases through our website are subject to product availability. We may, in our sole discretion, limit or cancel the quantities offered on our website or limit the sales of our products or services to any person, household, geographic region or jurisdiction.</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default TermsUse;