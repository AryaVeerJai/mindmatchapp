import React from "react";
import { 
  View,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import { useTheme } from '@react-navigation/native';
import { Image, SvgXml } from "react-native-svg";
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Octicons from "react-native-vector-icons/Octicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import FeatherIcon from "react-native-vector-icons/Feather";
import { COLORS, FONTS, ICONS, SIZES } from "../constants/theme";
import DropShadow from "react-native-drop-shadow";

const Header = (props) => {
    
    const {colors} = useTheme();
    const navigation = useNavigation();

    return (
        <>
        <View
            style={[props.transparent && {
                position:'absolute',
                zIndex:1,
                width:'100%',
            }]}
        >
            <DropShadow
                style={[{
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 5,
                        height: 5,
                    },
                    shadowOpacity: props.bgWhite ? .15 : 0,
                    shadowRadius: 5,
                }, Platform.OS === 'ios' && {
                    backgroundColor: props.bgWhite ? colors.card  : 'transparent',
                }]}
            >
            <View style={[{
                paddingHorizontal:15,
                paddingVertical:8,
                flexDirection:'row',
                alignItems:'center',
                borderBottomWidth:1,
                borderColor:colors.borderColor,
                // backgroundColor: '#111828',
            },props.transparent && {
                borderBottomWidth:0,
                backgroundColor: '#111828',
            },props.bgWhite && {
                // backgroundColor: colors.card,
                backgroundColor: '#111828',
                borderBottomWidth:0,
                zIndex:1,
            }]}>
                {props.sideMenu && 
                    <TouchableOpacity
                        onPress={() => navigation.openDrawer()}
                        style={{
                            height:48,
                            width:48,
                            marginRight:5,
                            marginLeft:-8,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <FeatherIcon style={{bottom:2}} color={colors.title} size={20} name="menu"/>
                    </TouchableOpacity>
                }
                {props.leftIcon === "close" &&
                    <TouchableOpacity
                        accessible={true}
                        accessibilityLabel="Go back"
                        accessibilityHint="Navigates to the previous screen"
                        onPress={()=> navigation.goBack()}
                        style={{
                            height:45,
                            width:45,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:SIZES.radius,
                            marginRight:10,
                        }}
                    >
                        <SvgXml
                            height={30}
                            width={30}
                            stroke={colors.title}
                            xml={ICONS.close}
                        />
                    </TouchableOpacity>
                }
                {props.leftIcon === "back" &&
                    <TouchableOpacity
                        onPress={()=> {props.backNavigate ? navigation.navigate(props.backNavigate) : navigation.goBack()}}
                        style={{
                            height:45,
                            width:45,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:SIZES.radius,
                            marginRight:10,
                        }}
                    >
                        {/* <MaterialIcons name='arrow-back' color={props.bgImage ? COLORS.white : colors.title} size={22}/> */}
                        <MaterialIcons name='arrow-back' color={props.bgImage ? COLORS.white : colors.white} size={22}/>
                    </TouchableOpacity>
                }
                <Text style={[FONTS.h4,{
                    // color:colors.title,
                    color:'white',
                    flex:1
                    },props.bgImage && {color: COLORS.white},props.titleCenter && {textAlign:'center',marginRight:55}]}>{props.title}</Text>
                {props.rightIcon2 === "pages" &&
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('pages')}
                        style={{
                            height:45,
                            width:45,
                            marginRight:10,
                            backgroundColor:props.bgImage ? 'rgba(255,255,255,.15)' : COLORS.primayLight,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:SIZES.radius,
                        }}
                    >
                        <FeatherIcon name='file' color={COLORS.primary} size={22}/>
                       
                    </TouchableOpacity>
                }
                {props.rightIcon === "notification" &&
                    <TouchableOpacity
                        accessible={true}
                        accessibilityLabel="Notifications"
                        accessibilityHint="show notifications"
                        onPress={()=> navigation.navigate('Notification')}
                        // onPress={()=> navigation.navigate('NotificationsScreen')}
                        style={{
                            height:45,
                            width:45,
                            // backgroundColor:COLORS.primayLight,
                            backgroundColor:'#ffffff00',
                            alignItems:'center',
                            justifyContent:'center',
                            borderColor: '#ffffff16',
                            borderWidth: 2,
                            // borderRadius:SIZES.radius,
                            borderRadius:50,
                            padding: 5,
                        }}
                    >
                        <View
                            style={{
                                height:10,
                                width:10,
                                // backgroundColor:COLORS.secondary,
                                backgroundColor:'red',
                                borderRadius:5,
                                borderWidth:2,
                                borderColor:'red',
                                position:'absolute',
                                top:0,
                                right:0,
                                zIndex:1,
                            }}
                        />
                        {/* <SvgXml
                            // fill={COLORS.primary}
                            fill={'white'}
                            xml={ICONS.notification}
                        /> */}
                        <SvgXml
                            // fill={COLORS.primary}
                            // fill={'white'}
                            xml={ICONS.bellnew}
                        />
                        {/* <FontistoIcon size={25} name="bell" color={'white'} /> */}
                        {/* <MaterialCommunityIcons size={25} name="bell-outline" color={'white'} /> */}
                        {/* <Image style={{width: '10'}} source={require('../assets/imagesnew/bell.png')} /> */}
                    </TouchableOpacity>
                }
                {props.rightIcon === "settings" &&
                    <TouchableOpacity
                        onPress={()=> navigation.navigate('Settings')}
                        style={{
                            height:45,
                            width:45,
                            backgroundColor:props.bgImage ? 'rgba(255,255,255,.15)' : COLORS.primayLight,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:SIZES.radius,
                        }}
                    >
                        <SvgXml
                            stroke={props.bgImage ? COLORS.white : COLORS.primary}
                            xml={ICONS.settings}
                        />
                    </TouchableOpacity>
                }

                {props.rightIcon === "next" &&
                    <TouchableOpacity
                        style={{
                            height:45,
                            width:45,
                            backgroundColor:COLORS.primayLight,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:SIZES.radius,
                        }}
                    >
                        <SvgXml
                            stroke={COLORS.primary}
                            xml={ICONS.arrowRight}
                        />
                    </TouchableOpacity>
                }
            </View>
            </DropShadow>
        </View>
        </>
    );
};

export default Header;
