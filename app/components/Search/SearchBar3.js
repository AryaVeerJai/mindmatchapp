import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const SearchBar3 = (props) => {

    const theme = useTheme();
    const {colors} = theme;

    return (
        <>
            <View>
                <TextInput
                    style={{
                        height:42,
                        paddingLeft:52,
                        backgroundColor: theme.dark ? colors.cardBg : '#e5e5e5',
                        paddingHorizontal:15,
                        borderRadius:8,
                        color:colors.title,
                    }}
                    placeholder='Search'
                    placeholderTextColor={colors.text}
                />
                <TouchableOpacity
                    style={{
                        position:'absolute',
                        height:42,
                        width:42,
                        alignItems:'center',
                        justifyContent:'center',
                        left:5,
                        top:0,
                    }}
                >
                    <FeatherIcon name={'search'} size={20} color={colors.title} />
                </TouchableOpacity>
            </View>
        </>
    );
};


export default SearchBar3;