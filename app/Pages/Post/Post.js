import React from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../../constants/theme";
import Header from "../../layout/Header";

const GallleryData = [
    {
        image : IMAGES.post1,
    },
    {
        image : IMAGES.post2,
    },
    {
        image : IMAGES.post3,
    },
    {
        image : IMAGES.post4,
    },
    {
        image : IMAGES.post5,
    },
    {
        image : IMAGES.post6,
    },
    {
        image : IMAGES.post7,
    },
    {
        image : IMAGES.post8,
    },
    {
        image : IMAGES.post9,
    },
    {
        image : IMAGES.post10,
    },
    {
        image : IMAGES.post11,
    },
    {
        image : IMAGES.post12,
    },
]

const PostScreen = () => {

    const theme = useTheme();
    const {colors} = theme;

    return(
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <Header leftIcon={'close'} rightIcon={'next'} title={'New post'}/>
            <ScrollView>
                <View
                    style={{
                        height:350,
                        backgroundColor: theme.dark ? COLORS.darkBorder : '#eee',
                    }}
                >
                    <Image
                        style={{
                            height:'100%',
                            width:'100%',
                            resizeMode:'contain',
                        }}
                        source={IMAGES.post1}
                    />
                </View>
                <View
                    style={{
                        height:50,
                        alignItems:'center',
                        flexDirection:'row',
                        paddingHorizontal:15,
                    }}
                >
                    <Text style={{...FONTS.h6,flex:1,color:colors.title}}>Gallery</Text>
                    <TouchableOpacity
                        accessible={true}
                        accessibilityLabel="Camers"
                        accessibilityHint="open camera"
                        style={{
                            height:50,
                            width:50,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <SvgXml
                            stroke={colors.title}
                            xml={ICONS.camera}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',flexWrap:'wrap'}}>
                    {GallleryData.map((data,index) => {
                        return(
                            <View
                                key={index}
                                style={{
                                    width:SIZES.width / 4,
                                    height:SIZES.width / 4,
                                }}
                            >
                                <TouchableOpacity
                                    style={{
                                        marginBottom:2,
                                        marginHorizontal:1,
                                    }}
                                >
                                    <Image
                                        style={{
                                            height:'100%',
                                            width:'100%',
                                        }}
                                        source={data.image}
                                    />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PostScreen;