import React from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Platform } from 'react-native';

const Divider = (props) => {
    const {colors} = useTheme();
    return (
        <>
            {Platform.OS === "ios" ?
                <View style={{ 
                    overflow: 'hidden' ,
                    marginTop:15,
                    marginBottom:15, 
                    ...props.style,
                }}>
                    <View
                        style={{
                            borderStyle: props.dashed ? 'dashed' : 'solid',
                            borderWidth: 1,
                            borderColor: props.color ? props.color : colors.borderColor,
                            margin: -2,
                            marginTop: 0,
                        }}>
                        <View style={{ height: 2 }} />
                    </View>
                </View>
                :
                <View
                    style={{
                        borderBottomWidth:1, 
                        borderColor: props.color ? props.color : colors.borderColor,
                        borderStyle: props.dashed ? 'dashed' : 'solid',
                        marginTop:15,
                        marginBottom:15,
                        ...props.style,
                    }}
                />
            }
        </>
    );
};


export default Divider;