import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';
import { COLORS, ICONS } from '../constants/theme';

const LikeBtn = props => {

    const liked = useSharedValue(0);
    const outlineStyle = useAnimatedStyle(() => {
        return {
          transform: [
            {
              scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP),
            },
          ],
        };
    });
    const fillStyle = useAnimatedStyle(() => {
        return {
            transform: [
            {
                scale: liked.value,
            },
            ],
        };
    });

    const handleLike = () => {
        liked.value = withSpring(liked.value ? 0 : 1)
    }

    return (
        <Pressable
            accessible={true}
            accessibilityLabel="Like Btn"
            accessibilityHint="Like this item"
            onPress={() => {handleLike()}}
            style={{
                height:50,
                width:50,
                alignItems:'center',
                justifyContent:'center',
            }}    
        >
            <Animated.View style={[StyleSheet.absoluteFillObject,outlineStyle,{alignItems:'center',justifyContent:'center'}]}>
                <SvgXml
                    height={25}
                    width={25}
                    stroke={COLORS.white}
                    xml={ICONS.heart}
                />
            </Animated.View>

            <Animated.View style={fillStyle}>
                <SvgXml
                    height={25}
                    width={25}
                    xml={ICONS.heartFill}
                />
            </Animated.View>
        </Pressable>
    );
};


export default LikeBtn;