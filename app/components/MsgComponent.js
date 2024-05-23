import React from 'react';
import { Pressable, StyleSheet, Text, View, Image } from 'react-native';
import { useTheme } from "@react-navigation/native";
import { COLORS, FONTS, IMAGES } from '../constants/theme';

const MsgComponent = (props) => {
    const {colors} = useTheme();
    return (
        <Pressable style={{marginBottom:10}}>
            <View
                style={props.item.msgType !== 'image' ?[styles.messageBox,{
                    backgroundColor:props.sender ? COLORS.secondary : colors.card,
                    alignSelf:props.sender ? 'flex-end' : 'flex-start',
                    borderRadius:10,
                },props.sender ? {
                    borderBottomRightRadius:0,
                }:{
                    borderTopLeftRadius:0,
                }]
            : [{
                alignSelf:props.sender ? 'flex-end' : 'flex-start',
            }]
        }
            >
                {
                    
                    props.item.msgType === 'image' ? 
                    // <Image style={{ width: 50, height: 50 }} source={{ uri: `${props.item.message}` }} /> // Use regular Image component
                    <Image 
                        style={{ width: 200, height: 200, resizeMode: 'cover', borderRadius: 10 }} // Adjust dimensions and resizeMode as needed
                        source={{ uri: props.item.message }} 
                    />
                    // <Image style={{width: 10}} source={props.item.message ? {uri : props.item.message} : IMAGES.user} />
                    :
                    <Text style={{...FONTS.font,top:-1,color:props.sender ? COLORS.white : colors.title}}>{props.item.message}</Text>
                }
                {/* <Text style={{...FONTS.font,top:-1,color:props.sender ? COLORS.white : colors.title}}>{props.item.message}</Text> */}
                {/* <Text style={{...FONTS.font,top:-1,color:props.sender ? COLORS.white : colors.title}}>{props.item.msgType}</Text> */}
            </View>
            <Text style={{...FONTS.fontXs,fontSize:10,marginHorizontal:12,color:'#949497',marginTop:2,alignSelf:props.sender ? 'flex-end' : 'flex-start'}}>{props.item.sendTime}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({

    messageBox:{
        paddingHorizontal:15,
        paddingVertical:10,
        marginHorizontal:12,
    }
  
})

export default MsgComponent;