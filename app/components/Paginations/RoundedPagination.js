import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { COLORS, FONTS, SIZES } from '../../constants/theme';

const RoundedPagination = (props) => {
    
    const {colors} = useTheme();

    const [active , setActive] = useState(2);

    return (
        <>
            <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                    style={[styles.pagItem,{backgroundColor:colors.card}]}
                >
                    <FontAwesome name={'angle-left'} size={20} color={colors.text}/>
                </TouchableOpacity>
                {[1,2,3,4].map((data,index) => {
                    return(
                        <TouchableOpacity 
                        onPress={() => setActive(data)}
                        key={index}
                        style={[styles.pagItem,{backgroundColor:colors.card},data == active && {backgroundColor:COLORS.primary}]}
                        >
                            <Text style={[{...FONTS.font,...FONTS.fontBold,color:colors.text},data == active && {color:COLORS.white}]}>{data}</Text>
                        </TouchableOpacity>
                    )
                })}
                <TouchableOpacity
                    style={[styles.pagItem,{backgroundColor:colors.card}]}
                >
                    <FontAwesome name={'angle-right'} size={20} color={colors.text}/>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    pagItem : {
        height:40,
        width:40,
        marginHorizontal:5,
        borderRadius:40,
        alignItems:'center',
        justifyContent:'center',
        shadowColor: "rgba(0,0,0,.6)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    }
})

export default RoundedPagination;