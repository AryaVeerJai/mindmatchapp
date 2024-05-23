import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, ActivityIndicator, 
  SafeAreaView, TouchableOpacity, Image, StyleSheet, Picker, 
  ScrollView, KeyboardAvoidingView, Platform, ImageBackground, Modal,
  PanResponder, Dimensions,
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
import { useTheme } from '@react-navigation/native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { SvgXml } from "react-native-svg";
// import ImagePicker from 'react-native-image-picker';
// import { Picker } from '@react-native-picker/picker';


const NewCreatePollScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [endsInVisible, setEndsInVisible] = useState(false);

  const { width } = Dimensions.get('window');

  // Bottom Slider function

  const [postText, setPostText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [loading, setLoading] = useState(false);

  
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [email, setemail] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [bio, setBio] = useState('');
  const [postImage, setPostImage] = useState('');
  const [potname, setPotname] = useState('');
  const [endstime, setEndsTime] = useState('');
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);


  useEffect(() => {
    getUser();
  },[]);

  useEffect
  const getUser = async () => {
    let data = await Auth.getAccount();
    // console.log(data)
    setName(data.name);
    setUsername(data.username);
    setId(data.id);
    setemail(data.emailId);
    setImgUrl(data.img);
    setBio(data.bio);
    // console.log(data.img) 
}

  const handleDescriptionImagePicker = () => {
    ImagePicker.openPicker({
      mediaType: 'mixed', // This allows picking both images and videos
    }).then((response) => {
      if (!response.didCancel) {
        setSelectedMedia(response);
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



  
  



  const removeMedia = () => {
    setSelectedMedia(null);
    setPostImage('');
  };


  const navigation = useNavigation();

  const [options, setOptions] = useState(['', '']); // Initial two empty options
//   const [imageOptions, setImageOptions] = useState(['', '']); // Initial two empty options

  const addOption = () => {
    setOptions([...options, '']);
  };

  const handleImageOptionChange = (test, index) => {
    const newimgoption = [...imageOptions];
    newImageOptions[index] = img;
    setImageOptions(newImageOptions);
  }

  const handleOptionChange = (text, index) => {
    const newOptions = [...options];
    newOptions[index] = text;
    setOptions(newOptions);
  };

  const submitPoll = () => {
    // Logic to submit the poll
    console.log("Poll submitted:", options);
  };

  const {colors} = useTheme();

  const [active , setActive] = useState(false);
  // console.log(active)

  const offset = useSharedValue(0);
  const toggleStyle = useAnimatedStyle(() => { 
      return {
          transform: [
              { 
                  translateX:  offset.value
              }
          ],
      };
  });

//   Image Options Section
  const [imageOptions, setImageOptions] = useState([null, null]);

  const addImageOption = () => {
    setImageOptions([...imageOptions, null]);
  };

  const chooseImage = async (index) => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });
      const newOptions = [...imageOptions];
      newOptions[index] = { image, text: '' }; // Each option contains an image and a text
      setImageOptions(newOptions);
    } catch (error) {
      console.log('Error picking image: ', error);
    }
  };

  const removeOption = (indexToRemove) => {
    setImageOptions(imageOptions.filter((_, index) => index !== indexToRemove));
  };

  const changeImage = async (index) => {
    try {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
      });
      const newOptions = [...imageOptions];
      newOptions[index] = { image, text: imageOptions[index].text };
      setImageOptions(newOptions);
    } catch (error) {
      console.log('Error picking image: ', error);
    }
  };

  const handleTextChange = (index, text) => {
    const newOptions = [...options];
    newOptions[index] = { ...newOptions[index], text };
    setImageOptions(newOptions);
  };

  const [isTextBoxVisible, setTextBoxVisible] = useState(false);
  const [isImageBoxVisible, setImageBoxVisible] = useState(false);
  const [isGifBoxVisible, setGifBoxVisibl] = useState(false);

  const toggleTextBoxVisibility = () => {
    setTextBoxVisible(!isTextBoxVisible);
    setImageBoxVisible(false);
    setGifBoxVisibl(false);
  };
  const toggleImageBoxVisibility = () => {
    setImageBoxVisible(!isImageBoxVisible);
    setTextBoxVisible(false);
    setGifBoxVisibl(false);
  };
  const toggleGifBoxVisibility = () => {
    setGifBoxVisibl(!isGifBoxVisible);
    setImageBoxVisible(false);
    setTextBoxVisible(false);
  };

  // const createPost = async () => {
  //   try {
  //     setLoading(true);
  //     setUploadProgress(0); // Reset upload progress
  
  //     // let postMediaUri = selectedMedia.path;
  //     // // Upload image to Firebase Storage
  //     // const filename = postMediaUri.substring(postMediaUri.lastIndexOf('/') + 1);
  //     // const storageRef = storage().ref(`postimages/${filename}`);
  
  //     // const task = storageRef.putFile(postMediaUri);
  
  //     // // Track upload progress
  //     // task.on('state_changed', (snapshot) => {
  //     //   const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //     //   setUploadProgress(progress);
  //     // });
  
  //     // // Wait for upload to complete
  //     // await task;
  
  //     // // Get download URL of the uploaded image
  //     // const postImageUrl = await storageRef.getDownloadURL();

  //     const uploadTasks = [];
  
  //     // Upload images to Firebase Storage
  //     imageOptions.forEach((option, index) => {
  //       console.log(option.image.path)
  //       if (option && option.image.path) {
  //         const image = option.image.path;
  //         const imageName = `${Date.now()}-${index}-${image.split('/').pop()}`;
  //         const storageRef = storage().ref(`images/${imageName}`);
  //         const task = storageRef.putFile(postMediaUri);
          
  //       const uploadTask = storageRef.putFile(image);

  //       // Track upload progress for each individual task
  //       uploadTask.on('state_changed', (snapshot) => {
  //         const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         setUploadProgress((prevProgress) => prevProgress + progress / imageOptions.length);
  //       });
  //         uploadTasks.push(uploadTask);
  //       }
  //     });
    
  //     // Wait for all upload tasks to complete
  //     await Promise.all(uploadTasks);
    
  //     // Get download URLs of the uploaded images
  //     const downloadURLs = await Promise.all(uploadTasks.map(uploadTask => uploadTask.snapshot.ref.getDownloadURL()));
    
  
  //     // Create post object
  //     const postData = {
  //       createdUserId: id,
  //       createdBy: name,
  //       createdByEmail: email,
  //       createdAt: new Date().toISOString(),
  //       pollTitle: postText,
  //       // descriptionText: descriptionsText,
  //       // descriptionImage: postImageUrl,
  //       // descriptionGif: postGifUrl,
  //       imageOptions: imageOptions.map((option, index) => ({
  //         text: option.text,
  //         image: option.image ? downloadURLs[index] : null,
  //       })).filter(option => option.image !== null), // Filter out options with no images
  //       // imageOptions: imageOptions.filter(imageOptions => imageOptions !== null),\
  //       userImage: imgUrl,
  //       pot: potname,
  //       endTime: endstime,
  //       username: username,
  //       postType: 'polls',
  //       createdUserDetails: {
  //         id: id,
  //         displayName: name,
  //         email: email,
  //       }
  //     };
  
  //     // Send post data to Realtime Database
  //     await database().ref('posts').push(postData);
  //     // await database().ref('polls').push(postData);
  
  //     // Reset input field after successful post creation
  //     setPostText('');
  //     setPostImage('');
  
  //     // Provide feedback to the user
  //     Alert.alert('Success', 'Post created successfully.');
  //   } catch (error) {
  //     console.error('Error creating post:', error);
  //     Alert.alert('Error', 'Failed to create post. Please try again later.');
  //   } finally {
  //     setLoading(false);
  //     setUploadProgress(0); // Reset upload progress
  //   }
  // };


  const createPost = async () => {
    try {
      setLoading(true);
      setUploadProgress(0); // Reset upload progress
  
      const uploadTasks = [];
      let totalBytes = 0;
      let bytesTransferred = 0;
      let postImageUrl;

      if (selectedMedia !== null) {
        console.log(selectedMedia)
      let postMediaUri = selectedMedia.path;
      // Upload image to Firebase Storage
      const filename = postMediaUri.substring(postMediaUri.lastIndexOf('/') + 1);
      const storageDescriptionRef = storage().ref(`pollimages/${filename}`);
  
      const task = storageDescriptionRef.putFile(postMediaUri);
  
      // Track upload progress
      task.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      });
  
      // Wait for upload to complete
      await task;
  
      // Get download URL of the uploaded image
      postImageUrl = await storageDescriptionRef.getDownloadURL();
    }else{
      console.log("Image not selected")
      
      postImageUrl = null;
    }

    console.log(imageOptions[1],"349")
    console.log(options)
      if (imageOptions[0] !== null && imageOptions[1] !== null) {
        console.log('image not added');
      // Upload images to Firebase Storage
      (imageOptions.forEach((option, index) => {
        console.log(option.image.path)
        if (option && option.image.path) {
          const image = option.image.path;
          const imageName = `${Date.now()}-${index}-${image.split('/').pop()}`;
          const storageRef = storage().ref(`pollimages/${imageName}`);
  
          const uploadTask = storageRef.putFile(image);
          uploadTasks.push(uploadTask);
  
          uploadTask.on('state_changed', (snapshot) => {
            bytesTransferred += snapshot.bytesTransferred;
            totalBytes += snapshot.totalBytes;
  
            const progress = (bytesTransferred / totalBytes) * 100;
            setUploadProgress(progress);
          });
        }
      }))
    } else {
      console.log('image not added');
  }
  
      // Wait for all upload tasks to complete
      await Promise.all(uploadTasks);
  
      // Get download URLs of the uploaded images
      const downloadURLs = await Promise.all(uploadTasks.map(uploadTask => uploadTask.snapshot.ref.getDownloadURL()));
  
      console.log(imageOptions, "385")
      // Create post object
      const postData = {
        createdUserId: id,
        createdBy: name,
        createdByEmail: email,
        createdAt: new Date().toISOString(),
        pollTitle: postText,
        pollDiscription: descriptionText,
        pollDiscriptionImage: postImageUrl,
        imageOptions: (imageOptions[0] !== null && imageOptions[1] !== null) ?  imageOptions.map((option, index) => ({
          text: option.text,
          image: option.image ? downloadURLs[index] : null,
        })).filter(option => option.image !== null)  // Filter out options with no images
        : 'Not Added',
        textOptions: options.map((option, index) => ({
          optionNo: index+1,
          text: option,
        })),
        userImage: imgUrl,
        pot: potname,
        endTime: endstime,
        username: username,
        postType: 'polls',
        createdUserDetails: {
          id: id,
          displayName: name,
          email: email,
        }
      };
  
      await database().ref('posts').push(postData);
  
      // Reset input field after successful post creation
      setPostText('');
      setDescriptionText('');
      setPostImage('');
  
      // Provide feedback to the user
      Alert.alert('Success', 'Post created successfully.');
    } catch (error) {
      console.error('Error creating post:', error);
      Alert.alert('Error', 'Failed to create post. Please try again later.');
    } finally {
      setLoading(false);
      setUploadProgress(100); // Set upload progress to 100% after completion
    }
  };
  

//   console.log(optionImages)
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
      <View style={{backgroundColor: '#333436',flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 25}}>
        <View><TouchableOpacity onPress={()=> navigation.goBack()}><FontAwesomeIcon style={{}} size={35} name='angle-left' /></TouchableOpacity></View>
        <View style={{alignSelf: 'center'}} ><TouchableOpacity><Text style={{fontSize: 17, fontWeight: '500'}}>Create Post</Text></TouchableOpacity></View>
        <View style={{alignSelf: 'center'}}><TouchableOpacity 
        onPress={createPost} 
        disabled={loading}><Text style={{fontSize: 17, fontWeight: '500'}}>Publish</Text></TouchableOpacity></View>
      </View>
      <View style={{flex: 1, backgroundColor: '#212223', justifyContent: 'space-between'}} >
        <View style={{}}>
          <View style={{flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 30, backgroundColor: '#212223',}}>
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
              <Text style={{fontWeight:'400', fontSize: 17 }}>{'Add Poll'}</Text>
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
                        <TouchableOpacity onPress={()=>{setPotname('Dance')}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Dance</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('DIY')}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>DIY</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Social Work')}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Social Work</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Mind Match')}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Mindmatch</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Festival')}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Festival</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Science & Technology')}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Science & Technology</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Painting & Sketching')}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Painting & Sketching</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Enterpreneurship')}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Enterpreneurship</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>{setPotname('Movies & Theatre')}} style={{ width: width * 0.27,}}><Image style={{height: 80, borderRadius: 10 ,width: 'auto', marginHorizontal:10}} source={require('../../../profile.webp')}/><Text style={{textAlign: 'center', paddingTop: 7}}>Movies & Theatre</Text></TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
            </View>
          </View>
            <View style={{}}>
                <View style={{paddingHorizontal: 30 }}>
                <View style={{height: 80, borderWidth: 0.7, borderRadius: 10, borderColor: 'grey',  paddingHorizontal: 10 }}>
                    <TextInput
                    style={{fontSize: 20, height: 'auto',}}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Ask a Question..."
                    placeholderTextColor= 'grey'
                    multiline={true}
                    value={postText}
                    onChangeText={setPostText}
                />
                </View>
                </View>
                <View style={{backgroundColor: '#212223', marginBottom: 10, paddingHorizontal: 30, paddingVertical: 15}}>
                    <View style={{}}>
                        <Text style={{fontSize: 16}}>Description (Optional)</Text>
                        <Text style={{marginTop: 5}}>You can Select any one option to describe Your Poll</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 15, gap: 10}}>
                        <TouchableOpacity onPress={toggleTextBoxVisibility} style={{paddingVertical: 8, paddingHorizontal: 10, borderWidth: 1, gap: 3, borderRadius: 8, flexDirection: 'row', width: 'auto', borderColor: 'grey'}}>
                        <SvgXml
                            style={{
                                marginRight:5,
                            }}
                            height={20}
                            width={20}
                            xml={ICONS.paragraphicon}
                        />
                        <Text>Text</Text>
                        </TouchableOpacity>
                        {!active ?
                        <View style={{flexDirection: 'row', gap: 10, height:'auto'}}>
                            <TouchableOpacity onPress={toggleImageBoxVisibility} style={{paddingVertical: 8, paddingHorizontal: 10, borderWidth: 1, gap: 3, borderRadius: 8, flexDirection: 'row', width: 'auto', borderColor: 'grey'}}>
                            <SvgXml
                                style={{
                                    marginRight:5,
                                }}
                                height={20}
                                width={20}
                                xml={ICONS.imageIcon}
                                fill={'white'}
                            />
                            <Text>Image</Text>
                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={toggleGifBoxVisibility} style={{paddingVertical: 8, paddingHorizontal: 10, borderWidth: 1, gap: 3, borderRadius: 8, flexDirection: 'row', width: 'auto', borderColor: 'grey'}}>
                            <SvgXml
                                style={{
                                    marginRight:5,
                                }}
                                height={20}
                                width={20}
                                xml={ICONS.gificon}
                            />
                            <Text>Gif</Text>
                            </TouchableOpacity> */}
                        </View>
                        : null
                        }
                    </View>
                    {isTextBoxVisible && (
                      <View style={{height: 80, paddingHorizontal: 10, borderWidth: 0.3, borderColor: 'white', borderRadius: 10, marginTop: 20 }}>
                        {/* <Text>This is the element you can show/hide.</Text> */}
                        <TextInput
                          style={{fontSize: 20, height: 'auto',}}
                          // onChangeText={onChangeNumber}
                          // value={number}
                          placeholder="Add Your Description..."
                          placeholderTextColor= 'grey'
                          multiline={true}
                          value={descriptionText}
                          onChangeText={setDescriptionText}
                      />
                      </View>
                    )}
                    {!active ?
                    <>
                    {isImageBoxVisible && (
                      <View style={{marginTop: 20 }}>
                        {/* <Text>This is the element you can show/hide.</Text> */}
                        {/* <TouchableOpacity onPress={() => changeImage(index)}>
                            <Image source={{}} style={styles.imageOption} />
                        </TouchableOpacity> */}
                        {/* {selectedMedia && selectedMedia.mime.startsWith('image') ? ( */}
                        {selectedMedia ? (
                          <>
                          <TouchableOpacity onPress={handleDescriptionImagePicker}>
                            <Image source={{ uri: selectedMedia.path }} style={styles.imageOption} />
                          </TouchableOpacity>
                          <TouchableOpacity onPress={removeMedia} style={{position: 'absolute', end: 0}}><FontistoIcon size={20} name='close'/></TouchableOpacity>
                          </>
                        ):(
                        
                        <TouchableOpacity style={styles.addImageButton} onPress={handleDescriptionImagePicker}>
                            <SvgXml
                              style={{
                               marginRight:5,
                               }}
                               height={60}
                               width={60}
                               stroke={COLORS.transparent}
                               xml={ICONS.addimage}
                               fill={COLORS.white}
                              />
                          </TouchableOpacity>
                        )}
                      </View>
                    )}
                    </>
                    : null }
                    {!active ?
                    <>
                    {isGifBoxVisible && (
                      <View style={{marginTop: 20 }}>
                      {/* <Text>This is the element you can show/hide.</Text> */}
                      {/* <TouchableOpacity onPress={() => changeImage(index)}>
                          <Image source={{}} style={styles.imageOption} />
                      </TouchableOpacity> */}
                      {selectedMedia ? (
                          <>
                          <TouchableOpacity onPress={handleDescriptionImagePicker}>
                            <Image source={{ uri: selectedMedia.path }} style={styles.imageOption} />
                          </TouchableOpacity>
                          <TouchableOpacity  onPress={removeMedia} style={{position: 'absolute', end: 0}}><FontistoIcon size={20} name='close'/></TouchableOpacity>
                          </>
                        ):(
                      <TouchableOpacity style={styles.addImageButton} onPress={handleDescriptionImagePicker}>
                          <SvgXml
                            style={{
                             marginRight:5,
                             }}
                             height={60}
                             width={60}
                             stroke={COLORS.transparent}
                             xml={ICONS.gificon}
                             fill={COLORS.white}
                            />
                        </TouchableOpacity>
                        )}
                    </View>
                    )}
                    </>
                    : null }
                </View>
                <View style={{height: 10, backgroundColor: '#242527'}}></View>
                <View style={{backgroundColor: '#212223', marginBottom: 10, paddingVertical: 15, paddingHorizontal: 30}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={{paddingVertical: 10, marginBottom: 20}}><Text style={{fontSize: 18, }}>Add Options</Text></View>
                    <>
                        <TouchableOpacity
                            onPress={() => { 
                                setActive(!active);
                                if(active){
                                    offset.value = withSpring(0)
                                }else{
                                    offset.value = withSpring(65)
                                }
                            }}
                            style={[{
                                height:25,
                                width:120,
                                // backgroundColor : active ? COLORS.success : COLORS.danger,
                                backgroundColor: '#333436',
                                borderRadius:30,
                                marginTop: 10,
                            }]}
                        >
                            <View
                                style={{
                                    position:'absolute',
                                    height:'100%',
                                    width:'100%',
                                    flexDirection:'row',
                                    alignItems:'center',
                                    paddingHorizontal:4,
                                    justifyContent:'space-around',
                                }}
                            >
                                <Text style={{...FONTS.font,...FONTS.fontBold,fontSize:10,color:COLORS.white,}}><FeatherIcon name='file-text' /> Text</Text>
                                <Text style={{...FONTS.font,...FONTS.fontBold,fontSize:10,color:COLORS.white, gap: 10}}><FeatherIcon name='image' /> Image</Text>
                            </View>
                            <Animated.View
                                style={[toggleStyle,{
                                    height:22,
                                    width:50,
                                    backgroundColor:'grey',
                                    borderRadius:30,
                                    top:2,
                                    left:0,
                                }]}
                            />
                        </TouchableOpacity>
                    </>
                    </View>
                    {active ?
                    <>
                        <View style={{flexDirection: 'row', flexWrap: 'wrap', gap: 10, justifyContent: 'space-between', width: '100%'}}>
                            {imageOptions.map((option, index) => (
                            <View key={index} style={[styles.imageContainerforoption, {display: 'flex', width: '48%',}]}>
                                {option ? (
                                <View style={{}}>
                                    <TouchableOpacity onPress={() => changeImage(index)}>
                                    <Image source={{ uri: option.image.path }} style={styles.imageOption} />
                                    </TouchableOpacity>
                                    <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter Caption..."
                                    value={option.text}
                                    onChangeText={(text) => handleTextChange(index, text)}
                                    />
                                    {imageOptions.length > 2 && (
                                    <TouchableOpacity style={[styles.removeButtoninoption, {position: 'absolute', end:0,}]} onPress={() => removeOption(index)}>
                                        <FontistoIcon size={20} name='close'/>
                                    </TouchableOpacity>
                                    )}
                                    </View>
                                ) : (
                                <TouchableOpacity style={styles.addImageButton} onPress={() => chooseImage(index)}>
                                    <SvgXml
                                        style={{
                                            marginRight:5,
                                        }}
                                        height={60}
                                        width={60}
                                        stroke={COLORS.transparent}
                                        xml={ICONS.addimage}
                                        fill={COLORS.white}
                                    />
                                    <Text style={styles.addImageText}>Add Image</Text>
                                </TouchableOpacity>
                                )}
                            </View>
                            ))}
                            </View>
                        <TouchableOpacity style={styles.addButton} onPress={addImageOption}>
                        <Text style={styles.buttonText}> + Add More</Text>
                        </TouchableOpacity>
                    </>
                    :
                    <View>
                    {options.map((option, index) => (
                    <TextInput
                        key={index}
                        style={{ height: 50, borderColor: 'gray', borderWidth: 0.5, borderRadius: 10, marginBottom: 10, paddingVertical: 10, paddingHorizontal: 20 }}
                        onChangeText={(text) => handleOptionChange(text, index)}
                        value={option}
                        placeholder={`Option ${index + 1}`}
                    />
                    ))}
                    <TouchableOpacity onPress={addOption} style={{ marginBottom: 10 }}>
                    <Text style={{ color: 'grey' }}>+ Add More</Text>
                    </TouchableOpacity>
                    </View>
                    }
                    
                    
                </View>
                <View style={{height: 10, backgroundColor: '#242527'}}></View>
                <View style={{backgroundColor: '#212223',paddingVertical: 15, paddingHorizontal: 30}}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View><Text>Ends In</Text></View>
                        <View>
                        <View style={{display: 'flex',alignSelf: 'flex-start', width: 'auto', borderRadius: 5, marginTop: 3}}>
                            <TouchableOpacity onPress={() => setEndsInVisible(true)} style={{flexDirection: 'row', display: 'flex', paddingHorizontal: 10, }}>
                                {/* <EntypoIcon style={{marginTop: 'auto', marginBottom: 'auto', marginEnd: 10}} name='globe'/> */}
                                <Text style={{fontSize: 12}}>{endstime ? `${endstime} Days` : 'Does not end'}</Text>
                                <FontAwesomeIcon style={{paddingTop: 3, paddingLeft: 8}} name='angle-down' />
                            </TouchableOpacity>
                            <Modal
                                animationType="slide" // You can change animation type as needed
                                transparent={true}
                                statusBarTranslucent= {true}
                                visible={endsInVisible}
                                onRequestClose={() => {
                                    setEndsInVisible(false);
                                }}
                                >
                                <View style={[styles.endsInmodalContainer,{bottom: 0}]}>
                                    <View style={[styles.endsInmodalContent,{backgroundColor: '#242527',}]}>
                                    
                                    <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#333436', padding: 20, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                    <Text>Ends In</Text>
                                    <TouchableOpacity onPress={() => setEndsInVisible(false)}>
                                        <Text>Close</Text>
                                    </TouchableOpacity>
                                    </View>
                                    <View style={{flexDirection: 'row',flexWrap: 'wrap', padding: 20, columnGap: 30, rowGap: 15, justifyContent: 'center'}}>
                                        <TouchableOpacity style={{width: '25%', backgroundColor: 'black', borderWidth: 0.8, borderColor: 'grey', padding: 10, borderRadius: 10, alignItems: 'center'}} onPress={()=>{setEndsTime(1)}}><Text style={{ }}>1 Day</Text></TouchableOpacity>
                                        <TouchableOpacity style={{width: '25%', backgroundColor: 'black', borderWidth: 0.8, borderColor: 'grey', padding: 10, borderRadius: 10, alignItems: 'center'}} onPress={()=>{setEndsTime(3)}}><Text style={{ }}>3 Days</Text></TouchableOpacity>
                                        <TouchableOpacity style={{width: '25%', backgroundColor: 'black', borderWidth: 0.8, borderColor: 'grey', padding: 10, borderRadius: 10, alignItems: 'center'}} onPress={()=>{setEndsTime(5)}}><Text style={{ }}>5 Days</Text></TouchableOpacity>
                                        <TouchableOpacity style={{width: '25%', backgroundColor: 'black', borderWidth: 0.8, borderColor: 'grey', padding: 10, borderRadius: 10, alignItems: 'center'}} onPress={()=>{setEndsTime(7)}}><Text style={{ }}>7 Days</Text></TouchableOpacity>
                                        <TouchableOpacity style={{width: '25%', backgroundColor: 'black', borderWidth: 0.8, borderColor: 'grey', padding: 10, borderRadius: 10, alignItems: 'center'}} onPress={()=>{setEndsTime(15)}}><Text style={{ }}>15 Days</Text></TouchableOpacity>
                                        <TouchableOpacity style={{width: '25%', backgroundColor: 'black', borderWidth: 0.8, borderColor: 'grey', padding: 10, borderRadius: 10, alignItems: 'center'}} onPress={()=>{setEndsTime(30)}}><Text style={{ }}>30 Days</Text></TouchableOpacity>
                                    </View>
                                    </View>
                                </View>
                                </Modal>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        {/* <View style={{marginVertical: 10}}>
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
              <TouchableOpacity style={{marginLeft: 30, marginRight: 10, flexDirection: 'row', alignItems: 'center'}}><Ionicons style={{backgroundColor: '#AA00D3', borderRadius: 30, padding:10, marginRight:7 }} size={25} name='images-outline'/><Text>Photos</Text></TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 10, flexDirection: 'row', alignItems: 'center'}}><Ionicons style={{backgroundColor: '#D40067', borderRadius: 30, padding:10, marginRight:7 }} size={25} name='location-outline'/><Text>Location</Text></TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 10, flexDirection: 'row', alignItems: 'center'}}><FontistoIcon style={{backgroundColor: '#EA381B', borderRadius: 30, padding:10, marginRight:7 }} size={25} name='smiley'/><Text>Feeling</Text></TouchableOpacity>
            </ScrollView>
          </View>
          <View style={{marginBottom: 20, marginTop: 0, marginLeft: 30, }}>
            <Text style={{paddingBottom: 10}}>Add Image / Video</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity onPress={handlePicker} style={{marginRight: 10, paddingTop: 10, flexDirection: 'row', alignItems: 'center'}}><MaterialCommunityIcons style={{borderRadius: 3, borderStyle: 'dashed', borderWidth: 1.5, borderColor: 'grey', padding:10, marginRight:7 }} size={25} name='plus'/></TouchableOpacity>
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
        </View> */}
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
  endsInmodalContainer: {
    flex: 1,
    // width: 150,
    justifyContent: 'flex-end',
    // position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // right: 20,
  },
//   EndsInmodalContent: {
//     width: 200,
//     justifyContent: 'space-around',
//     // alignItems: 'center',
//   },
  modalContent: {
    backgroundColor: 'white',
    // padding: 20,
    borderRadius: 10,
    elevation: 5, // for Android shadow
  },
  containerforimageoption: {
    flex: 1,
    padding: 20,
    // paddingTop: 50,
    // backgroundColor: '#000',
  },
  imageContainerforoption: {
    // flexDirection: 'row',
    // alignItems: 'center',
    marginBottom: 10,
  },
  imageOption: {
    width: '100%',
    height: 180,
    borderRadius: 10,
  },
  removeButtoninoption: {
    backgroundColor: 'black',
    // paddingVertical: 10,
    // paddingHorizontal: 15,
    borderRadius: 20,
    // marginLeft: 10,
  },
  removeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  addImageButton: {
    width: '100%',
    height: 180,
    // backgroundColor: '#e0e0e0',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addImageText: {
    color: '#666',
    fontSize: 16,
  },
  textInput: {
    // width: 200,
    height: 40,
    borderBottomWidth: 0.5,
    borderColor: '#ccc',
    // borderRadius: 5,
    marginTop: 0,
    paddingBottom: 1,
    // paddingHorizontal: 10,
  },
  addButton: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    // paddingVertical: 10,
    // paddingHorizontal: 15,
    // marginTop: 20,
    // borderRadius: 10,
    // height: 150,
    // width: 'auto',
    // alignItems: 'center',
  },
  buttonText: {
    color: 'grey',
    fontSize: 14,
  },
});

export default NewCreatePollScreen;
