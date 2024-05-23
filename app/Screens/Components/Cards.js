import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import CardStyle1 from '../../components/card/CardStyle1';
import { IMAGES } from '../../constants/theme';
import CardStyle2 from '../../components/card/CardStyle2';
import CardStyle3 from '../../components/card/CardStyle3';
import CardStyle4 from '../../components/card/CardStyle4';
import CardStyle5 from '../../components/card/CardStyle5';
import CardStyle6 from '../../components/card/CardStyle6';
import CardStyle7 from '../../components/card/CardStyle7';
import CardStyle8 from '../../components/card/CardStyle8';
import TitleArea from '../../components/TitleArea';


const Cards = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Cards'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={{marginBottom:40}}>
                                <TitleArea
                                    title={'Card Style 1'}
                                />
                                <CardStyle1
                                    iconColor={'#f85c6f'}
                                    icon={
                                        <Image
                                            source={IMAGES.heart} 
                                            style={{
                                                height:30,
                                                width:30,
                                                resizeMode:'contain',
                                                tintColor: "#f85c6f",
                                            }}/>
                                    }
                                    title="Dating App"
                                    desc="Pages for dating app"
                                />
                            </View>
                            <View style={{marginBottom:40,alignItems:'center'}}>
                                <TitleArea
                                    title={'Card Style 2'}
                                />
                                <CardStyle2
                                    image={IMAGES.post1}
                                    title={'Will organizing your desk make you more productive?'}
                                    name={'John Doe'}
                                    update={'26 min ago'}
                                    tags={['Nature']}
                                    profile={IMAGES.user1}
                                    bookmark={true}
                                />
                            </View>
                            <View style={{marginBottom:40}}>
                                <TitleArea
                                    title={'Card Style 3'}
                                />
                                <CardStyle3
                                    title={'Will organizing your desk make you more productive?'}
                                    image={IMAGES.post5}
                                    tags={['Political']}
                                    update={'26 min ago'}
                                />
                            </View>
                            <View style={{marginBottom:40,alignItems:'center'}}>
                                <TitleArea
                                    title={'Card Style 4'}
                                />
                                <CardStyle4
                                    image={IMAGES.post20}
                                    title={'Pomegranate'}
                                    size={'1KG'}
                                    price={'4.9'}
                                    rate={'14.60'}
                                />
                            </View>
                            <View style={{marginBottom:40}}>
                                <TitleArea
                                    title={'Card Style 5'}
                                />
                                <View style={GlobalStyleSheet.row}>
                                    <View style={GlobalStyleSheet.col50}>
                                        <CardStyle5
                                            title={'Pomegranate'}
                                            image={IMAGES.post20}
                                            price={'14.60'}
                                            size={'1KG'}
                                        />
                                    </View>
                                    <View style={GlobalStyleSheet.col50}>
                                        <CardStyle5
                                            title={'Strawberry'}
                                            image={IMAGES.post21}
                                            price={'14.60'}
                                            size={'1KG'}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={{marginBottom:40,alignItems:'center'}}>
                                <TitleArea
                                    title={'Card Style 6'}
                                />
                                <CardStyle6
                                    image={IMAGES.post10}
                                    title={'UX Design Fundamentals'}
                                    duration={'3 hrs'}
                                    lesson={'25'}
                                    tags={["Ui Design", "Development"]}
                                />
                            </View>
                            <View style={{marginBottom:40}}>
                                <TitleArea
                                    title={'Card Style 7'}
                                />
                                <View style={GlobalStyleSheet.row}>
                                    <View style={GlobalStyleSheet.col50}>
                                        <CardStyle7
                                            image={IMAGES.post13}
                                            title={'Egg Sandwitch'}
                                            duration={'30min'}
                                            servings={'2'}
                                            isLike={false}
                                        />
                                    </View>
                                    <View style={GlobalStyleSheet.col50}>
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
                            <View style={{marginBottom:40}}>
                                <TitleArea
                                    title={'Card Style 8'}
                                />
                                <View style={GlobalStyleSheet.row}>
                                    <View style={GlobalStyleSheet.col50}>
                                        <CardStyle8
                                            image={IMAGES.post18}
                                            price={'$45.20'}
                                            title={'Sony PlayStation 4 Pro Gaming Console'}
                                            address={'Alderwood PA- 18944'}
                                        />
                                    </View>
                                    <View style={GlobalStyleSheet.col50}>
                                        <CardStyle8
                                            image={IMAGES.post19}
                                            price={'$45.20'}
                                            title={'Sony PlayStation 4 Pro Gaming Console'}
                                            address={'Alderwood PA- 18944'}
                                        />
                                    </View>
                                </View>
                            </View>
                            
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
};


export default Cards;