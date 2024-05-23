import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Accordion from 'react-native-collapsible/Accordion';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLORS, FONTS } from '../../constants/theme';

const AccordionSeprator = (props) => {

    const {colors} = useTheme();
    const [activeSections, setActiveSections] = useState([0]);
    const setSections = (sections) => {
        setActiveSections(
        sections.includes(undefined) ? [] : sections
        );
    };
    
    const SECTIONS = [
        {
            color : '#eb6374',
            icon : 'car',
            title: 'Accordion Header One',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            color : '#a3815d',
            icon : 'behance',
            title: 'Accordion Header Two',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            color : '#9cd986',
            icon : 'send',
            title: 'Accordion Header Three',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
    ];

    const AccordionHeader = (item, _, isActive) => {
        return(
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                paddingVertical:12,
            }}>
                <View
                    style={{
                        height:30,
                        width:30,
                        backgroundColor:item.color,
                        borderRadius:25,
                        marginRight:10,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <FontAwesome name={item.icon} size={13} color={COLORS.white}/>
                </View>
                <Text style={[FONTS.font,FONTS.fontPoppins,{color:colors.title,flex:1}]}>{item.title}</Text>
                <FontAwesome name={isActive ? 'angle-up' : 'angle-down'} size={20} color={colors.title}/>
            </View>
        )
    }
    const AccordionBody = (item, _, isActive) => {
        return(
            <View style={{marginBottom:15}}>
                <Text style={[FONTS.fontSm,{color:colors.text}]}>{item.content}</Text>
            </View>
        )
    }

    return (
        <>
            <Accordion
                sections={SECTIONS}
                sectionContainerStyle={{
                    borderBottomWidth:1,
                    borderColor:colors.borderColor,
                }}
                duration={300}
                activeSections={activeSections}
                onChange={setSections}
                touchableComponent={TouchableOpacity}
                renderHeader={AccordionHeader}
                renderContent={AccordionBody}
            />
        </>
    );
};


export default AccordionSeprator;