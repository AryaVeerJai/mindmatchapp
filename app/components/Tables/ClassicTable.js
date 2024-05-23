import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { FONTS, SIZES } from '../../constants/theme';

const ClassicTable = (props) => {

    const {colors} = useTheme();

    const TableData = [
        {
            name : "John Doe",
            email : "johndoe@gmail.com",
            age : 20,
        },
        {
            name : "John Doe",
            email : "johndoe@gmail.com",
            age : 20,
        },
        {
            name : "John Doe",
            email : "johndoe@gmail.com",
            age : 20,
        },
        {
            name : "John Doe",
            email : "johndoe@gmail.com",
            age : 20,
        },
    ]

    return (
        <>
            <View style={{
                backgroundColor: colors.cardBg,
                borderRadius:SIZES.radius,
                marginBottom:15,
                shadowColor: "rgba(0,0,0,.6)",
                shadowOffset: {
                    width: 0,
                    height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,

                elevation: 8,
            }}>
                <View
                    style={{
                        flex: 1,
                        alignSelf: 'stretch',
                        flexDirection: 'row',
                        borderBottomWidth:1,
                        borderColor:colors.borderColor,
                    }}
                >
                    <Text style={{...styles.theadItem,flex:.6,color:colors.textLight,paddingLeft:15}}>Name</Text>
                    <Text style={{...styles.theadItem,color:colors.textLight}}>Email</Text>
                    <Text style={{...styles.theadItem,flex:0.5,color:colors.textLight,textAlign:'right',paddingRight:15}}>Age</Text>
                </View>
                {TableData.map((data,index) => {
                    return(
                        <View
                            key={index}
                            style={{
                                flex: 1,
                                alignSelf: 'stretch',
                                flexDirection: 'row',
                            }}
                        >
                            <Text style={{...styles.tbodyItem,flex:.6,paddingLeft:15,color:colors.title}}>{data.name}</Text>
                            <Text numberOfLines={1} style={{...styles.tbodyItem,color:colors.title}}>{data.email}</Text>
                            <Text style={{...styles.tbodyItem,flex:0.5,textAlign:'right',paddingRight:15,color:colors.title}}>{data.age}</Text>
                        </View>
                    )
                })}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    theadItem:{
        flex: 1, 
        alignSelf: 'stretch',
        paddingHorizontal:10,
        paddingVertical:12,
        ...FONTS.font,
    },
    tbodyItem:{
        flex: 1, 
        alignSelf: 'stretch',
        paddingHorizontal:10,
        paddingVertical:12,
        ...FONTS.font,
        ...FONTS.fontBold,
    }
})

export default ClassicTable;