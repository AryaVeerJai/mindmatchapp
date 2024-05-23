import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { COLORS, SIZES } from '../../constants/theme';

const ToggleStyle2 = (props) => {
    
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
                        offset.value = withSpring(28)
                    }
                }}
                style={[{
                    height:32,
                    width:60,
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
                    <FeatherIcon name={'check'} size={16} color={COLORS.white}/>
                    <FeatherIcon name={'x'} size={16} color={COLORS.white}/>
                </View>
                <Animated.View
                    style={[toggleStyle,{
                        height:28,
                        width:28,
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

export default ToggleStyle2;