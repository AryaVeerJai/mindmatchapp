import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import { COLORS, FONTS, ICONS, IMAGES } from '../constants/theme';


const storiesData = [
    {
        id:'01',
        image : IMAGES.user8,
        storeItem : [
            IMAGES.story8,
            IMAGES.story1
        ],
        name : 'Your story',
    },
    {
        id:'1',
        image : IMAGES.user1,
        storeItem : [
            IMAGES.story1,
            IMAGES.story6,
            IMAGES.story7,
            IMAGES.story7,
            IMAGES.story2
        ],
        name : 'Emilia',
    },
    {
        id:'2',
        image : IMAGES.user2,
        storeItem : [IMAGES.story2],
        name : 'Berline',
    },
    {
        id:'3',
        image : IMAGES.user3,
        storeItem : [IMAGES.story3],
        name : 'Lucas',
    },
    {
        id:'4',
        image : IMAGES.user4,
        storeItem : [IMAGES.story4],
        name : 'Jermy',
    },
    {
        id:'5',
        image : IMAGES.user5,
        storeItem : [IMAGES.story5],
        name : 'Carla',
    },
    {
        id:'6',
        image : IMAGES.user6,
        storeItem : [IMAGES.story6],
        name : 'kerry',
    },
    {
        id:'7',
        image : IMAGES.user7,
        storeItem : [IMAGES.story7],
        name : 'William',
    },
]

const Stories = () => {

    const {colors} = useTheme();
    const navigation = useNavigation();

    return (
        <>
            <ScrollView 
                contentContainerStyle={{paddingVertical:15,paddingLeft:15}}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {storiesData.map((data,index) => {
                    return(
                        <TouchableOpacity 
                            onPress={()=> navigation.push('Status',{
                                name : data.name,
                                image : data.image,
                                statusData : data.storeItem,
                            })}
                            activeOpacity={.8}
                            style={styles.storieItem}
                            key={index}> 
                            <LinearGradient
                                style={styles.storieMedia}
                                colors={
                                    data.id === "01" ?
                                    colors.bgGradient
                                    :
                                    ['#FE9063', '#704FFE']
                                }
                            >
                                <View style={{backgroundColor:colors.background,height:66,width:66,borderRadius:24,alignItems:'center',justifyContent:'center'}}>
                                    {data.id === "01" &&
                                        <View
                                            style={{
                                                position:'absolute',
                                                zIndex:1,
                                                bottom:2,
                                                right:2,
                                                height:18,
                                                width:18,
                                                borderRadius:9,
                                                backgroundColor:COLORS.secondary,
                                                borderWidth:2,
                                                borderColor: colors.background,
                                                alignItems:'center',
                                                justifyContent:'center',
                                            }}
                                        >
                                            <SvgXml height={8} width={8} xml={ICONS.plus}/>
                                        </View>
                                    }
                                    <Image 
                                        style={styles.storieProfile}
                                        source={data.image}
                                    />
                                </View>
                            </LinearGradient>
                            <Text style={[FONTS.font,{color:colors.text}]}>{data.name}</Text>
                        </TouchableOpacity>
                    )
                })}
            </ScrollView>
        </>
    );
};


const styles = StyleSheet.create({
    storieMedia:{
        padding:2,
        height:70,
        width:70,
        borderRadius:24,
        marginBottom:2,
        alignItems:'center',
        justifyContent:'center',
    },
    storieProfile:{
        height:58,
        width:58,
        borderRadius:18,
        resizeMode:'cover',
    },
    storieItem:{
        marginRight:10,
        alignItems:'center',
    }
})


export default Stories;