import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Header, Divider, ActivityIndicator } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import IoIcon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import NotificationScreen from '../Notifications/NotificationScreen';
import ImagePicker from 'react-native-image-picker'; // Add ImagePicker import
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';
import Ripple from "react-native-material-ripple";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Animated,
  BackHandler,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { List } from 'react-native-paper';
import {
  Colors,
  DebugInstructions,
  // Header,
  // LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import RBSheet from "react-native-raw-bottom-sheet";
import { SvgXml } from "react-native-svg";
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "../../constants/theme";
import CreateSheet from '../../components/ActionSheet/CreateSheet';
import Auth from '../../Service/Auth';
import { formatDistanceToNow } from 'date-fns';

function Section({ children, title }) {
    const {colors} = useTheme();
    const isDarkMode = useColorScheme() === 'dark';
    const myIcon = <Icon name="rocket" size={30} color="#900" />;
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function NewNewsfeed({ navigation }) {

  const [username, setUsername] = useState('');

  useEffect(() => {
    getUser();
  },[]);

  useEffect
  const getUser = async () => {
    let data = await Auth.getAccount();
    // console.log(data)
    // setName(data.name);
    setUsername(data.username);
    // setId(data.id);
    // setemail(data.emailId);
    // setImgUrl(data.img);
    // setBio(data.bio);
    // console.log(data.username) 
}

    const refOptionsSheet = React.useRef();
    const refSuccessSheet = React.useRef();
    const RBSheetReport = React.useRef();
    const postOption = () => {
      return(
          <View>
              <List.Item
                  style={{paddingHorizontal:15}}
                  titleStyle={{...FONTS.font,fontSize:16,color:COLORS.danger}}
                  onPress={() => {RBSheetReport.current.open();refOptionsSheet.current.close()}}
                  title={"Report"}
                  left={() => 
                      <SvgXml
                          style={{
                              marginRight:5,
                          }}
                          height={20}
                          width={20}
                          fill={COLORS.danger}
                          xml={ICONS.info}
                      />
                  }
              />
              <List.Item
                  style={{paddingHorizontal:15}}
                  titleStyle={{...FONTS.font,fontSize:16,color:colors.title}}
                  onPress={() => {}}
                  title={"Share"}
                  left={() => 
                      <SvgXml
                          style={{
                              marginRight:5,
                          }}
                          height={20}
                          width={20}
                          stroke={colors.title}
                          xml={ICONS.share2}
                      />
                  }
              />
          </View>
      )
  }

  const {colors} = useTheme();
  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      refRBSheet.current.close();

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [scrollY] = useState(new Animated.Value(0));
  const [loading, setLoading] = useState(false); // Add loading state 
  const [selectedMedia, setSelectedMedia] = useState(null); // Add selectedMedia state
  const [postImage, setPostImage] = useState(null); // Add postImage state

  const handlePicker = async () => {
    try {
      const response = await ImagePicker.openPicker({
        mediaType: 'mixed',
      });
      if (!response.didCancel) {
        setLoading(true); // Set loading to true when uploading starts
        setSelectedMedia(response);
        if (response.assets.length > 0) {
          const selectedAsset = response.assets[0];
          setPostImage(selectedAsset.uri);
        }

        navigation.navigate('NewsFeed');
        // Assuming uploadMedia is defined somewhere
        // await uploadMedia(response.path);
        setLoading(false); // Set loading to false when upload completes
      }
    } catch (error) {
      console.log('ImagePicker Error: ', error);
    }
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postsRef = database().ref('posts');

    // Listen for data changes at the "posts" node
    const onPostsChange = snapshot => {
      const data = snapshot.val();
      if (data) {
        // Convert the data object to an array of posts
        const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
        setPosts(postsArray);
      } else {
        setPosts([]);
      }
    };

    // Attach the listener
    postsRef.on('value', onPostsChange);

    // Detach the listener when the component unmounts
    return () => postsRef.off('value', onPostsChange);
  }, []); // Run this effect only once, on component mount

  // console.log(posts)

  // const bottomSheetRef = useRef();
  const refRBSheet = useRef();

  const openBottomSheet = () => {
    refRBSheet.current.open();
  };

  const closeBottomSheet = () => {
    refRBSheet.current.close();
  };

  const closeSheet = () => {
    bottomSheetRef.current.close(); // Close bottom sheet
  };

  // Add listener to close sheet when navigating away from the screen
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('blur', () => {
      closeBottomSheet(); // Close the bottom sheet when navigating away
    });

    return unsubscribe;
  }, [navigation]);

  const { width } = Dimensions.get('window');

  const sortedPosts = posts.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB - dateA;
  });

  const handleLike = (postId) => {
    // Get the current user ID from your authentication system (replace 'userId' with actual user ID)
    // console.log(username, '244')
    
    const userId = username; // Replace 'user123' with actual user ID
    
    // const username = 'username'; // Replace 'username' with actual username
    
    // Get the current timestamp in ISO 8601 format
    const timestamp = new Date().toISOString();

    // Check if the user has already liked the post
    database().ref(`posts/${postId}/likes/${userId}`).once('value', snapshot => {
      const isLiked = snapshot.val();
      
      // Toggle like status
      if (isLiked) {
        // User already liked the post, unlike it
        database().ref(`posts/${postId}/likes/${userId}`).remove(); // Remove user's like
        
        // Remove like information for the user
        database().ref(`posts/${postId}/like_info`).orderByChild('liked_by').equalTo(userId).once('value', snapshot => {
          snapshot.forEach(childSnapshot => {
            database().ref(`posts/${postId}/like_info/${childSnapshot.key}`).remove(); // Remove like info
          });
        });
        
        // Decrement the total count of likes
        database().ref(`posts/${postId}/like_count`).transaction(count => count - 1);
      } else {
        // User hasn't liked the post, like it
        database().ref(`posts/${postId}/likes/${userId}`).set(true); // Set user's like
        
        // Save like information (username and timestamp) under the post
        database().ref(`posts/${postId}/like_info`).push({ liked_by: userId, timestamp });
        
        // Increment the total count of likes
        database().ref(`posts/${postId}/like_count`).transaction(count => (count || 0) + 1);
      }
    });
  };

  const reportData = [
    "It's spam",
    "Nudity or sexual activity",
    "Hate speech or symbols",
    "I just dont't like it",
    "Bullying or harassment",
    "False information",
    "Violence or dangerous organizations",
    "Scam or fraud",
    "Intellectual property violation",
    "Sale of illegal or regulated goods",
    "Suicide or self-injury",
    "Eating disorders",
    "Something else"
];

const formatTimeAgo = (timestamp) => {
  const distance = formatDistanceToNow(new Date(timestamp), { addSuffix: false });

  const now = new Date();
  const past = new Date(timestamp);
  const diffInSeconds = Math.floor((now - past) / 1000);
  
  if (diffInSeconds < 60) {
      return `${diffInSeconds}s ago`;
  } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes}m ago`;
  } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours}h ago`;
  } else if (diffInSeconds < 604800) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days}d ago`;
  } else {
      const weeks = Math.floor(diffInSeconds / 604800);
      return `${weeks}w ago`;
  }
};


  return (
    <SafeAreaView style={[backgroundStyle, {width: '100%'}]}>
      <RBSheet
                ref={refSuccessSheet}
                closeOnDragDown={true}
                height={180}
                openDuration={300}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,.3)',
                    },
                    container:{
                        backgroundColor:colors.card,
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    },
                }}
            >
                <View style={{alignItems:'center',paddingTop:25}}>

                    <Image
                        source={IMAGES.check}
                        style={{
                            height:50,
                            width:50,
                            marginBottom:20,
                        }}
                    />
                    <Text style={{...FONTS.h5,color:colors.title}}>Thanks for letting us know</Text>
                </View>
                
            </RBSheet>

            <RBSheet
                ref={refOptionsSheet}
                closeOnDragDown={true}
                height={170}
                openDuration={300}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,.3)',
                    },
                    container:{
                        backgroundColor:colors.card,
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    },
                }}
            >
                {postOption()}
                
            </RBSheet>

            <RBSheet
                ref={RBSheetReport}
                closeOnDragDown={true}
                height={600}
                openDuration={300}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,.3)',
                    },
                    container:{
                        backgroundColor:colors.card,
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    },
                }}
            >
                <View style={{alignItems:'center',borderBottomWidth:1,borderColor:colors.borderColor,paddingBottom:8,paddingTop:4}}>
                    <Text style={{...FONTS.h5,color:colors.title}}>Report</Text>
                </View>
                <View style={{padding:15}}>
                    <Text style={{...FONTS.h6,color:colors.title}}>Why are you reporting this post?</Text>
                    <Text style={{...FONTS.fontSm,color:colors.text}}>Your report is anonymous, except if you're reporting an intellectual property infirngement. If someone is in immediate danger, call the local emergency services - don't wait.</Text>
                </View>
                <ScrollView contentContainerStyle={{paddingBottom:20}}>
                    {reportData.map((data,index) => (
                        <List.Item
                            titleStyle={{color:colors.title}}
                            onPress={() => {refSuccessSheet.current.open();RBSheetReport.current.close()}}
                            key={index}
                            title={data}
                        />
                    ))}
                </ScrollView>
            </RBSheet>
      <Ripple
                accessible={true}
                accessibilityLabel="Chat"
                accessibilityHint="add user to chat"
                onPress={openBottomSheet}
                style={{
                    position:'absolute',
                    height:55,
                    width:55,
                    backgroundColor:COLORS.primary,
                    // backgroundColor:'#55288E',
                    zIndex:9,
                    bottom: 70,
                    right:10,
                    alignItems:'center',
                    justifyContent:'center',
                    borderRadius:50,
                }}
            >   
                <SvgXml
                    height={25}
                    width={25}
                    fill={COLORS.white}
                    xml={ICONS.plus}
                />
            </Ripple>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View>
        <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
          {loading && ( // Render loading animation if loading is true
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
          
          <View
          style={{backgroundColor: isDarkMode ? '#0C1427' : '#fff', padding: 10, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
           >
            <Text style={{color: isDarkMode ? '#d0d6e1' : '#293241', fontSize: 30, fontWeight: '500'}} >Newsfeed</Text>
            <View style={{flexDirection:'row'}}>
            <IoIcon.Button name="search-outline" size={30} backgroundColor={isDarkMode ? '#0C1427' : '#fff'} color={isDarkMode ? '#d0d6e1' : '#293241'} ></IoIcon.Button>
            <Icon.Button name="sliders" onPress={() => navigation.navigate('NotificationsScreen')} backgroundColor={isDarkMode ? '#0C1427' : '#fff'} size={30} color={isDarkMode ? '#d0d6e1' : '#293241'}></Icon.Button>
            </View>
          </View>
          {/* <Button title="Open Bottom Sheet" onPress={openBottomSheet} /> */}
          
          <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                // height={activeSheet === "option" ? 270 : 
                //         activeSheet === "success" ? 220 :
                //         activeSheet === "login" ? 360 :
                //         activeSheet === "register" ? 430 : 230}
                height={380}
                openDuration={380}
                closeDuration={380}
                customStyles={{
                    wrapper: {
                    },
                    container:{
                        // backgroundColor: colors.card,
                        backgroundColor: backgroundStyle.backgroundColor,
                        backgroundColor: isDarkMode ? '#070D19' : '#fff',
                        borderTopLeftRadius:15,
                        borderTopRightRadius:15,
                    },
                    draggableIcon: {
                        marginTop:5,
                        marginBottom:0,
                        height:5,
                        width:40,
                        backgroundColor: colors.borderColor,
                    }
                }}
            >
                {/* {activeSheet === "option" ?
                    <OptionBar/> :
                activeSheet === "success" ?
                    <SuccessSheet/>:
                activeSheet === "login" ?
                    <LoginSheet/>:
                activeSheet === "register" ?
                    <RegisterSheet/>
                    :
                    <SuccessSheet/>
                } */}
                {/* <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Text>This is the bottom sheet content</Text>
          <Button title="Close Bottom Sheet" onPress={closeBottomSheet} />
        </View> */}
        <CreateSheet />

            </RBSheet>
          <View style={{backgroundColor: isDarkMode ? '#070D19' : '#fff', paddingVertical: 15, paddingHorizontal: 10, borderBottomWidth: 0.5, borderColor: 'grey'}} >
            <Text style={{fontSize: 22, color: isDarkMode ? '#d0d6e1' : '#293241', fontWeight: "500"}}>Your Groups</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:"row", marginTop: 15, overflow: 'scroll'}}>
              <AntIcon name='plus' size={25} style={{padding: 9, backgroundColor:isDarkMode ? '#0C1427' : '#F4F4F5' , borderRadius: 50}} color={isDarkMode ? '#d0d6e1' : 'black'} ></AntIcon>
              <Text style={{marginHorizontal:15, backgroundColor: "#293241", color:"white", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 50}}>All</Text>
              <Text style={{marginRight:15, backgroundColor: isDarkMode ? '#0C1427' : "#F4F4F5", color: isDarkMode ? '#d0d6e1' :"#293241", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 50}}>Baking & Cooking</Text>
              <Text style={{marginRight:15, backgroundColor: isDarkMode ? '#0C1427' : "#F4F4F5", color: isDarkMode ? '#d0d6e1' :"#293241", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 50}}>Croquet</Text>
              <Text style={{marginRight:15, backgroundColor: isDarkMode ? '#0C1427' : "#F4F4F5", color: isDarkMode ? '#d0d6e1' :"#293241", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 50}}>Skydiving</Text>
            </ScrollView>
          </View>
          <View style={[styles.tabsContainer,{backgroundColor: isDarkMode ? '#070D19' : '#fff'}]}>
            <Text style={[styles.tab,{backgroundColor: isDarkMode ? '#0C1427' : '#F4F4F5', color: isDarkMode ? '#d0d6e1' : 'black'}]}>Following</Text>
            <Text style={styles.tabactive}>Groups</Text>
            <Text style={[styles.tab,{backgroundColor: isDarkMode ? '#0C1427' : '#F4F4F5', color: isDarkMode ? '#d0d6e1' : 'black'}]}>Create</Text>
          </View>
            {
              sortedPosts.map(item => (
              <View key={item.id} style={{backgroundColor: isDarkMode ? '#070D19' : '#fff', padding: 15, width: '100%'}}>
              <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20 }}>
                <View style={{flexDirection: 'row'}}>
                  {/* <TouchableOpacity onPress={() => navigation.navigate('OtherProfile', { userId : item.createdUserId})}> */}
                  <TouchableOpacity onPress={() => navigation.navigate(item.username === username ? 'ProfileNew' : 'OtherProfile', { userId : item.createdUserId})}>
                    <Image source={item.userImage ? {uri : item.userImage} : require('../../../painting.jpg')} style={{paddingVertical: 15, width: 50, height: 50 ,marginEnd: 10 ,paddingHorizontal: 18, backgroundColor: isDarkMode ? '#0C1427' : '#293241', borderRadius: 30,}}></Image>
                  </TouchableOpacity>
                  <View style={{marginTop:5}}>
                    <Text style={{fontSize:18, fontWeight: '700', color: isDarkMode ? '#d0d6e1' : '#293241' }}>{item.createdUserDetails.displayName ? item.createdUserDetails.displayName : 'Wes Frances'}</Text>
                    <Text style={{color: isDarkMode ? '#7987a1' : 'black'}}>{item.username ? item.username : 'Wesfrances'}</Text> 
                  </View>
                </View>
                <View>
                  <View style={{flexDirection: 'row', paddingTop: 10}}>
                    {item.username !== username 
                    ? 
                    <TouchableOpacity>
                      <Text style={[styles.tab,{backgroundColor: isDarkMode ? '#0C1427' : '#F4F4F5', color: isDarkMode ? '#d0d6e1' : '#000'}]}>Following</Text>
                    </TouchableOpacity>
                    :
                    // <TouchableOpacity>
                    //   <Text style={[styles.tab,{backgroundColor: isDarkMode ? '#0C1427' : '#F4F4F5', color: isDarkMode ? '#d0d6e1' : '#000'}]}>Following</Text>
                    // </TouchableOpacity>
                    null
                    }
                    <TouchableOpacity onPress={() => refOptionsSheet.current.open()}>
                      <Text style={{fontSize: 20, marginHorizontal: 10}}>...</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View>
                <Text style={{color: isDarkMode ? '#7987a1' : '#293241', fontSize: 15}}>{item.text ? item.text : item.pollTitle ? item.pollTitle : ''}</Text>
              </View>
              <View>
                {item.postImage || item.pollDiscriptionImage  ?
                    <Image
                  // source={require('../../../painting.jpg')}
                  source={item.postImage ? {uri : item.postImage} : item.pollDiscriptionImage ? {uri : item.pollDiscriptionImage} : require('../../../painting.jpg')}
                  style={{marginTop: 10 , width: '100%', height: 380, borderRadius: 10, marginRight: 15}}
                  /> : null
                }
              </View>
              {item.postType === "polls" ? 
              (<View style={{width: '100%'}}>
                <View>
                  {/* {posts.textOptions.map((option, index)=>{
                    <TouchableOpacity key={index}><Text>{option.text}</Text></TouchableOpacity>
                  })} */}
                  {item.textOptions[0].text !== '' && item.textOptions.map((option, index) => {
                    // console.log(option, "line no 321")
                    // console.log(item.imageOptions, "line no 323")
                    return (
                      <TouchableOpacity key={index} style={{backgroundColor: '#0C1427', borderWidth: 0.8, borderColor: 'grey', paddingHorizontal: 20, paddingVertical: 10, marginTop: 10, borderRadius: 7}}>
                        <Text style={{color: 'white'}}>{option.text}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
                <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap'}}>
                  {item.imageOptions !== 'Not Added' && item.imageOptions.map((option, index) => {
                    // console.log(option, "line no 321")
                    return (
                      <TouchableOpacity key={index} style={{backgroundColor: '#0C1427', marginTop: 10, }}>
                        <Image style={{flexGrow: 1, height: 120, width: width * 0.45, borderRadius: 10, borderWidth: 0.8, borderColor: 'grey',}} source={{uri: option.image}} />
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
              ) : (
              <></>)}
              <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 15, justifyContent: 'space-around'}}>
                <View>
                  <TouchableOpacity style={{marginRight: 0}}>
                    <View style={{backgroundColor: isDarkMode ? '#0C1427' : '#F5F5F5', borderRadius: 50}}>
                      <MaterialIcons name='calendar-today' size={25} style={{padding: 14, margin: 'auto', borderRadius: 50, color:isDarkMode ? '#F4F4F5' : 'black'}}  ></MaterialIcons>
                    </View>
                    <Text style={{textAlign: 'center', color: isDarkMode ? '#d0d6e1' : '#000'}}>{formatTimeAgo(item.createdAt)}</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity  onPress={() => handleLike(item.id)} style={{marginRight: 0}}>
                    <View style={{backgroundColor: isDarkMode ? '#0C1427' : '#F5F5F5', borderRadius: 50}}>
                    {/* <AntIcon name='hearto' size={25} style={{paddingHorizontal: 14, paddingVertical: 14, margin: 'auto' , borderRadius: 50, color:isDarkMode ? '#F4F4F5' : 'black'}}></AntIcon> */}
                    <AntIcon name={'hearto' } size={25} style={{paddingHorizontal: 14, paddingVertical: 14, margin: 'auto' , borderRadius: 50, color:isDarkMode ? '#F4F4F5' : 'black'}}></AntIcon>
                    </View>
                    <Text style={{textAlign: 'center', color: isDarkMode ? '#d0d6e1' : '#000'}}>{item.like_count}</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  {/* <TouchableOpacity  onPress={()=> navigation.navigate('Comments')}  style={{marginRight: 0}}> */}
                  <TouchableOpacity  onPress={()=> navigation.navigate('CommensNew', { postId: item.id})}  style={{marginRight: 0}}>
                    <View style={{backgroundColor: isDarkMode ? '#0C1427' : '#F5F5F5', borderRadius: 50}}>
                      <IoIcon name='chatbubbles-outline' size={25} style={{padding: 14, margin: 'auto', borderRadius: 50, color:isDarkMode ? '#F4F4F5' : 'black'}}></IoIcon>
                    </View>
                    <Text style={{textAlign: 'center', color: isDarkMode ? '#d0d6e1' : '#000'}}>{item.commentsCount ? item.commentsCount : 0}</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity  style={{marginRight: 0}}>
                    <View style={{backgroundColor: isDarkMode ? '#0C1427' : '#F5F5F5', borderRadius: 50}}>
                      <SimpleLineIcons name='action-redo' size={25} style={{padding: 13, margin: 'auto' , borderRadius: 50, color:isDarkMode ? '#F4F4F5' : 'black'}} ></SimpleLineIcons>
                    </View>
                    <Text style={{textAlign: 'center', color: isDarkMode ? '#d0d6e1' : '#000'}}>Share</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
              ))
            }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 16,
    paddingHorizontal: 6,
    backgroundColor: 'white',
  },
  tab: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#F4F4F5',
    paddingHorizontal: 30,
    paddingVertical: 6,
    borderRadius: 50,
    color: 'black',
  },
  tabactive: {
    fontSize: 16,
    fontWeight: '400',
    backgroundColor: '#293241',
    paddingHorizontal: 30,
    paddingVertical: 6,
    borderRadius: 50,
    color: 'white',
  },
  groupIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 8,
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  postContent: {
    flex: 1,
    marginLeft: 12,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  postText: {
    fontSize: 14,
  },
  addPostButton: {
    alignSelf: 'flex-end',
  },
  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
  },
});

export default NewNewsfeed;
