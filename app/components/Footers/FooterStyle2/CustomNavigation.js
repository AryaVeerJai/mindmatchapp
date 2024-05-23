import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS, FONTS, IMAGES, SIZES } from '../../../constants/theme';

const CustomNavigation = ({state,navigation,descriptors}) => {
    
    const {colors} = useTheme();

    const offset = useSharedValue((SIZES.width - 20) / 2.5);

    const tabShapeStyle = useAnimatedStyle(() => { 
        return {
            transform: [
                { 
                    translateX:  offset.value
                }
            ],
        };
    });

    return (
        <>
            <View style={{
                height:60,
                flexDirection:'row',
                position:'absolute',
                width:'auto',
                left:10,
                right:10,
                bottom:10,
                borderRadius: 20,
                backgroundColor: colors.card,
                shadowColor: "rgba(0,0,0,.6)",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,

                elevation: 8,
            }}>
                <Animated.View
                    style={[tabShapeStyle]}
                >
                    <View style={{
                        width:(SIZES.width - 20) / 5,
                        position:'absolute',
                        zIndex:1,
                        top: 7.5,
                        left:0,
                        alignItems:'center',
                        justifyContent:'center',
                    }}>
                        <View
                            style={{
                                height:45,
                                width:45,
                                borderRadius:45,
                                backgroundColor:COLORS.primary,
                            }}
                        />
                    </View>
                </Animated.View>
                {state.routes.map((route, index) => {

                    const { options } = descriptors[route.key];
                    const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                    const isFocused = state.index === index;
                    
                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate({ name: route.name, merge: true });
                        }

                        if(route.name == "Home"){
                            var a =  0;

                        }else if(route.name == "Markets"){
                            var a =  (SIZES.width - 20) / 5;
                        }else if(route.name == "Change"){
                            var a =  (SIZES.width - 20) / 2.5;
                        }
                        else if(route.name == "Wallet"){
                            var a =  (SIZES.width - 20) / 2.5 + (SIZES.width - 20) / 5;
                        }
                        else if(route.name == "Profile"){
                            var a =  (SIZES.width - 20) - (SIZES.width - 20) / 5;
                        }

                        var b = withSpring(a);
                        offset.value = b

                    }

                    return(
                        <View style={styles.tabItem} key={index}>
                            <TouchableOpacity
                                style={styles.tabLink}
                                onPress={onPress}
                            >
                                <Image
                                    style={{
                                        height:22,
                                        width:22,
                                        resizeMode:'contain',
                                        opacity:isFocused ? 1 : .6,
                                        tintColor:isFocused ? COLORS.white : colors.text,
                                    }}
                                    source={
                                        label === "Home" ? IMAGES.home2 :
                                        label === "Markets" ? IMAGES.heart:
                                        label === "Change" ? IMAGES.collage:
                                        label === "Wallet" ? IMAGES.blog :
                                        label === "Profile" && IMAGES.profile2
                                    }
                                />
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
        </>
    );
};



const styles = StyleSheet.create({
    tabLink:{
        alignItems:'center',
    },
    tabItem:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    navText:{
        ...FONTS.fontSm,
    }
})


export default CustomNavigation;