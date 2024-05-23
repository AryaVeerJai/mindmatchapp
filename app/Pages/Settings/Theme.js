import React, {useState, useEffect} from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { RadioButton } from 'react-native-paper';
import Header from '../../layout/Header';
import themeContext from '../../constants/themeContext';
import { COLORS, FONTS } from '../../constants/theme';

const Theme = () => {

    const theme = useTheme();
    const {colors} = theme;
    const [value, setValue] = useState('');

    const {setDarkTheme,setLightTheme} = React.useContext(themeContext);


    useEffect(()=> {
        if(theme.dark){
            setValue('dark');
        }else{
            setValue('light');
        }
    },[])

    const handleTheme = (val) => {
        if(val === "light"){
            setLightTheme();
        }else if(val === "dark"){
            setDarkTheme();
        }
    }

    return (
        <>
            {/* <SafeAreaView style={{flex:1,backgroundColor:colors.background}}> */}
            <SafeAreaView style={{flex:1, backgroundColor:'#111828'}}>
                <Header title={'Set theme'} leftIcon={'back'}/>
                <ScrollView contentContainerStyle={{paddingTop:15}}>
                    <RadioButton.Group 
                        onValueChange={(value) => {setValue(value);handleTheme(value)}} 
                        value={value}
                    >
                        {/* <RadioButton.Item uncheckedColor={colors.title} color={COLORS.primary} labelStyle={{...FONTS.h6,color:colors.title}} label="Light" value="light" /> */}
                        <RadioButton.Item uncheckedColor={colors.title} color={'#55288E'} labelStyle={{...FONTS.h6,color:colors.title}} label="Light" value="light" />
                        {/* <RadioButton.Item uncheckedColor={colors.title} color={COLORS.primary} labelStyle={{...FONTS.h6,color:colors.title}} label="Dark" value="dark" /> */}
                        <RadioButton.Item uncheckedColor={colors.title} color={'#55288E'} labelStyle={{...FONTS.h6,color:colors.title}} label="Dark" value="dark" />
                    </RadioButton.Group>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};


export default Theme;