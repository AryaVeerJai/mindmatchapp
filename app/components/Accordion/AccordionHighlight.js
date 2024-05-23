import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import Accordion from 'react-native-collapsible/Accordion';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { COLORS, FONTS, SIZES } from '../../constants/theme';

const AccordionHighlight = (props) => {

    const {colors} = useTheme();
    const [activeSections, setActiveSections] = useState([0]);
    const setSections = (sections) => {
        setActiveSections(
        sections.includes(undefined) ? [] : sections
        );
    };
    
    const SECTIONS = [
        {
            icon : 'heart',
            title: 'React Native Facts',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            icon : 'star',
            title: 'Android Development Tools',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
        {
            icon : 'bookmark',
            title: 'Know About ios Development',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        },
    ];

    const AccordionHeader = (item, _, isActive) => {
        return(
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                paddingVertical:12,
                paddingHorizontal:15,
                borderRadius:SIZES.radius,
                backgroundColor: isActive ? COLORS.primary : COLORS.primayLight,
            }}>
                {/* <FontAwesome style={{marginRight:10}} name={item.icon} size={15} color={isActive ? COLORS.white : colors.title}/> */}
                <Text style={[FONTS.font,{color:isActive ? COLORS.white : colors.title,flex:1,fontSize:15,fontFamily:'NunitoSans-SemiBold'}]}>{item.title}</Text>
                <FontAwesome name={isActive ? 'angle-up' : 'angle-down'} size={20} color={isActive ? COLORS.white : colors.title}/>
            </View>
        )
    }
    const AccordionBody = (item, _, isActive) => {
        return(
            <View style={{marginBottom:15,marginTop:10,paddingHorizontal:15}}>
                <Text style={[FONTS.fontSm,{color:colors.text}]}>{item.content}</Text>
            </View>
        )
    }

    return (
        <>
            <Accordion
                sections={SECTIONS}
                sectionContainerStyle={{marginBottom:8}}
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


export default AccordionHighlight;