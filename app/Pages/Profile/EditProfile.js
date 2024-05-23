// import React, { useState, useEffect } from 'react';
// import { ActivityIndicator, Image, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import { useTheme } from '@react-navigation/native';
// import { SvgXml } from 'react-native-svg';
// import ImagePicker from 'react-native-image-crop-picker';
// import database from '@react-native-firebase/database';
// import storage from '@react-native-firebase/storage';
// import { useDispatch } from 'react-redux';
// import CustomButton from '../../components/CustomButton';
// import { GlobalStyleSheet } from '../../constants/StyleSheet';
// import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../constants/theme';
// import Header from '../../layout/Header';
// import Auth from '../../Service/Auth';
// import { updateUser } from '../../Redux/reducer/user';

// const EditProfile = () => {
//     const {colors} = useTheme();
//     const dispatch = useDispatch();
//     const [imgUrl , setImgUrl] = useState(null);
//     const [hasImage, setHasImage] = useState(false);
//     const [loading , setLoading] = useState(false);

//     const handleProfileImage = () => {
//         if(Platform.OS === 'android'){
//             ImagePicker.openPicker({
//                 width: 200,
//                 height: 200,
//                 cropping: true
//             }).then(image => {
//                 setHasImage(true);
//                 setImgUrl(image.path);
//             });
//         }
//     }

//     useEffect(() => {
//         getUser();
//     },[]);

//     const getUser = async () => {
//       let data = await Auth.getAccount();
//       //console.log(data);
//       setImgUrl(data.img);
//     }

    
//     const updateImage = async() => {
//         if(hasImage != true){
//             return true;
//         }

//         setLoading(true);

//         const uploadUri = imgUrl;

//         let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

//         try{

//             await storage().ref(filename).putFile(uploadUri);
//             const url = await storage().ref(filename).getDownloadURL();
//             console.log('Image uploaded!');
//             setImgUrl(url);
            
//             let userData = await Auth.getAccount();
            
//             const updateData = {
//                 img : url,
//                 name : userData.name,
//                 id : userData.id,
//                 emailId : userData.emailId,
//                 password : userData.password,
//             }

//             dispatch(updateUser(updateData));
//             await Auth.setAccount(updateData);

//             database()
//             .ref('/users/' + userData.id)
//             .update({
//                 img: url,
//             })
//             .then(() => console.log('Data updated.' , userData.img));  
            

//             database()
//             .ref('/chatlist/')
//             .orderByChild("id")
//             .on("value", function(snapshot) {
//                 snapshot.forEach(function(val) {
//                     val.forEach(function(data){
//                         if(data.key == userData.id){
//                             if(val.key == userData.id){
//                                 return false;
//                             }else{
//                                 database()
//                                 .ref( '/chatlist/' + val.key + '/' + userData?.id)
//                                 .update({
//                                     img: url,
//                                 })
//                                 .then(() => console.log('Data updated.' , userData.img));  
//                             }
//                         }
//                     });
//                 });
//             });
            
            
//             setLoading(false);

//         }catch(e){
//             console.log(e);
//         }
        

//     }


//     return (
//         <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>

//             {loading ?
//                 <View
//                     style={{
//                         position:'absolute',
//                         zIndex:1,
//                         height:'100%',
//                         width:'100%',
//                         alignItems:'center',
//                         justifyContent:'center',
//                         backgroundColor:'rgba(0,0,0,.3)',
//                     }}
//                 >
//                     <ActivityIndicator size={'large'} color={COLORS.white}/>
//                 </View>
//                 :
//                 null
//             }

//             <Header title={'Edit profile'} leftIcon={'back'} />

//             <ScrollView>
//                 <View style={GlobalStyleSheet.container}>
//                     <View
//                         style={{
//                             alignItems:'center',
//                             marginBottom:20,
//                         }}
//                     >
//                         <View>
//                             <TouchableOpacity
//                                 onPress={()=> handleProfileImage()}
//                                 style={{
//                                     height:35,
//                                     width:35,
//                                     position:'absolute',
//                                     bottom:0,
//                                     right:0,
//                                     backgroundColor:COLORS.primary,
//                                     borderRadius:30,
//                                     zIndex:1,
//                                     alignItems:'center',
//                                     justifyContent:'center',
//                                     borderWidth:3,
//                                     borderColor:colors.background,
//                                 }}
//                             >
//                                 <SvgXml
//                                     fill={COLORS.white}
//                                     height={14}
//                                     width={14}
//                                     xml={ICONS.edit}
//                                 />
//                             </TouchableOpacity>
//                             <Image
//                                 style={{
//                                     height:100,
//                                     width:100,
//                                     borderRadius:100,
//                                 }}
//                                 source={imgUrl ? {uri : imgUrl} : IMAGES.user}
//                             />
//                         </View>
//                     </View>
                    
//                     <View style={{marginBottom:12}}>
//                         <Text style={{...FONTS.font,color:colors.text,marginBottom:5}}>Name</Text>
//                         <TextInput
//                             style={{
//                                 ...FONTS.font,
//                                 ...FONTS.fontBold,
//                                 color:colors.title,
//                                 height:45,
//                                 borderWidth:1,
//                                 paddingHorizontal:15,
//                                 borderColor:colors.borderColor,
//                                 borderRadius:SIZES.radius,
//                             }}
//                             defaultValue={'John Doe'}
//                             placeholder='Name'
//                             placeholderTextColor={colors.text}
//                         />
//                     </View>
//                     <View style={{marginBottom:12}}>
//                         <Text style={{...FONTS.font,color:colors.text,marginBottom:5}}>Username</Text>
//                         <TextInput
//                             style={{
//                                 ...FONTS.font,
//                                 ...FONTS.fontBold,
//                                 color:colors.title,
//                                 height:45,
//                                 borderWidth:1,
//                                 paddingHorizontal:15,
//                                 borderColor:colors.borderColor,
//                                 borderRadius:SIZES.radius,
//                             }}
//                             defaultValue={'JohnDoe12345'}
//                             placeholder='Username'
//                             placeholderTextColor={colors.text}
//                         />
//                     </View>
//                     <View style={{marginBottom:15}}>
//                         <Text style={{...FONTS.font,color:colors.text,marginBottom:5}}>Bio</Text>
//                         <TextInput
//                             style={{
//                                 ...FONTS.font,
//                                 ...FONTS.fontBold,
//                                 color:colors.title,
//                                 height:45,
//                                 borderWidth:1,
//                                 paddingHorizontal:15,
//                                 borderColor:colors.borderColor,
//                                 borderRadius:SIZES.radius,
//                             }}
//                             defaultValue={'Photography'}
//                             placeholder='Username'
//                             placeholderTextColor={colors.text}
//                         />
//                     </View>
                    
//                     <CustomButton 
//                         onPress={updateImage}
//                         title={'Save'}
//                     />

//                 </View>
//             </ScrollView>

//         </SafeAreaView>
//     );
// };


// export default EditProfile;


import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Image, Platform, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { SvgXml } from 'react-native-svg';
import ImagePicker from 'react-native-image-crop-picker';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import { useDispatch } from 'react-redux';
// import { updateUser } from '../../Redux/reducer/user'; // Uncomment if updateUser is used for other fields too
import CustomButton from '../../components/CustomButton';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';
import Auth from '../../Service/Auth';
import AntDesignIcons from "react-native-vector-icons/AntDesign";

const EditProfile = () => {
    const {colors} = useTheme();
    const dispatch = useDispatch();
    const [imgUrl , setImgUrl] = useState(null);
    const [coverImgUrl , setCoverImgUrl] = useState(null);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [profileLink, setProfileLink] = useState('');
    const [hasImage, setHasImage] = useState(false);
    const [hasCoverImage, setHasCoverImage] = useState(false);
    const [loading , setLoading] = useState(false);

    const handleProfileImage = () => {
        if(Platform.OS === 'android'){
            ImagePicker.openPicker({
                width: 200,
                height: 200,
                cropping: true
            }).then(image => {
                setHasImage(true);
                setImgUrl(image.path);
            });
        }
    }
    const handleProfileCoverImage = () => {
        if(Platform.OS === 'android'){
            ImagePicker.openPicker({
                width: 200,
                height: 200,
                cropping: true
            }).then(image => {
                setHasCoverImage(true);
                setCoverImgUrl(image.path);
            });
        }
    }

    useEffect(() => {
        getUser();
    },[]);

    const getUser = async () => {
        let data = await Auth.getAccount();
        setImgUrl(data.img);
        setCoverImgUrl(data.coverimg);
        setName(data.name);
        setUsername(data.username);
        setBio(data.bio);
        setProfileLink(data.profileLink);
        // console.log(data.coverimg) 
    }

    const updateProfile = async () => {
        setLoading(true);
    
        let imageUrl = imgUrl; // Set default image URL to the current value of imgUrl
        // let coverImageUrl = coverImgUrl; // Set default image URL to the current value of imgUrl
        
    
        // Update image
        if (hasImage) {
            const uploadUri = imgUrl;
            try {
                // Upload image to Firebase Storage
                const filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
                const storageRef = storage().ref(`profileimages/${filename}`);
                const taskSnapshot = await storageRef.putFile(uploadUri);
                console.log('Upload completed:', taskSnapshot);
                
                // Get download URL of the uploaded image
                imageUrl = await storageRef.getDownloadURL();
                console.log('Download URL:', imageUrl);
            } catch (error) {
                console.error('Error uploading image:', error);
                setLoading(false);
                return; // Exit function early if image upload fails
            }
        }
        let coverImageUrl = coverImgUrl; // Set default image URL to the current value of imgUrl
        if (hasCoverImage) {
            const uploadCoverUri = coverImgUrl;
            const uploadimageUri = imgUrl
            try {
                // Upload image to Firebase Storage
                const filename = uploadCoverUri.substring(uploadCoverUri.lastIndexOf('/') + 1);
                const storageRef = storage().ref(`coverimages/${filename}`);
                const taskSnapshot = await storageRef.putFile(uploadCoverUri);
                // console.log('Upload completed:', taskSnapshot);
    
                // Get download URL of the uploaded image
                coverImageUrl = await storageRef.getDownloadURL();
                // console.log('Download URL:', coverImageUrl);
            } catch (error) {
                console.error('Error uploading image:', error);
                setLoading(false);
                return; // Exit function early if image upload fails
            }
        }
    
        let userData = await Auth.getAccount();
        const updateData = {
            img: imageUrl, // Use imageUrl instead of imgUrl
            coverimg: coverImageUrl, // Use imageUrl instead of imgUrl
            name: name,
            username: username,
            bio: bio,
            profileLink: profileLink,
            id: userData.id,
            emailId: userData.emailId,
            password: userData.password,
        }
    
        // Dispatch update user action if needed
        // dispatch(updateUser(updateData));
        // console.log('Cover Image: ',coverImageUrl)
        // console.log('profile image: ',imageUrl)
        // Update user data in Auth
        await Auth.setAccount(updateData);
    
        // Update user data in Realtime Database
        await database()
            .ref('/users/' + userData.id)
            .update({
                img: imageUrl, // Use imageUrl instead of imgUrl
                coverimg: coverImageUrl, // Use imageUrl instead of imgUrl
                name: name,
                username: username,
                bio: bio,
                profileLink: profileLink,
            });
    
        setLoading(false);
    }
    

    return (
        <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
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
            <Header title={'Edit profile'} leftIcon={'back'} />
            <ScrollView>
                <View style={GlobalStyleSheet.container}>
                    <View
                        style={{
                            alignItems:'center',
                            marginBottom:20,
                        }}
                    >
                        <View>
                            <Image style={[styles.profilecoverimg,{}]} source={coverImgUrl ? {uri : coverImgUrl}: IMAGES.user}/>
                            <TouchableOpacity onPress={()=> handleProfileCoverImage()} style={{marginTop: -30, marginHorizontal:10, alignItems: 'flex-end'}}><AntDesignIcons style={{bottom:2}} color={colors.title} size={25} name="edit" /></TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity
                                onPress={()=> handleProfileImage()}
                                style={{
                                    height:35,
                                    width:35,
                                    position:'absolute',
                                    bottom:0,
                                    right:0,
                                    backgroundColor:COLORS.primary,
                                    borderRadius:30,
                                    zIndex:1,
                                    alignItems:'center',
                                    justifyContent:'center',
                                    borderWidth:3,
                                    borderColor:colors.background,
                                }}
                            >
                                <SvgXml
                                    fill={COLORS.white}
                                    height={14}
                                    width={14}
                                    xml={ICONS.edit}
                                />
                            </TouchableOpacity>
                            <Image
                                style={{
                                    height:100,
                                    width:100,
                                    borderRadius:100,
                                    marginTop: -50,
                                }}
                                source={imgUrl ? {uri : imgUrl} : IMAGES.user}
                            />
                        </View>
                    </View>
                    
                    <View style={{marginBottom:12}}>
                        <Text style={{...FONTS.font,color:colors.text,marginBottom:5}}>Name</Text>
                        <TextInput
                            style={{
                                ...FONTS.font,
                                ...FONTS.fontBold,
                                color:colors.title,
                                height:45,
                                borderWidth:1,
                                paddingHorizontal:15,
                                borderColor:colors.borderColor,
                                borderRadius:SIZES.radius,
                            }}
                            value={name}
                            onChangeText={setName}
                            placeholder='Name'
                            placeholderTextColor={colors.text}
                        />
                    </View>
                    <View style={{marginBottom:12}}>
                        <Text style={{...FONTS.font,color:colors.text,marginBottom:5}}>Username</Text>
                        <TextInput
                            style={{
                                ...FONTS.font,
                                ...FONTS.fontBold,
                                color:colors.title,
                                height:45,
                                borderWidth:1,
                                paddingHorizontal:15,
                                borderColor:colors.borderColor,
                                borderRadius:SIZES.radius,
                            }}
                            value={username}
                            onChangeText={setUsername}
                            placeholder='Username'
                            placeholderTextColor={colors.text}
                        />
                    </View>
                    <View style={{marginBottom:15}}>
                        <Text style={{...FONTS.font,color:colors.text,marginBottom:5}}>Bio</Text>
                        <TextInput
                            style={{
                                ...FONTS.font,
                                ...FONTS.fontBold,
                                color:colors.title,
                                height:45,
                                borderWidth:1,
                                paddingHorizontal:15,
                                borderColor:colors.borderColor,
                                borderRadius:SIZES.radius,
                            }}
                            value={bio}
                            onChangeText={setBio}
                            placeholder='Bio'
                            placeholderTextColor={colors.text}
                        />
                    </View>
                    <View style={{marginBottom:15}}>
                        <Text style={{...FONTS.font,color:colors.text,marginBottom:5}}>Profile Link</Text>
                        <TextInput
                            style={{
                                ...FONTS.font,
                                ...FONTS.fontBold,
                                color:colors.title,
                                height:45,
                                borderWidth:1,
                                paddingHorizontal:15,
                                borderColor:colors.borderColor,
                                borderRadius:SIZES.radius,
                            }}
                            value={profileLink}
                            onChangeText={setProfileLink}
                            placeholder='Set Your Profile Link'
                            placeholderTextColor={colors.text}
                        />
                    </View>
                    
                    <CustomButton 
                        onPress={updateProfile}
                        title={'Save'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    profilecoverimg: {
        width: 400,
        height: 200,
    },
})

export default EditProfile;
