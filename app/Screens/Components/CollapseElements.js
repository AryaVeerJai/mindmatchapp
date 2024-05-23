import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextComponent, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Button from '../../components/Button/Button';
import ListStyle1 from '../../components/list/ListStyle1';

const CollapseElements = (props) => {

    const {colors} = useTheme();
    const [isCollapsed , setIsCollapsed] = useState(true);
    const [isCollapsed2 , setIsCollapsed2] = useState(true);
    const [isCollapsed3 , setIsCollapsed3] = useState(true);
    const [isCollapsed4 , setIsCollapsed4] = useState(true);

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Collapse'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View
                                    style={{
                                        borderBottomWidth:1,
                                        borderBottomColor:colors.borderColor,
                                        paddingBottom:8,
                                        marginBottom:10,
                                    }}
                                >
                                    <Text style={{...FONTS.h5,color:colors.title}}>Collapse Content</Text>
                                </View>
                                <Text style={{...FONTS.font,color:colors.text,marginBottom:15}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
                                <Collapsible collapsed={isCollapsed}>
                                    <View style={{paddingBottom:15}}>
                                        <Text style={{...FONTS.font,color:colors.text}}>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</Text>
                                    </View>
                                </Collapsible>
                                <Button 
                                    onPress={() => setIsCollapsed(!isCollapsed)}
                                    title={'Tap me'}
                                />
                            </View>

                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                                paddingVertical:0,
                            }]}>
                                <View>
                                    <ListStyle1
                                        arrowDown
                                        onPress={() => setIsCollapsed2(!isCollapsed2)}
                                        icon={<FontAwesome name={'share-alt'} size={15} color={COLORS.red} />}
                                        title={'Social'}
                                    />
                                    <Collapsible collapsed={isCollapsed2}>
                                        <View style={{paddingLeft:20}}>
                                            <ListStyle1
                                                arrowRight
                                                icon={<FontAwesome name={'facebook-official'} size={15} color={'#3b5998'} />}
                                                title={'Facebook'}
                                            />
                                            <ListStyle1
                                                arrowRight
                                                icon={<FontAwesome name={'twitter-square'} size={15} color={'#4099ff'} />}
                                                title={'Twitter'}
                                            />
                                            <ListStyle1
                                                arrowRight
                                                icon={<FontAwesome name={'linkedin-square'} size={15} color={'#0077b5'} />}
                                                title={'Linkdin'}
                                            />
                                        </View>
                                    </Collapsible>
                                </View>
                                <View>
                                    <ListStyle1
                                        arrowDown
                                        onPress={() => setIsCollapsed3(!isCollapsed3)}
                                        icon={<FontAwesome name={'envelope'} size={15} color={COLORS.secondary} />}
                                        title={'Emails'}
                                    />
                                    <Collapsible collapsed={isCollapsed3}>
                                        <View style={{paddingLeft:20}}>
                                            <ListStyle1
                                                icon={<FontAwesome name={'arrow-right'} size={15} color={colors.textLight} />}
                                                title={'demo@gmail.com'}
                                            />
                                            <ListStyle1
                                                icon={<FontAwesome name={'arrow-right'} size={15} color={colors.textLight} />}
                                                title={'example@gmail.com'}
                                            />
                                            <ListStyle1
                                                icon={<FontAwesome name={'arrow-right'} size={15} color={colors.textLight} />}
                                                title={'your@gmail.com'}
                                            />
                                        </View>
                                    </Collapsible>
                                </View>
                                <View>
                                    <ListStyle1
                                        arrowDown
                                        onPress={() => setIsCollapsed4(!isCollapsed4)}
                                        icon={<FontAwesome name={'phone'} size={15} color={COLORS.info} />}
                                        title={'Phones'}
                                    />
                                    <Collapsible collapsed={isCollapsed4}>
                                        <View style={{paddingLeft:20}}>
                                            <ListStyle1
                                                icon={<FontAwesome name={'arrow-right'} size={15} color={colors.textLight} />}
                                                title={'001 4444 5858'}
                                            />
                                            <ListStyle1
                                                icon={<FontAwesome name={'arrow-right'} size={15} color={colors.textLight} />}
                                                title={'4551 4444 5858'}
                                            />
                                            <ListStyle1
                                                icon={<FontAwesome name={'arrow-right'} size={15} color={colors.textLight} />}
                                                title={'2505 4484 5158'}
                                            />
                                        </View>
                                    </Collapsible>
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
    listStyle:{
        borderBottomWidth:1,
        paddingVertical:16,
        flexDirection:'row',
        alignItems:'center',
    }
})

export default CollapseElements;