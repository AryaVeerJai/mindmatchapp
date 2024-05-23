
import React, { useState } from 'react';
import { 
    ActivityIndicator,
    Image,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
} from 'react-native';
import { useDispatch } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { SvgXml } from 'react-native-svg';
import database from '@react-native-firebase/database';
import messaging from '@react-native-firebase/messaging';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import CustomButton from '../../components/CustomButton';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, SIZES, IMAGES, ICONS } from '../../constants/theme';
import Auth from "../../Service/Auth";
import { setUser } from '../../Redux/reducer/user';


const SignIn = (props) => {

    const dispatch = useDispatch();

    const [passwordShow , setPasswordShow ] = useState(true);
    const [loading , setLoading ] = useState(false);
    
    const handndleShowPassword = () => {
        setPasswordShow(!passwordShow);
    }

    const [email , setemail] = useState('');
    const [pass , setpass] = useState('');
    const loginUser = async () => {
        try{
            // const isUserCreated = await auth().createUserWithEmailAndPassword(email, pass)
            // console.log(isUserCreated)
            console.log('Email: ',email, ' Password: ',pass)
            if(email == "" || pass == ""){
                setLoading(false);
                Toast.show('Fill in all the fields!');
                return false;
            }
            setLoading(true);
            database()
            .ref('/users/')
            .orderByChild("emailId")
            .equalTo(email)
            .once('value')
            .then(async  snapshot => {
                if(snapshot.val() == null){
                    Toast.show('Invalid emailId!');
                    console.log('Invalid emailId!');
                    setLoading(false);
                    return false;
                }
                let userData = Object.values(snapshot.val())[0];
                if(userData?.password != pass){
                    Toast.show('Invalid password!');
                    console.log('Invalid password!');
                    setLoading(false);
                    return false;
                }
                console.log('User data: ', userData);
                dispatch(setUser(userData));
                
                await Auth.setAccount(userData);
                props.navigation.navigate('DrawerNavigation')
                // props.navigation.navigate('Newsfeed')
                Toast.show('Login Successfully!');
                setLoading(false);
                
                if(Platform.OS === 'android'){
                    let token = await messaging().getToken();
                    
                    console.log('token===',token);
                    database()
                    .ref('/users/'  + userData.id)
                    .update({
                        tokenId: token,
                    })
                    .then(() => console.log('Data updated.' , userData.tokenId)); 
                    
                    database()
                    .ref('/chatlist/')
                    .orderByChild("id")
                    .on("value", function(snapshot) {
                       snapshot.forEach(function(val) {
                           val.forEach(function(data){
                               if(data.key == userData.id){
                                   if(val.key == userData.id){
                                       return false;
                                   }else{
                                       database()
                                       .ref( '/chatlist/' + val.key + '/' + userData?.id)
                                       .update({
                                           tokenId: token,
                                       })
                                       .then(() => console.log('Data updated.' , userData.tokenId));  
                                   }
                               }
                           })
                       })
                   });
                }

              


            });

        }
        catch(e){
            console.log(e);
        }

    }


    return (
    <>
      <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>

        {loading ?
            <View
                style={{
                    position:'absolute',
                    zIndex:1,
                    height:'100%',
                    width:'100%',
                    alignItems:'center',
                    justifyContent:'center',
                    backgroundColor:'rgba(0,0,0,.3)',
                }}
            >
                <ActivityIndicator size={'large'} color={COLORS.white}/>
            </View>
            :
            null
        }

        <KeyboardAvoidingView
            style={{
                flex:1
            }}
            behavior={Platform.OS === "ios" ? "padding" : ""}
        >
        <ScrollView contentContainerStyle={{flexGrow:1}}>
                <View style={{
                    flex:1,
                    alignItems:'center',
                    justifyContent:'center',
                    minHeight:200,
                }}>
                    <LinearGradient
                        colors={['#F7F5FF','rgba(255,255,255,0)']}
                        style={{
                            height:135,
                            width:135,
                            borderRadius:135,
                            position:'absolute',
                            top:20,
                            right:-50,
                            transform:[{rotate:'-120deg'}]
                        }}
                    ></LinearGradient>
                    <LinearGradient
                        colors={['#F7F5FF','rgba(255,255,255,0)']}
                        style={{
                            height:135,
                            width:135,
                            borderRadius:135,
                            position:'absolute',
                            bottom:0,
                            left:-50,
                            transform:[{rotate:'120deg'}]
                        }}
                    ></LinearGradient>
                    <Image
                        style={{
                            width:90,
                            height:90,
                            marginBottom:50,
                            resizeMode:'contain',
                        }}
                        // source={IMAGES.appLogo}
                        source={require('../../assets/imagesnew/logo.jpg')}
                    />
                    <Image 
                        style={{
                            position:'absolute',
                            bottom:0,
                            width:'100%',
                            resizeMode:'stretch',
                            height:65,
                        }}
                        source={IMAGES.loginShape}
                    />
                </View>
                <View style={{backgroundColor:'#332A5E'}}>
                    <View style={[GlobalStyleSheet.container,{paddingTop:5}]}>
                        <View style={{marginBottom:30}}>
                            <Text style={[FONTS.h2,{textAlign:'center',color:COLORS.white}]}>Sign in</Text>
                            <Text style={[FONTS.font,{textAlign:'center',color:COLORS.white , opacity:.7}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor jai </Text>
                        </View>

                        <View style={{marginBottom:15}}>
                            <View style={styles.inputIcon}>
                                <SvgXml
                                    xml={ICONS.user}
                                />
                            </View>
                            <TextInput
                                style={[styles.inputStyle]}
                                defaultValue="jackmadani"
                                placeholder='Email'
                                onChangeText={(value)=> setemail(value)}
                                value={email}
                                placeholderTextColor={'rgba(255,255,255,.6)'}
                            />
                        </View>
                        <View style={{marginBottom:15}}>
                            <View style={styles.inputIcon}>
                                <SvgXml
                                    xml={ICONS.lock}
                                />
                            </View>
                            <TextInput
                                secureTextEntry={passwordShow}
                                style={[styles.inputStyle]}
                                onChangeText={(value)=> setpass(value)}
                                value={pass}
                                placeholder='Password'
                                placeholderTextColor={'rgba(255,255,255,.6)'}
                            />
                            <TouchableOpacity
                                accessible={true}
                                accessibilityLabel="Password"
                                accessibilityHint="Password show and hidden"
                                onPress={() => handndleShowPassword()}
                                style={styles.eyeIcon}>
                                <SvgXml
                                    xml={passwordShow ? ICONS.eyeClose : ICONS.eyeOpen}
                                    />
                            </TouchableOpacity>
                        </View>
                        <View style={{alignItems:'flex-end',marginBottom:15}}>
                            <TouchableOpacity 
                                style={{marginLeft:5}}
                                onPress={() => props.navigation.navigate('ForgotPassword')}
                            >
                                <Text style={[FONTS.fontLg,{color:COLORS.primary,textDecorationLine:'underline'}]}>Forgot Password</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingBottom:10}}>
                            <CustomButton 
                                onPress={loginUser}
                                title="SIGN IN"/>
                        </View>
                        <View
                            style={{
                                flexDirection:'row',
                                alignItems:'center',
                                marginTop:15,
                                marginBottom:20,
                            }}
                        >
                            <View
                                style={{
                                    height:1,
                                    flex:1,
                                    backgroundColor:'rgba(255,255,255,.15)',
                                }}
                            />
                            <Text style={[FONTS.font,{textAlign:'center',color:COLORS.white,opacity:.7,paddingHorizontal:15}]}>Or sign in with</Text>
                            <View
                                style={{
                                    height:1,
                                    flex:1,
                                    backgroundColor:'rgba(255,255,255,.15)',
                                }}
                            />
                        </View>
                        <View
                            style={{
                                flexDirection:'row',
                                paddingBottom:20,
                            }}
                        >
                            <View style={{flex:1,paddingRight:10}}>
                                <TouchableOpacity
                                    style={{
                                        flexDirection:'row',
                                        backgroundColor:'#fff',
                                        borderRadius:SIZES.radius,
                                        height:45,
                                        alignItems:'center',
                                        paddingHorizontal:18,
                                    }}
                                >
                                    <Image style={{height:20,width:20,marginRight:12,resizeMode:'contain'}} source={IMAGES.google}/>
                                    <Text style={{...FONTS.fontLg}}>Google</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1,paddingLeft:10}}>
                                <TouchableOpacity
                                    style={{
                                        flexDirection:'row',
                                        backgroundColor:'#fff',
                                        borderRadius:SIZES.radius,
                                        height:45,
                                        alignItems:'center',
                                        paddingHorizontal:18,
                                    }}
                                >
                                    <Image style={{height:20,width:20,marginRight:12,resizeMode:'contain'}} source={IMAGES.facebook}/>
                                    <Text style={{...FONTS.fontLg}}>Facebook</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginBottom:15}}>
                            <Text style={[FONTS.font,{color:COLORS.white,opacity:.7}]}>Don’t have an account?</Text>
                            <TouchableOpacity 
                                style={{marginLeft:5}}
                                onPress={() => props.navigation.navigate('CreateAccount')}
                            >
                                <Text style={[FONTS.fontLg,{color:COLORS.primary,textDecorationLine:'underline'}]}>Signup here</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
        </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};



const styles = StyleSheet.create({

    inputStyle:{
        ...FONTS.fontLg,
        height:50,
        paddingLeft:60,
        borderWidth : 1,
        borderRadius: SIZES.radius,
        color:COLORS.white,
        backgroundColor:'rgba(255,255,255,.05)',
        borderColor:'rgba(255,255,255,.3)',
    },
    inputIcon:{
        //backgroundColor:COLORS.yellow,
        height:40,
        width:40,
        borderRadius:10,
        position : 'absolute',
        left:10,
        top : 5,
        alignItems:'center',
        justifyContent:'center',
    },
    eyeIcon:{
        position:'absolute',
        height:50,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        right:0,
        zIndex:1,
        top:0,
    }
  
})


export default SignIn;
