import React from 'react';
import { Platform, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import DropShadow from 'react-native-drop-shadow';

const SearchBar = (props) => {

    const {colors} = useTheme();

    return (
        <>
            <DropShadow
                style={[{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 4,
                        height: 4,
                    },
                    shadowOpacity: .15,
                    shadowRadius: 5,
                },Platform.OS === 'ios' && {
                    backgroundColor:colors.cardBg,
                    borderRadius:10,
                }]}
                >
                <TextInput
                    style={{
                        height:48,
                        backgroundColor:colors.cardBg,
                        paddingHorizontal:15,
                        borderRadius:10,
                        color:colors.title,
                    }}
                    placeholder='Search Article'
                    placeholderTextColor={colors.text}
                />
                <TouchableOpacity
                    style={{
                        position:'absolute',
                        height:48,
                        width:48,
                        alignItems:'center',
                        justifyContent:'center',
                        right:0,
                        top:0,
                    }}
                >
                    <FeatherIcon name={'search'} size={22} color={colors.title} />
                </TouchableOpacity>
            </DropShadow>
        </>
    );
};


export default SearchBar;