import React, {useEffect} from 'react';
import Animated, { Easing, Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated';
import { COLORS } from '../../constants/theme';

const PulseAnimation = () => {

    // Create shared Value
    const animation = useSharedValue(0);
    
    // We repeatedly doing shared value from 0 to 1
    useEffect(() => {
        animation.value = 
        withRepeat(
            withTiming(1, {
            duration: 2000,
            easing: Easing.linear,
            }),
            -1,
            false
        );
    }, []);
    
    // when component mount. scale the component from 0 to 1.
    // also we used interpolate for decreasing opacity. 0.6 to 0
    
    const animatedStyles = useAnimatedStyle(() => {
        const opacity = interpolate(
            animation.value,
            [0, 1],
            [0.2, 0],
            Extrapolate.CLAMP
        );
        return {
            opacity: opacity,
            transform: [{ scale: animation.value }],
        };
    });
   // console.log(animatedStyles);
    return (
        <>
            <Animated.View
                style={[animatedStyles,{
                    height:220,
                    width:220,
                    borderRadius:192,
                    position:'absolute',
                    backgroundColor: COLORS.primary4,
                }]}
            />
        </>
    );
};

export default PulseAnimation;