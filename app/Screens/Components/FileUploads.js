import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View, PermissionsAndroid, Platform } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import FeatherIcon from 'react-native-vector-icons/Feather';
import uuid from 'react-native-uuid';
import Header from '../../layout/Header';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES } from '../../constants/theme';
import Button from '../../components/Button/Button';

const FileUploads = (props) => {

    const {colors} = useTheme();
    const [imageData , setImageData] = useState([]);

    const UploadFile = async (type) => {
        if(Platform.OS === 'ios'){
            let options = {
                mediaType: type,
                maxWidth: 200,
                maxHeight: 200,
                quality: 1,
            };
            launchImageLibrary(options, (response) => {
                if(!response.didCancel){
                    setImageData([...imageData , {id : uuid.v4(),image : response.assets[0].uri}])
                    //console.log('Response = ', response);
                    //console.log('=======',imageData);
                }
            })
        }else{
            try {
                await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
                ]).then((result) => {
                    if (result['android.permission.CAMERA']
                    && result['android.permission.READ_EXTERNAL_STORAGE'] === 'granted') {
                        let options = {
                            mediaType: type,
                            maxWidth: 200,
                            maxHeight: 200,
                            quality: 1,
                        };
                        launchImageLibrary(options, (response) => {
                            if(!response.didCancel){
                                setImageData([...imageData , {id : uuid.v4(),image : response.assets[0].uri}])
                                //console.log('Response = ', response);
                                //console.log('=======',imageData);
                            }
                        })
                    }
                });
            } catch (err) {
                console.warn(err);
            }
        }
    }

    const removeImageItem = (index) => {
        setImageData([
            ...imageData.slice(0, index),
            ...imageData.slice(index + 1, imageData.length)
        ]);
    }

    return (
        <>
            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'File Upload'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={[styles.card,{
                                backgroundColor: colors.cardBg,
                            }]}>
                                <View style={{
                                    //borderBottomWidth:1,
                                    borderBottomColor:colors.borderColor,
                                    //paddingBottom:8,
                                    marginBottom:15,
                                }}>
                                    <Text style={{...FONTS.h5, color:colors.title}}>Upload Image</Text>
                                </View>
                                
                                {imageData.length == 0 &&
                                    <TouchableOpacity
                                        onPress={() => UploadFile('photo')}
                                        activeOpacity={.8}
                                        style={{
                                            height:120,
                                            borderWidth:2,
                                            borderStyle:'dashed',
                                            borderRadius:SIZES.radius,
                                            marginBottom:10,
                                            borderColor:colors.borderColor,
                                            alignItems:'center',
                                            justifyContent:'center',
                                        }}
                                    >
                                        <FeatherIcon name='image' color={colors.borderColor} size={40}/>
                                    </TouchableOpacity>
                                }
                                <View style={{
                                    flexDirection:'row',
                                    flexWrap:'wrap',
                                    marginHorizontal:-5,
                                    marginBottom:10,
                                }}>
                                
                                { imageData && imageData.length > 0 && imageData.map((data , index) => {
                                    return(
                                        <View key={index} style={{width:'33.33%',paddingHorizontal:5}}>
                                            <View
                                                style={{
                                                    height:110,
                                                    position:'relative',
                                                    marginBottom:10,
                                                }}
                                            >
                                                <TouchableOpacity
                                                    onPress={() => removeImageItem(index)}
                                                    activeOpacity={.8}
                                                    style={{
                                                        height:25,
                                                        width:25,
                                                        borderRadius:20,
                                                        position:'absolute',
                                                        top:-5,
                                                        right:-5,
                                                        zIndex:1,
                                                        alignItems:'center',
                                                        justifyContent:'center',
                                                        backgroundColor:COLORS.danger,
                                                    }}
                                                >
                                                    <FeatherIcon name='x' size={16} color={COLORS.white}/>
                                                </TouchableOpacity>
                                                <Image 
                                                    source={{uri : data.image}}
                                                    style={{
                                                        height:'100%',
                                                        width:'100%',
                                                        borderRadius:SIZES.radius,
                                                    }}
                                                />
                                            </View>
                                        </View>
                                    )
                                })}
                                </View>

                                <Button onPress={() => UploadFile('photo')} title={'Upload image'}/>                            

                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    card : {
        padding:15,
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
    },
})

export default FileUploads;