import React from 'react';
import { useTheme } from '@react-navigation/native';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CardStyle7 from '../../components/card/CardStyle7';
import { IMAGES } from '../../constants/theme';

const Columns = () => {

    const {colors} = useTheme();

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Columns'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={GlobalStyleSheet.row}>
                                <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                    <CardStyle7
                                        image={IMAGES.post18}
                                        title={'Egg Sandwitch'}
                                        duration={'30min'}
                                        servings={'2'}
                                        isLike={false}
                                    />
                                </View>
                                <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                    <CardStyle7
                                        image={IMAGES.post19}
                                        title={'Egg Sandwitch'}
                                        duration={'30min'}
                                        servings={'2'}
                                        isLike={false}
                                    />
                                </View>
                                <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                    <CardStyle7
                                        image={IMAGES.post12}
                                        title={'Egg Sandwitch'}
                                        duration={'30min'}
                                        servings={'2'}
                                        isLike={false}
                                    />
                                </View>
                                <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                    <CardStyle7
                                        image={IMAGES.post14}
                                        title={'Egg Sandwitch'}
                                        duration={'30min'}
                                        servings={'2'}
                                        isLike={false}
                                    />
                                </View>
                                <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                    <CardStyle7
                                        image={IMAGES.post16}
                                        title={'Egg Sandwitch'}
                                        duration={'30min'}
                                        servings={'2'}
                                        isLike={false}
                                    />
                                </View>
                                <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                    <CardStyle7
                                        image={IMAGES.post17}
                                        title={'Egg Sandwitch'}
                                        duration={'30min'}
                                        servings={'2'}
                                        isLike={false}
                                    />
                                </View>
                                <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                    <CardStyle7
                                        image={IMAGES.post13}
                                        title={'Egg Sandwitch'}
                                        duration={'30min'}
                                        servings={'2'}
                                        isLike={false}
                                    />
                                </View>
                                <View style={[GlobalStyleSheet.col50,{marginBottom:10}]}>
                                    <CardStyle7
                                        image={IMAGES.post14}
                                        title={'Egg Sandwitch'}
                                        duration={'30min'}
                                        servings={'2'}
                                        isLike={false}
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


export default Columns;