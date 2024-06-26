import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

const ToggleStyle3 = (props) => {
    
    const {colors} = useTheme();

    const [active , setActive] = useState(false);

    const offset = useSharedValue(0);
    const toggleStyle = useAnimatedStyle(() => { 
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
            <TouchableOpacity
                onPress={() => { 
                    setActive(!active);
                    if(active){
                        offset.value = withSpring(0)
                    }else{
                        offset.value = withSpring(65)
                    }
                }}
                style={[{
                    height:32,
                    width:120,
                    backgroundColor : active ? COLORS.success : COLORS.danger,
                    borderRadius:30,
                }]}
            >
                <View
                    style={{
                        position:'absolute',
                        height:'100%',
                        width:'100%',
                        flexDirection:'row',
                        alignItems:'center',
                        paddingHorizontal:4,
                        justifyContent:'space-around',
                    }}
                >
                    <Text style={{...FONTS.font,...FONTS.fontBold,fontSize:10,color:COLORS.white,}}><FeatherIcon name='file-text' /> Text</Text>
                    <Text style={{...FONTS.font,...FONTS.fontBold,fontSize:10,color:COLORS.white, gap: 10}}><FeatherIcon name='image' /> Image</Text>
                </View>
                <Animated.View
                    style={[toggleStyle,{
                        height:28,
                        width:50,
                        backgroundColor:'#fff',
                        borderRadius:30,
                        top:2,
                        left:2,
                    }]}
                />
            </TouchableOpacity>
        </>
    );
};

export default ToggleStyle3;