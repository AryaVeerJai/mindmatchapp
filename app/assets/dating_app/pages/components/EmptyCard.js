import React from 'react';
import { useTheme } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import { COLORS, FONTS, IMAGES } from '../../constants/theme';
import Button from '../../components/Button/Button';

const EmptyCard = () => {

    const {colors} = useTheme();

    return (
        <>
            <View
                style={{
                    flex:1,
                    backgroundColor:colors.cardBg,
                    marginHorizontal:15,
                    borderRadius:20,
                    marginBottom:12,
                    justifyContent:'center',
                    paddingHorizontal:30,
                }}
            >
                <View style={{alignItems:'center'}}>
                    <View
                        style={{
                            borderRadius:100,
                            borderWidth:5,
                            borderColor:colors.cardBg,
                            marginBottom:20,
                            shadowColor: "rgba(0,0,0,.4)",
                            shadowOffset: {
                                width: 0,
                                height: 4,
                            },
                            shadowOpacity: 0.30,
                            shadowRadius: 4.65,

                            elevation: 8,
                        }}
                    >
                        <Image
                            style={{
                                height:100,
                                width:100,
                                borderRadius:100,
                            }}
                            source={IMAGES.user3}
                        />
                    </View>
                </View>
                <Text style={{...FONTS.font,textAlign:'center',color:colors.text,marginBottom:25}}>You've run out of people. Go global to see people around the world.</Text>
                <Button color={COLORS.primary4} btnRounded title="Go global"/>
            </View>
        </>
    );
};


export default EmptyCard;