import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { SIZES } from '../../constants/theme';
import ListStyle1 from '../../components/list/ListStyle1';

const Footers = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Footer styles'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={{
                                backgroundColor:colors.cardBg,
                                borderRadius:SIZES.radius,
                                paddingHorizontal:15,
                                overflow:'hidden',
                                shadowColor: "rgba(0,0,0,.8)",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.30,
                                shadowRadius: 4.65,

                                elevation: 8,
                            }}>
                                <ListStyle1 onPress={() => props.navigation.navigate('TabStyle1')} arrowRight title={'Footer Style 1'}/>
                                <ListStyle1 onPress={() => props.navigation.navigate('TabStyle2')} arrowRight title={'Footer Style 2'}/>
                                <ListStyle1 onPress={() => props.navigation.navigate('TabStyle3')} arrowRight title={'Footer Style 3'}/>
                                <ListStyle1 onPress={() => props.navigation.navigate('TabStyle4')} arrowRight title={'Footer Style 4'}/>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
};



export default Footers;