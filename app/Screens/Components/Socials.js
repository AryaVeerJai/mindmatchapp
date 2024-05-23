import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';
import SocialBtn from '../../components/Socials/SocialBtn';
import SocialIcon from '../../components/Socials/SocialIcon';

const Socials = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Socials'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={{...GlobalStyleSheet.container}}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Social Button</Text>
                                </View>
                                <View style={GlobalStyleSheet.row}>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            icon={<FontAwesome name='facebook' size={16} color={COLORS.white}/>}
                                            color={'#3b5998'}
                                            text={'Facebook'}
                                            />
                                    </View>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            icon={<FontAwesome name='linkedin-square' size={16} color={COLORS.white}/>}
                                            color={'#007bb6'}
                                            text={'LinkdIn'}
                                            />
                                    </View>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            icon={<FontAwesome name='twitter' size={16} color={COLORS.white}/>}
                                            color={'#1da1f2'}
                                            text={'Twitter'}
                                            />
                                    </View>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            icon={<FontAwesome name='whatsapp' size={16} color={COLORS.white}/>}
                                            color={'#25d366'}
                                            text={'WhatsApp'}
                                            />
                                    </View>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            icon={<FontAwesome name='pinterest' size={16} color={COLORS.white}/>}
                                            color={'#bd081c'}
                                            text={'Pinterest'}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Social Button Rounded</Text>
                                </View>
                                <View style={GlobalStyleSheet.row}>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            rounded
                                            icon={<FontAwesome name='facebook' size={16} color={COLORS.white}/>}
                                            color={'#3b5998'}
                                            text={'Facebook'}
                                            />
                                    </View>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            rounded
                                            icon={<FontAwesome name='linkedin-square' size={16} color={COLORS.white}/>}
                                            color={'#007bb6'}
                                            text={'LinkdIn'}
                                            />
                                    </View>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            rounded
                                            icon={<FontAwesome name='twitter' size={16} color={COLORS.white}/>}
                                            color={'#1da1f2'}
                                            text={'Twitter'}
                                            />
                                    </View>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            rounded
                                            icon={<FontAwesome name='whatsapp' size={16} color={COLORS.white}/>}
                                            color={'#25d366'}
                                            text={'WhatsApp'}
                                            />
                                    </View>
                                    <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                        <SocialBtn
                                            rounded
                                            icon={<FontAwesome name='pinterest' size={16} color={COLORS.white}/>}
                                            color={'#bd081c'}
                                            text={'Pinterest'}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Social Icons</Text>
                                </View>

                                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                    <SocialIcon
                                        color={'#3b5998'}
                                        icon={<FontAwesome name='facebook' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        color={'#007bb6'}
                                        icon={<FontAwesome name='linkedin-square' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        color={'#1da1f2'}
                                        icon={<FontAwesome name='twitter' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        color={'#25d366'}
                                        icon={<FontAwesome name='whatsapp' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        color={'#bd081c'}
                                        icon={<FontAwesome name='pinterest' size={16} color={COLORS.white}/>}
                                    />
                                </View>

                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Social Icons Rounded</Text>
                                </View>

                                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                    <SocialIcon
                                        rounded
                                        color={'#3b5998'}
                                        icon={<FontAwesome name='facebook' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        rounded
                                        color={'#007bb6'}
                                        icon={<FontAwesome name='linkedin-square' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        rounded
                                        color={'#1da1f2'}
                                        icon={<FontAwesome name='twitter' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        rounded
                                        color={'#25d366'}
                                        icon={<FontAwesome name='whatsapp' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        rounded
                                        color={'#bd081c'}
                                        icon={<FontAwesome name='pinterest' size={16} color={COLORS.white}/>}
                                    />
                                </View>

                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Social Icons Square</Text>
                                </View>

                                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                    <SocialIcon
                                        square
                                        color={'#3b5998'}
                                        icon={<FontAwesome name='facebook' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        square
                                        color={'#007bb6'}
                                        icon={<FontAwesome name='linkedin-square' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        square
                                        color={'#1da1f2'}
                                        icon={<FontAwesome name='twitter' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        square
                                        color={'#25d366'}
                                        icon={<FontAwesome name='whatsapp' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        square
                                        color={'#bd081c'}
                                        icon={<FontAwesome name='pinterest' size={16} color={COLORS.white}/>}
                                    />
                                </View>

                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,marginBottom:10}}>
                                    <Text style={{...FONTS.h5,color:colors.title}}>Social Icons Sizes</Text>
                                </View>

                                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                                    <SocialIcon
                                        btnLg
                                        color={'#3b5998'}
                                        icon={<FontAwesome name='facebook' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        color={'#007bb6'}
                                        icon={<FontAwesome name='linkedin-square' size={16} color={COLORS.white}/>}
                                    />
                                    <SocialIcon
                                        btnSm
                                        color={'#1da1f2'}
                                        icon={<FontAwesome name='twitter' size={16} color={COLORS.white}/>}
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

export default Socials;