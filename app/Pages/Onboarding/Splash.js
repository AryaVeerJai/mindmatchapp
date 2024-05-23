import React,{useState , useEffect} from 'react';
import { Image, SafeAreaView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from '@react-navigation/native';
import { setUser } from '../../Redux/reducer/user';
import Auth from '../../Service/Auth';
import { IMAGES } from '../../constants/theme';

const Splash = (props) => {

    const {colors} = useTheme();
    const dispatch = useDispatch();

    const {userData , login}  = useSelector(state => state.User);

    const [loginCheck ,setLoginCheck] = useState(true);

    useEffect(() => {
        getUser();
    },[]);

    const getUser = async () => {
      let data = await Auth.getAccount();
        if(data != null){
            dispatch(setUser(data));
            setLoginCheck(false);
            props.navigation.navigate('DrawerNavigation')
        }else{
            setLoginCheck(true);
            props.navigation.navigate('Onboarding')
        }
    }

    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.card,alignItems:'center',justifyContent:'center'}}>
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
                    bottom:50,
                    left:-50,
                    transform:[{rotate:'120deg'}]
                }}
            ></LinearGradient>
            <LinearGradient
                colors={['#F7F5FF','rgba(255,255,255,0)']}
                style={{
                    height:50,
                    width:50,
                    borderRadius:135,
                    position:'absolute',
                    top:80,
                    left: 50,
                }}
            ></LinearGradient>
            <Image
                style={{
                    height:120,
                    width:120,
                    resizeMode:'contain',
                }}
                source={IMAGES.appLogo}
            />
        </SafeAreaView>
    );
};



export default Splash;