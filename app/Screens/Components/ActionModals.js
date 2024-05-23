import { useTheme } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Modal, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ripple from 'react-native-material-ripple';
import { SvgXml } from 'react-native-svg';
import FeatherIcon from "react-native-vector-icons/Feather";
import LoginModal from '../../components/Modal/LoginModal';
import OptionBar from '../../components/Modal/OptionBar';
import RegisterModal from '../../components/Modal/RegisterModal';
import SuccessModal from '../../components/Modal/SuccessModal';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { FONTS, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';

const option = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect x="0" y="0" width="24" height="24"/>
    <path d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z" fill="#FE9063" opacity="0.3"/>
    <path d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z" fill="#FE9063"/>
    <rect fill="#FE9063" opacity="0.3" x="10" y="9" width="7" height="2" rx="1"/>
    <rect fill="#FE9063" opacity="0.3" x="7" y="9" width="2" height="2" rx="1"/>
    <rect fill="#FE9063" opacity="0.3" x="7" y="13" width="2" height="2" rx="1"/>
    <rect fill="#FE9063" opacity="0.3" x="10" y="13" width="7" height="2" rx="1"/>
    <rect fill="#FE9063" opacity="0.3" x="7" y="17" width="2" height="2" rx="1"/>
    <rect fill="#FE9063" opacity="0.3" x="10" y="17" width="7" height="2" rx="1"/>
</g>
</svg>`;

const success = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect x="0" y="0" width="24" height="24"/>
    <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#38a957" opacity="0.3"/>
    <path d="M11.1750002,14.75 C10.9354169,14.75 10.6958335,14.6541667 10.5041669,14.4625 L8.58750019,12.5458333 C8.20416686,12.1625 8.20416686,11.5875 8.58750019,11.2041667 C8.97083352,10.8208333 9.59375019,10.8208333 9.92916686,11.2041667 L11.1750002,12.45 L14.3375002,9.2875 C14.7208335,8.90416667 15.2958335,8.90416667 15.6791669,9.2875 C16.0625002,9.67083333 16.0625002,10.2458333 15.6791669,10.6291667 L11.8458335,14.4625 C11.6541669,14.6541667 11.4145835,14.75 11.1750002,14.75 Z" fill="#38a957"/>
</g>
</svg>`;
const login = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <rect x="0" y="0" width="24" height="24"/>
    <rect fill="#3899f3" opacity="0.3" transform="translate(9.000000, 12.000000) rotate(-270.000000) translate(-9.000000, -12.000000) " x="8" y="6" width="2" height="12" rx="1"/>
    <path d="M20,7.00607258 C19.4477153,7.00607258 19,6.55855153 19,6.00650634 C19,5.45446114 19.4477153,5.00694009 20,5.00694009 L21,5.00694009 C23.209139,5.00694009 25,6.7970243 25,9.00520507 L25,15.001735 C25,17.2099158 23.209139,19 21,19 L9,19 C6.790861,19 5,17.2099158 5,15.001735 L5,8.99826498 C5,6.7900842 6.790861,5 9,5 L10.0000048,5 C10.5522896,5 11.0000048,5.44752105 11.0000048,5.99956624 C11.0000048,6.55161144 10.5522896,6.99913249 10.0000048,6.99913249 L9,6.99913249 C7.8954305,6.99913249 7,7.89417459 7,8.99826498 L7,15.001735 C7,16.1058254 7.8954305,17.0008675 9,17.0008675 L21,17.0008675 C22.1045695,17.0008675 23,16.1058254 23,15.001735 L23,9.00520507 C23,7.90111468 22.1045695,7.00607258 21,7.00607258 L20,7.00607258 Z" fill="#3899f3" fill-rule="nonzero" opacity="0.3" transform="translate(15.000000, 12.000000) rotate(-90.000000) translate(-15.000000, -12.000000) "/>
    <path d="M16.7928932,9.79289322 C17.1834175,9.40236893 17.8165825,9.40236893 18.2071068,9.79289322 C18.5976311,10.1834175 18.5976311,10.8165825 18.2071068,11.2071068 L15.2071068,14.2071068 C14.8165825,14.5976311 14.1834175,14.5976311 13.7928932,14.2071068 L10.7928932,11.2071068 C10.4023689,10.8165825 10.4023689,10.1834175 10.7928932,9.79289322 C11.1834175,9.40236893 11.8165825,9.40236893 12.2071068,9.79289322 L14.5,12.0857864 L16.7928932,9.79289322 Z" fill="#3899f3" fill-rule="nonzero" transform="translate(14.500000, 12.000000) rotate(-90.000000) translate(-14.500000, -12.000000) "/>
</g>
</svg>`;
const register = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1" class="svg-main-icon">
<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <polygon points="0 0 24 0 24 24 0 24"/>
    <path d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920211 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z" fill="#e95555" fill-rule="nonzero" opacity="0.3"/>
    <rect fill="#e95555" x="6" y="11" width="9" height="2" rx="1"/>
    <rect fill="#e95555" x="6" y="15" width="5" height="2" rx="1"/>
</g>
</svg>`;


const ActionModals = (props) => {

    const {colors} = useTheme();
    const refRBSheet = useRef();
    const [activeSheet , setActiveSheet] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const ActionData = [
        {
            icon : option,
            title : "Option Modal",
            sheet : 'option',
        },
        {
            icon : success,
            title : "Success Modal",
            sheet : 'success',
        },
        {
            icon : login,
            title : "Login",
            sheet : 'login',
        },
        {
            icon : register,
            title : "Register",
            sheet : 'register',
        },
    ]

    return (
        <>


            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    flex:1,
                    position:'relative',
                }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => setModalVisible(false)}
                        style={{
                            position:'absolute',
                            height:'100%',
                            width:'100%',
                            backgroundColor:'rgba(0,0,0,.3)',
                        }}
                    />
                    {activeSheet === "option" ?
                        <OptionBar/> :
                        activeSheet === "success" ?
                        <SuccessModal/> :
                        activeSheet === "login" ?
                        <LoginModal close={setModalVisible}/> :
                        activeSheet === "register" ?
                        <RegisterModal close={setModalVisible}/>
                        :
                        <SuccessModal/>
                    }
                </View>
            </Modal>

            <SafeAreaView style={{flex:1,backgroundColor:colors.card}}>
                <View style={{
                    flex:1,
                    backgroundColor:colors.background,
                }}>
                    <Header title={'Modal Box'} bgWhite leftIcon={'back'}/>
                    <ScrollView>
                        <View style={GlobalStyleSheet.container}>
                            <View style={{
                                backgroundColor:colors.cardBg,
                                borderRadius:SIZES.radius,
                                paddingVertical:10,
                                //overflow:'hidden',
                                shadowColor: "rgba(0,0,0,.8)",
                                shadowOffset: {
                                    width: 0,
                                    height: 4,
                                },
                                shadowOpacity: 0.30,
                                shadowRadius: 4.65,

                                elevation: 8,
                            }}>
                                {ActionData.map((data,index) => {
                                    return(
                                        <Ripple
                                            onPress={() => {setActiveSheet(data.sheet);setModalVisible(true)}}
                                            key={index}
                                            style={[{
                                                flexDirection:'row',
                                                alignItems:'center',
                                                paddingHorizontal:15,
                                                paddingVertical:12,
                                                borderBottomWidth:1,
                                                borderColor:colors.borderColor,
                                            },
                                            index === ActionData.length - 1 && {
                                                borderBottomWidth:0,
                                            }
                                            ]}
                                        >
                                            <SvgXml
                                                xml={data.icon}
                                                style={{marginRight:10}}
                                            />
                                            <Text style={{...FONTS.h6,flex:1,color:colors.title}}>{data.title}</Text>
                                            <FeatherIcon color={colors.text} name={'chevron-right'} size={22}/>
                                        </Ripple>
                                    )
                                })}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        </>
    );
};

export default ActionModals;