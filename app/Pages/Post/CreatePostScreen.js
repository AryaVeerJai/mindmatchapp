import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, 
  SafeAreaView, TouchableOpacity, Image, StyleSheet, Picker, 
  ScrollView, KeyboardAvoidingView, Platform, ImageBackground, Modal,
  PanResponder, Animated, Dimensions,
  Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'; 
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
// import { firestore, storage } from '@react-native-firebase/firestore'; // Assuming you are using Firebase Firestore for database
// import { COLORS } from '../../constants/theme';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DropDownPicker from 'react-native-dropdown-picker';
import Auth from '../../Service/Auth';
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../constants/theme';
import ImagePicker from "react-native-image-crop-picker";
// import ImagePicker from 'react-native-image-picker';
// import { Picker } from '@react-native-picker/picker';


const CreatePostScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  // const [selectedValue, setSelectedValue] = useState(null);
  // const [open, setOpen] = useState (false);
  // const [value, setValue] = useState(null);
  // const [items, setItems] = useState([
  //   {label: 'Apple', value: 'apple'},
  //   {label: 'Banana', value: 'banana'}
  // ]);

  const { width } = Dimensions.get('window');

  // Bottom Slider function

  const [postText, setPostText] = useState('');
  const [loading, setLoading] = useState(false);
  // const currentUser = Auth().currentUser;

  
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [email, setemail] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  // const [coverImgUrl, setCoverImgUrl] = useState('');
  const [bio, setBio] = useState('');
  const [postImage, setPostImage] = useState('');
  const [potname, setPotname] = useState('');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);


  useEffect(() => {
    getUser();
  },[]);

  useEffect
  const getUser = async () => {
    let data = await Auth.getAccount();
    console.log(data)
    setName(data.name);
    setUsername(data.username);
    setId(data.id);
    setemail(data.emailId);
    setImgUrl(data.img);
    setBio(data.bio);
    // console.log(data.img) 
}

  const handlePicker = () => {
    ImagePicker.openPicker({
      mediaType: 'mixed', // This allows picking both images and videos
    }).then((response) => {
      if (!response.didCancel) {
        setSelectedMedia(response);
        // console.log(response.path)
        if (response.assets && response.assets.length > 0) {
          const selectedAsset = response.assets[0];
          console.log("error 245")
          setPostImage(selectedAsset.uri); // Set the postImage state with the URI of the selected media
        }
      }
    }).catch(() => {
      console.log('Image selection failed.');
    });
  };


  const createPost = async () => {
    try {
      setLoading(true);
      setUploadProgress(0); // Reset upload progress
  
      let postMediaUri = selectedMedia.path;
      // Upload image to Firebase Storage
      const filename = postMediaUri.substring(postMediaUri.lastIndexOf('/') + 1);
      const storageRef = storage().ref(`postimages/${filename}`);
  
      const task = storageRef.putFile(postMediaUri);
  
      // Track upload progress
      task.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      });
  
      // Wait for upload to complete
      await task;
  
      // Get download URL of the uploaded image
      const postImageUrl = await storageRef.getDownloadURL();
  
      // Create post object
      const postData = {
        text: postText,
        createdUserId: id,
        createdBy: name,
        createdByEmail: email,
        createdAt: new Date().toISOString(),
        postImage: postImageUrl,
        userImage: imgUrl,
        pot: potname,
        postType: 'post',
        username: username,
        createdUserDetails: {
          id: id,
          displayName: name,
          email: email,
          // Add more user details as needed
        }
        // Add more fields as needed
      };
  
      // Send post data to Realtime Database
      await database().ref('posts').push(postData);

      // Increment the number of posts in the user's document
      await database().ref(`users/${id}/postsCount`).transaction((currentCount) => {
        // Increment the current count by 1 or initialize to 1 if it doesn't exist
        return (currentCount || 0) + 1;
    });
  
      // Reset input field after successful post creation
      setPostText('');
      setPostImage('');
  
      // Provide feedback to the user
      Alert.alert('Success', 'Post created successfully.');
    } catch (error) {
      console.error('Error creating post:', error);
      Alert.alert('Error', 'Failed to create post. Please try again later.');
    } finally {
      setLoading(false);
      setUploadProgress(0); // Reset upload progress
    }
  };
  
  



  const removeMedia = () => {
    setSelectedMedia(null);
    setPostImage('');
  };


  const navigation = useNavigation();

  return (
    <SafeAreaView
    style={{
        flex:1,
        backgroundColor:'#242527',
        width: '100%'
    }}>
    <KeyboardAvoidingView 
      style={{flex: 1}}
      behavior={Platform.OS === "ios" ? "padding" : "height"} // Adjust behavior based on platform
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0} // Adjust offset if needed
    >
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={{flex: 1,backgroundColor: '#242527'}} >
      <View style={{backgroundColor: '#333436',flexDirection: 'row', justifyContent: 'space-between', paddingVertical:10, paddingHorizontal: 25,}}>
        <View><TouchableOpacity onPress={()=> navigation.goBack()}><FontAwesomeIcon style={{}} size={35} name='angle-left' /></TouchableOpacity></View>
        <View style={{alignSelf: 'center'}} ><TouchableOpacity><Text style={{fontSize: 17, fontWeight: '500'}}>Create Post</Text></TouchableOpacity></View>
        <View style={{alignSelf: 'center'}}><TouchableOpacity 
        onPress={createPost} 
        disabled={loading}><Text style={{fontSize: 17, fontWeight: '500'}}>Publish</Text></TouchableOpacity></View>
      </View>
      <View style={{flex: 1, paddingVertical: 30, backgroundColor: '#242527', justifyContent: 'space-between'}} >
        <View style={{}}>
          <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
            <View>
              <TouchableOpacity>
                <Image style={{width:60, height: 60, borderRadius: 50}} source={imgUrl ? {uri : imgUrl}: IMAGES.user}></Image>
                </TouchableOpacity>
              </View>
            <View style={{marginHorizontal: 10}}>
              <View style={{flexDirection:'row'}}>
              <Text style={{fontWeight:'600', fontSize: 17 }}>{name ? name : 'NameText'}</Text>
              <Text style={{fontWeight:'600', paddingHorizontal: 5, fontSize: 17 }}>•</Text>
              <Text style={{fontWeight:'400', fontSize: 17}}>{username? username: '@rosalia.vt'}</Text>
              <Text style={{fontWeight:'600', paddingHorizontal: 5, fontSize: 17 }}>•</Text>
              <Text style={{fontWeight:'400', fontSize: 17 }}>{'Text Pos'}</Text>
              </View>   
          <View>
            <View style={{display: 'flex',alignSelf: 'flex-start', width: 'auto', backgroundColor: '#333436', borderRadius: 5, marginTop: 6}}>
              <TouchableOpacity onPress={() => setModalVisible(true)} style={{flexDirection: 'row', display: 'flex', paddingHorizontal: 10, paddingTop: 5, paddingBottom: 8, }}>
                <EntypoIcon style={{marginTop: 'auto', marginBottom: 'auto', marginEnd: 10}} name='globe'/>
                <Text style={{fontSize: 12}}>{potname ? potname : 'Choose a Pot'}</Text>
                <FontAwesomeIcon style={{paddingVertical:0, paddingLeft: 8}} name='sort-down' />
              </TouchableOpacity>
              <Modal
                  animationType="slide" // You can change animation type as needed
                  transparent={true}
                  statusBarTranslucent= {true}
                  visible={modalVisible}
                  onRequestClose={() => {
                    setModalVisible(false);
                  }}
                >
                  <View style={[styles.modalContainer,{bottom: 0}]}>
                    <View style={[styles.modalContent,{backgroundColor: '#242527',}]}>
                      
                      <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#333436', padding: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                      <Text>Select Pots</Text>
                      <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text>Close</Text>
                      </TouchableOpacity>
                      </View>
                      <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingVertical: 20, columnGap: 30, rowGap: 30, justifyContent: 'center'}}>
                        <TouchableOpacity onPress={()=>{setPotname('Dance'); setModalVisible(false);}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Dance</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('DIY'); setModalVisible(false);}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>DIY</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Social Work'); setModalVisible(false);}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Social Work</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Mind Match'); setModalVisible(false);}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Mindmatch</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Festival'); setModalVisible(false);}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Festival</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Science & Technology'); setModalVisible(false);}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Science & Technology</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Painting & Sketching'); setModalVisible(false);}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Painting & Sketching</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Enterpreneurship'); setModalVisible(false);}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Enterpreneurship</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Movies & Theatre'); setModalVisible(false);}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Movies & Theatre</Text></TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
            </View>
          </View>

          <View style={{paddingHorizontal: 30, marginTop: 10}}>
            <TextInput
            style={{fontSize: 30, height: 'auto'}}
            // onChangeText={onChangeNumber}
            // value={number}
            placeholder="What's Happning?"
            placeholderTextColor= 'grey'
            multiline={true}
            value={postText}
            onChangeText={setPostText}
          />
          </View>
        </View>
        <View style={{marginVertical: 10}}>
          <View style={{flexDirection: 'row', paddingHorizontal: 30}}>
            <FontAwesomeIcon size={15} style={{alignSelf: 'center', backgroundColor: '#48494B', paddingHorizontal: 12, paddingVertical:7, borderRadius: 20, marginRight: 5}} name='angle-left' />
            <TouchableOpacity><Text style={{color: "#fff", borderWidth: 3, borderColor: '#38393B', borderRadius: 7, paddingLeft: 8, paddingRight: 3, paddingTop: 5, marginHorizontal: 5, alignItems: 'center', backgroundColor: '#000'}}>Aa</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{color: "grey", borderWidth: 3, borderColor: '#38393B', borderRadius: 7, paddingLeft: 8, paddingRight: 3, paddingTop: 5, marginHorizontal: 5, alignItems: 'center', backgroundColor: '#000'}}>Aa</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{color: "#437895", borderWidth: 3, borderColor: '#38393B', borderRadius: 7, paddingLeft: 8, paddingRight: 3, paddingTop: 5, marginHorizontal: 5, alignItems: 'center', backgroundColor: '#000'}}>Aa</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{color: "#9C4780", borderWidth: 3, borderColor: '#38393B', borderRadius: 7, paddingLeft: 8, paddingRight: 3, paddingTop: 5, marginHorizontal: 5, alignItems: 'center', backgroundColor: '#000'}}>Aa</Text></TouchableOpacity>
            <TouchableOpacity><Text style={{color: "#714191", borderWidth: 3, borderColor: '#38393B', borderRadius: 7, paddingLeft: 8, paddingRight: 3, paddingTop: 5, marginHorizontal: 5, alignItems: 'center', backgroundColor: '#000'}}>Aa</Text></TouchableOpacity>
          </View>
          <View>
          <View style={{marginTop: 30, marginBottom: 20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {/* <TouchableOpacity style={{marginLeft: 30, marginRight: 10, flexDirection: 'row', alignItems: 'center'}}><MaterialCommunityIcons style={{borderRadius: 30, borderWidth: 1.5, borderColor: 'grey', padding:10, marginRight:7 }} size={25} name='camera-plus-outline'/></TouchableOpacity> */}
              <TouchableOpacity style={{marginLeft: 30, marginRight: 10, flexDirection: 'row', alignItems: 'center'}}><Ionicons style={{backgroundColor: '#AA00D3', borderRadius: 30, padding:10, marginRight:7 }} size={25} name='images-outline'/><Text>Photos</Text></TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 10, flexDirection: 'row', alignItems: 'center'}}><Ionicons style={{backgroundColor: '#D40067', borderRadius: 30, padding:10, marginRight:7 }} size={25} name='location-outline'/><Text>Location</Text></TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 10, flexDirection: 'row', alignItems: 'center'}}><FontistoIcon style={{backgroundColor: '#EA381B', borderRadius: 30, padding:10, marginRight:7 }} size={25} name='smiley'/><Text>Feeling</Text></TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{marginBottom: 20, marginTop: 0, marginLeft: 30, }}>
            <Text style={{paddingBottom: 10}}>Add Image / Video</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={handlePicker} style={{marginRight: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}><MaterialCommunityIcons style={{borderRadius: 3, borderStyle: 'dashed', borderWidth: 1.5, borderColor: 'grey', padding:10, marginRight:7 }} size={25} name='plus'/></TouchableOpacity>
              {/* {selectedMedia.mime.startsWith('image') ? (
              <TouchableOpacity
              onPress={setPostImage(selectedMedia.path)}
               style={{marginHorizontal: 10, flexDirection: 'row', alignItems: 'center'}}><ImageBackground style={{ borderStyle: 'dashed', borderWidth: 1.5, borderColor: 'grey',}} 
                // source={require('../../../profile.webp')} 
                source={{ uri: selectedMedia.path }} 
              ><Ionicons color={'#ffffff75'} style={{borderRadius: 3, padding: 10, backgroundColor: '#0000008a' }} size={25} name='camera-outline'/></ImageBackground></TouchableOpacity>
            ) : (
              <TouchableOpacity style={{marginHorizontal: 10, flexDirection: 'row', alignItems: 'center'}}><ImageBackground style={{ borderStyle: 'dashed', borderWidth: 1.5, borderColor: 'grey',}} source={require('../../../profile.webp')} ><Ionicons color={'#ffffff75'} style={{borderRadius: 3, padding: 10, backgroundColor: '#0000008a',}} size={25} name='videocam-outline'/></ImageBackground></TouchableOpacity>
            )} */}
            {selectedMedia && selectedMedia.mime.startsWith('image') ? (
                <TouchableOpacity
                  onPress={() => setPostImage(selectedMedia.path)}
                  style={{marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
                  <ImageBackground
                    style={{ borderStyle: 'dashed', borderWidth: 1.5, borderColor: 'grey',}}
                    source={{ uri: selectedMedia.path }}>
                    <Ionicons
                      color={'#ffffff75'}
                      style={{borderRadius: 3, padding: 10, backgroundColor: '#0000008a' }}
                      size={25}
                      name='camera-outline'/>
                  </ImageBackground>
                      <Pressable style={{alignItems: 'flex-end', position: 'absolute', end: -8, top: 0, zIndex: 999}} onPress={removeMedia}><Ionicons style={{backgroundColor: 'black', borderWidth: 1, borderRadius: 20, paddingTop: 3, paddingLeft: 3, borderColor: '#fff', width: 'auto'}} size={14} name='close'/></Pressable>
                </TouchableOpacity>
              ) : selectedMedia && selectedMedia.mime.startsWith('video') ? (
                <TouchableOpacity
                  style={{marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', paddingTop: 10}}>
                  <ImageBackground
                    style={{ borderStyle: 'dashed', borderWidth: 1.5, borderColor: 'grey',}}
                    source={require('../../../profile.webp')} >
                    <Ionicons
                      color={'#ffffff75'}
                      style={{borderRadius: 3, padding: 10, backgroundColor: '#0000008a',}}
                      size={25}
                      name='videocam-outline'/>
                  </ImageBackground>
                  <Pressable style={{alignItems: 'flex-end', position: 'absolute', end: -8, top: 0, zIndex: 999}} onPress={removeMedia}><Ionicons style={{backgroundColor: 'black', borderWidth: 1, borderRadius: 20, paddingTop: 3, paddingLeft: 3, borderColor: '#fff', width: 'auto'}} size={14} name='close'/></Pressable>
                </TouchableOpacity>
              ) : null}

            </ScrollView>
          </View>
        </View>
        </View>
      </View>
    </View>
    <Modal
      animationType="slide"
      transparent={true}
      visible={loading}
      onRequestClose={() => setLoading(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <ActivityIndicator
            size="large"
            color={COLORS.primary}
            style={{ marginBottom: 10 }}
          />
          <Text style={{ color: COLORS.primary }}>
            Uploading: {uploadProgress.toFixed(2)}%
          </Text>
        </View>
      </View>
    </Modal>
    </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  dropdownContainer: {
    height: 40,
  },
  dropdown: {
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  dropDown: {
    backgroundColor: '#fafafa',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    // alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    // padding: 20,
    borderRadius: 10,
    elevation: 5, // for Android shadow
  },
});

export default CreatePostScreen;
