import React, { useState } from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import CustomButton from '../../components/CustomButton';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { SIZES } from '../../constants/theme';
import Header from '../../layout/Header';

const Language = () => {
    const {colors} = useTheme();
    const [selectedLanguage, setSelectedLanguage] = useState();

    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
            <Header title={'Language'} leftIcon={'back'}/>
            <ScrollView>
                <View style={GlobalStyleSheet.container}>
                    <View
                        style={[{
                            borderWidth:1,
                            borderColor:colors.borderColor,
                            justifyContent:'center',
                            borderRadius:SIZES.radius,
                            marginBottom:15,
                        },Platform.OS === 'android' && {
                            height:50,
                        }]}
                    >
                        <Picker
                            style={{
                                color:colors.title
                            }}
                            
                            dropdownIconColor={colors.title}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item color={colors.title} label="English" value="English" />
                            <Picker.Item color={colors.title} label="Hindi" value="hindi" />
                            <Picker.Item color={colors.title} label="French" value="french" />
                            <Picker.Item color={colors.title} label="Germeny" value="germeny" />
                        </Picker>
                    </View>
                    
                    <CustomButton title={'Save'}/>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

    
    
})

export default Language;