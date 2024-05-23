import React, { useState } from "react";
import { 
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { SvgXml } from "react-native-svg";
import * as Animatable from 'react-native-animatable';
import { BlurView } from "@react-native-community/blur";
import SearchContent from "../../components/SearchContent";
import { COLORS, FONTS, ICONS, SIZES } from "../../constants/theme";


const SearchScreen = () => {
    const {colors} = useTheme();
    const [image , setImage] = useState(null);

    const getData = (data) => {
        setImage(data);
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <LinearGradient
                style={{flex:1}}
                colors={colors.bgGradient}
            >
                <ScrollView contentContainerStyle={{paddingBottom:80}}>
                    <View style={{paddingHorizontal:15,paddingTop:15,marginBottom:15}}>
                        <View>
                            <TouchableOpacity
                                style={{
                                    height:50,
                                    width:50,
                                    position:'absolute',
                                    zIndex:1,
                                    right:0,
                                    top:-1,
                                    alignItems:'center',
                                    justifyContent:'center',
                                }}
                            >
                                <SvgXml xml={ICONS.searchLight}/>
                            </TouchableOpacity>
                            <TextInput 
                                style={{
                                    height:50,
                                    backgroundColor: colors.card,
                                    borderWidth:1,
                                    borderColor: colors.borderColor,
                                    borderRadius:SIZES.radius,
                                    color:colors.title,
                                    paddingLeft:15,
                                }}
                                placeholder="Search.."
                                placeholderTextColor={colors.text}
                            />
                        </View>
                    </View>
                    
                    <SearchContent data={getData}/>
                    

                </ScrollView>
                {image ?
                    (
                        <View
                            style={{
                                position:'absolute',
                                height:'100%',
                                width:'100%',
                                alignItems:'center',
                                justifyContent:'center',
                            }}
                        >
                            <BlurView
                                style={{
                                    position:'absolute',
                                    height:'100%',
                                    width:'100%',
                                }}
                                blurType="dark"
                                blurAmount={2}
                                reducedTransparencyFallbackColor="white"
                            />
                            <Animatable.View
                                animation="zoomIn" 
                                duration={300}
                                style={{
                                    height:SIZES.height / 1.8,
                                    maxHeight:600,
                                    width:SIZES.width - 30,
                                    maxWidth:400,
                                    backgroundColor:COLORS.white,
                                    borderRadius:SIZES.radius,
                                }}
                                >
                                <View
                                    style={{
                                        paddingHorizontal:15,
                                        paddingVertical:8,
                                        flexDirection:'row',
                                        alignItems:'center',
                                    }}
                                >
                                    <Image
                                        style={{
                                            height:30,
                                            width:30,
                                            borderRadius:30,
                                            marginRight:10,
                                        }}
                                        source={image}
                                    />
                                    <Text style={{...FONTS.font,...FONTS.fontBold}}>fashionstylesguide</Text>
                                </View>
                                <View style={{flex:1}}>

                                    <Image
                                        style={{
                                            height:'100%',
                                            width:'100%',
                                        }}
                                        source={image}
                                    />
                                </View>
                                <View
                                    style={{
                                        flexDirection:'row',
                                        paddingHorizontal:15,
                                        paddingVertical:10,
                                    }}
                                >
                                    <View
                                        style={{
                                            flex:1,
                                            alignItems:'center',
                                        }}
                                    >
                                        <SvgXml
                                            height={20}
                                            width={20}
                                            stroke={COLORS.title}
                                            xml={ICONS.heart}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flex:1,
                                            alignItems:'center',
                                        }}
                                    >

                                         <SvgXml
                                            height={20}
                                            width={20}
                                            fill={COLORS.title}
                                            xml={ICONS.user2}
                                        />
                                    </View>
                                    <View
                                        style={{
                                            flex:1,
                                            alignItems:'center',
                                        }}
                                    >
                                        <SvgXml
                                            height={20}
                                            width={20}
                                            stroke={COLORS.title}
                                            xml={ICONS.send}
                                        />
                                    </View>
                                </View>
                            </Animatable.View>
                        </View>
                    )
                    :
                    null
                }
            </LinearGradient>
        </SafeAreaView>
    )
}

export default SearchScreen;