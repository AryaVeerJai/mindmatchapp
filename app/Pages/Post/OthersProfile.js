
import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, useColorScheme, ActivityIndicator, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import LatoRegular from '../../assets/fonts/Lato-Regular.ttf';
import { Button } from 'react-native-elements';
import Auth from '../../Service/Auth';
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../constants/theme';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';
import database from '@react-native-firebase/database';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import AntIcon from 'react-native-vector-icons/AntDesign';
import IoIcon from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import RBSheet from "react-native-raw-bottom-sheet";
import { List } from 'react-native-paper';
import { SvgXml } from "react-native-svg";


const OthersProfile = ({ navigation , route }) => {
  const { width } = Dimensions.get('window');
  const {colors} = useTheme();

    const { userId } = route.params;

    const refOptionsSheet = React.useRef();
    const refSuccessSheet = React.useRef();
    const RBSheetReport = React.useRef();

      // Define state variables
      const [imgUrl, setImgUrl] = useState(null);
      const [coverImgUrl, setCoverImgUrl] = useState(null);
      const [name, setName] = useState('');
      const [username, setUsername] = useState('');
      const [oneUserId, setOneUserId] = useState('');
      const [bio, setBio] = useState('');
      const [profileLink, setProfileLink] = useState('');
      const [currentUserId, setCurrentUserId] = useState('');
      const [loading, setLoading] = useState(false);
  
      // Use useFocusEffect hook to trigger the data loading when the screen comes into focus
      useFocusEffect(
          React.useCallback(() => {
              // Define the asynchronous function to fetch user data
              const getUser = async () => {
                  setLoading(true); // Set loading state to true while fetching data
                  try {
                    
                    const additionalDataRef = database().ref(`users/${userId}`);
                    additionalDataRef.once('value', snapshot => {
                        const data = snapshot.val();
                        // setUserData(data);
                        setImgUrl(data.img);
                        setCoverImgUrl(data.coverimg);
                        setName(data.name);
                        setUsername(data.username);
                        setOneUserId(data.id);
                        setBio(data.bio);
                        setProfileLink(data.profileLink);
                    });
                      
                    //   console.log("45 : ",data)
                  } catch (error) {
                      console.error('Error fetching user data:', error);
                  } finally {
                      setLoading(false); // Set loading state to false after data fetching is done (whether successful or not)
                  }
              };
  
              // Call the getUser function when the screen comes into focus
              getUser();

              const getCurrentUser = async () => {
                setLoading(true); // Set loading state to true while fetching data
                try {
                    // Fetch user data from Auth service
                    let currentdata = await Auth.getAccount();
                    // Update state variables with fetched data
                    setCurrentUserId(currentdata.id);
                } catch (error) {
                    console.error('Error fetching user data:', error);
                } finally {
                    setLoading(false); // Set loading state to false after data fetching is done (whether successful or not)
                }
            };

            // Call the getUser function when the screen comes into focus
            getCurrentUser();
  
              // Return a cleanup function (optional)
              return () => {
                  // This function is called when the component unmounts or when the effect is re-run
                  // You can perform any cleanup here if needed
              };
          }, []) // Dependency array is empty, so this effect runs only once when the component mounts
      );

      const [isFollowing, setIsFollowing] = useState(false);
  
    //   useEffect(() => {
    //     // Check if the current user is already following the profile being viewed
    //     const followingRef = database().ref(`users/${currentUserId}/following`);
    //     followingRef.child(userId).once('value', snapshot => {
    //       setIsFollowing(snapshot.exists());  
    //     });
    //   }, []);

    useEffect(() => {
        setLoading(true);
        // Check if the current user is already following the profile being viewed
        const followingRef = database().ref(`users/${currentUserId}/following`);
        followingRef.child(userId).once('value', snapshot => {
            setIsFollowing(snapshot.exists());
            
        setLoading(false);
            
        });
    }, [currentUserId]);
    
      const handleFollow = () => {
        const followingRef = database().ref(`users/${currentUserId}/following`);
        
        followingRef.child(userId).set(true)
          .then(() => {
            console.log('User followed successfully');
            setIsFollowing(true);
          })
          .catch(error => {
            console.error('Error following user:', error);
          });
  
            // Reference to the user being followed (to update their followers list)
          const userRef = database().ref(`users/${userId}/followers`);
  
          // Add the current user to the other user's followers list
          userRef.child(currentUserId).set(true)
              .then(() => {
              console.log('Current user added to other user\'s followers list');
              })
              .catch(error => {
              console.error('Error adding current user to other user\'s followers list:', error);
              });
      };
    
      const handleUnfollow = () => {
        const followingRef = database().ref(`users/${currentUserId}/following`);
        setIsFollowing(false);
        followingRef.child(userId).remove()
          .then(() => {
            console.log('User unfollowed successfully');
            setIsFollowing(false);
          })
          .catch(error => {
            console.error('Error unfollowing user:', error);
          });
            // Reference to the user being unfollowed (to update their followers list)
          const userRef = database().ref(`users/${userId}/followers`);
  
          // Remove the current user from the other user's followers list
          userRef.child(currentUserId).remove()
              .then(() => {
              console.log('Current user removed from other user\'s followers list');
              })
              .catch(error => {
              console.error('Error removing current user from other user\'s followers list:', error);
              });
      };

      const [activeButton, setActiveButton] = useState (1); // 1 for first button, 2 for second button

      const handleButtonClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
      };
  
      // Determine the color scheme
      const isDarkMode = useColorScheme() === 'dark';
      // const navigation = useNavigation ();
      // const navigation = useNavigation();

      

      const [userPosts, setUserPosts] = useState([]);

      useEffect(() => {
        const fetchUserPosts = async () => {
          try {
            // Fetch posts data from Firebase
            const postsRef = database().ref('posts');
            const snapshot = await postsRef.once('value');
    
            // Convert snapshot to JavaScript object
            const postsData = snapshot.val();
            
            // Filter posts to include only those created by the logged-in user
            const filteredPosts = Object.values(postsData).filter(post => post.createdUserId === userId);
            
            setUserPosts(filteredPosts);
          } catch (error) {
            console.error('Error fetching user posts:', error);
          }
        };
    
        fetchUserPosts();
      }, [userId]);

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
      "Something else",
  ];
      
  return (
    <>
    <View style={{backgroundColor: '#20292C'}}><TouchableOpacity onPress={()=> navigation.goBack()} ><AntDesignIcon name='arrowleft' style={{paddingHorizontal: 20, paddingVertical: 15}} size={25}></AntDesignIcon></TouchableOpacity></View>
    <ScrollView style={[styles.container,{backgroundColor: isDarkMode ? '#20292C' : 'inherit', width: '100%'}]}>
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
      {loading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={COLORS.primary} />
                </View>
            ) : (
              <View>
        <View style={{borderRadius: 15, backgroundColor: isDarkMode ? '#2F3131' : 'inherit' }}>
            <View style={[styles.topsettingbtn,{alignItems: 'flex-end', marginHorizontal: 10, marginTop: 10}]}>
            {/* <Icon.Button name="sliders" 
            iconStyle={{ marginRight: 0, marginTop: 0 , paddingTop: 0 }}
            onPress={() => navigation.navigate('Settings')} 
            // backgroundColor={isDarkMode ? '#0C1427' : '#fff'} 
            style={{paddingHorizontal: 10, paddingBottom: 5, paddingTop: 5}}
            backgroundColor={isDarkMode ? '#ffffff21' : '#fff'} 
            size={20} color={isDarkMode ? '#fff' : '#293241'}></Icon.Button> */}
            </View>
            {/* Banner Image */}
            <Image
                // source={require('../../../profile.webp')}
                source={coverImgUrl ? {uri : coverImgUrl} : IMAGES.user}
                style={styles.bannerImage}
            />


            {/* Profile Picture and Bio */}
            <View style={styles.profileContainer}>
                <Image
                // source={require('../../../profile.webp')}
                source={imgUrl ? {uri : imgUrl} : IMAGES.user}
                style={styles.profilePicture}
                />
                <View style={styles.profilepicedit}>
                <Icon.Button name="plus" 
                // onPress={() => navigation.navigate('NotificationsScreen')} 
                iconStyle={{ marginRight: 0 }}
                backgroundColor={isDarkMode ? 'blue' : '#fff'} 
                style={{paddingTop: 5.5, paddingBottom: 5, paddingLeft: 7, paddingRight: 5.5}}
                // backgroundColor={isDarkMode ? '#ffffff00' : '#fff'} 
                size={10} 
                borderRadius={50}
                color={isDarkMode ? '#d0d6e1' : '#293241'}/></View>

                {/* </Icon.Button> */}
                {/* <Text style={[styles.userName,{fontFamily: 'Lato-Regular'}]}>Jane Cooper</Text> */}
                <Text style={[styles.userName,{fontFamily: 'Lato-Regular'}]}>{name ? name : 'Jane Cooper'}</Text>
                <Text style={styles.bio}>{bio ? bio : 'Apple CEO,  Auburn buke,  National parks'}</Text>
                <Text style={styles.link}>{profileLink ? profileLink : 'bio.link.io/j.copr'}</Text>
                {/* Add a link component for the bio or website */}
            </View>
            {/* {Edit Profile Button} */}
            <View style={[styles.editprofilebox,{marginVertical: 10, flexDirection: 'row', justifyContent: 'space-around', gap: 20 }]}>
            {isFollowing ? (
                <TouchableOpacity 
                onPress={handleUnfollow} 
                style={[styles.editProfileBtn, {flexDirection: 'row', justifyContent: 'center', gap: 10, width: '50%', }]}>
                <Text style={[styles.buttonText, {textAlign: 'center', fontWeight: '300', fontSize: 18}]}>
                    Unfollow
                    </Text>
                </TouchableOpacity>
                ) : (
                    <TouchableOpacity 
                    onPress={handleFollow} 
                style={[styles.followBtn, {flexDirection: 'row', justifyContent: 'center', gap: 10, width: '50%', backgroundColor: '#3A71F9'}]}>
                <Text style={[styles.buttonText, {textAlign: 'center', fontWeight: '300', fontSize: 18}]}>
                    Follow
                    </Text>
                </TouchableOpacity>)}
                <TouchableOpacity 
                onPress={() => navigation.navigate('EditProfile')} 
                style={[styles.editProfileBtn, {flexDirection: 'row', justifyContent: 'center', gap: 10, width: '50%'}]}>
                <Text style={[styles.buttonText, {textAlign: 'center', fontWeight: '300', fontSize: 18}]}>
                    Message
                    
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Stats Section */}
            {/* <View style={styles.statsContainer}>
                <Text style={styles.stat}>Posts: 100</Text>
                <Text style={styles.stat}>Following: 500</Text>
                <Text style={styles.stat}>Followers: 1000</Text>
            </View> */}

            {/* states: like followers... */}
            <View style={styles.statsContainer}>
                    <TouchableOpacity style={[styles.statItem,{}]}>
                    <Text style={[styles.statNumber,{ color: isDarkMode ? '#fff' : '#000' }]}>103</Text>
                    <Text style={styles.statLabel}>Posts</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileFollow', { userId : oneUserId})} style={[styles.statItem, {borderRightWidth: 0.2, borderLeftWidth: 0.2, borderColor: '#E6EBEB', paddingHorizontal: 30}]}>
                    <Text style={[styles.statNumber,{ color: isDarkMode ? '#fff' : '#000' }]}>870</Text>
                    <Text style={styles.statLabel}>Following</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('ProfileFollow', { userId : oneUserId})} style={styles.statItem}>
                    <Text style={[styles.statNumber,{ color: isDarkMode ? '#fff' : '#000' }]}>120k</Text>
                    <Text style={styles.statLabel}>Followers</Text>
                    </TouchableOpacity>
            </View>
        </View>
      {/* Story Highlights */}
      {/* <ScrollView horizontal style={styles.highlightsContainer}>
        {/* Add icons for story highlights */}
        {/* Add a button to view all stories */}
      {/* </ScrollView> */}
        <View style={{backgroundColor: isDarkMode ? '#2F3131' : 'inherit', marginTop: 12, paddingBottom: 5 }}>
            {/* Story Highlights */}
            <View style={{paddingHorizontal: 20, paddingTop: 20,}}><Text style={{fontSize: 15}}>Recent Updates</Text></View>
            <ScrollView horizontal style={[styles.highlightsContainer,{paddingHorizontal: 20,}]} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.storyHighlight}>
                    <FeatherIcon.Button name="plus" 
                    backgroundColor={isDarkMode ? '#ffffff00' : '#fff'} 
                    style={{borderWidth: 0.5, borderRadius: 15, padding: 13, marginVertical: 5.5, borderColor: '#E6EBEB'}}
                    iconStyle={{ marginRight: 0 }}
                    size={20} color={isDarkMode ? '#d0d6e1' : '#293241'}></FeatherIcon.Button>
                <Text style={styles.storyName}>Add Story</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.storyHighlight}>
                <Image
                    source={require('../../../profile.webp')}
                    style={styles.storyIcon}
                />
                <Text style={styles.storyName}>Travel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.storyHighlight}>
                <Image
                    source={require('../../../profile.webp')}
                    style={styles.storyIcon}
                />
                <Text style={styles.storyName}>Food</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.storyHighlight}>
                <Image
                    source={require('../../../profile.webp')}
                    style={styles.storyIcon}
                />
                <Text style={styles.storyName}>Friends</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.storyHighlight}>
                <Image
                    source={require('../../../profile.webp')}
                    style={styles.storyIcon}
                />
                <Text style={styles.storyName}>Hangout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.storyHighlight}>
                <Image
                    source={require('../../../profile.webp')}
                    style={styles.storyIcon}
                />
                <Text style={styles.storyName}>Travel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.storyHighlight}>
                <Image
                    source={require('../../../profile.webp')}
                    style={styles.storyIcon}
                />
                <Text style={styles.storyName}>Travel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.storyHighlight}>
                <Image
                    source={require('../../../profile.webp')}
                    style={styles.storyIcon}
                />
                <Text style={styles.storyName}>Food</Text>
                </TouchableOpacity>
        {/* Add more story highlights here */}
        {/* <TouchableOpacity style={styles.addStoryButton}>
          <Image
            source={require('../../../profile.webp')}
            style={styles.plusIcon}
          />
        </TouchableOpacity> */}
            </ScrollView>
        </View>

            {/* Buttons */}
        <View style={{borderRadius: 15, backgroundColor: isDarkMode ? '#2F3131' : 'inherit', marginTop: 12, paddingTop: 20 }}>
            <View style={{paddingHorizontal: 10}}>
                <View style={[styles.buttonContainer, {backgroundColor: '#20292C',}]}>
                    <TouchableOpacity style={[styles.button1, {backgroundColor: activeButton === 1 ? '#3A71F9' : 'transparent', borderRadius: activeButton === 1 ? 15 : 5}]} onPress={() => handleButtonClick(1)}>
                    <Text style={styles.buttonText}>Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, {backgroundColor: activeButton === 2 ? '#3A71F9' : 'transparent', borderRadius: activeButton === 2 ? 15 : 5}]} onPress={() => handleButtonClick(2)}>
                    <Text style={styles.buttonText}>Media</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {activeButton === 1 && (
              <View style={{marginBottom: 80}}>
              {/* <Post/> */}
              {
              userPosts.map((item, index) => (
              <View key={index} style={{ padding: 15, width: '100%'}}>
                <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20 }}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('OtherProfile', { userId : item.createdUserId})}>
                      <Image source={item.userImage ? {uri : item.userImage} : require('../../../painting.jpg')} style={{paddingVertical: 15, width: 50, height: 50 ,marginEnd: 10 ,paddingHorizontal: 18, backgroundColor: isDarkMode ? '#0C1427' : '#293241', borderRadius: 30,}}></Image>
                    </TouchableOpacity>
                    <View style={{marginTop:5}}>
                      <Text style={{fontSize:18, fontWeight: '700', color: isDarkMode ? '#d0d6e1' : '#293241' }}>{item.createdUserDetails.displayName ? item.createdUserDetails.displayName : 'Wes Frances'}</Text>
                      <Text style={{color: isDarkMode ? '#7987a1' : 'black'}}>{item.username ? item.username : 'Wesfrances'}</Text> 
                    </View>
                  </View>
                  <View>
                    <View style={{flexDirection: 'row', paddingTop: 10}}>
                      {/* <Text style={[styles.tab,{backgroundColor: isDarkMode ? '#0C1427' : '#F4F4F5', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 15, alignItems: 'center', color: isDarkMode ? '#d0d6e1' : '#000'}]}>Following</Text> */}
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
                    <Text style={{textAlign: 'center', color: isDarkMode ? '#d0d6e1' : '#000'}}>2hr ago</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity  onPress={() => handleLike(item.id)} style={{marginRight: 0}}>
                    <View style={{backgroundColor: isDarkMode ? '#0C1427' : '#F5F5F5', borderRadius: 50}}>
                    <AntIcon name='hearto' size={25} style={{paddingHorizontal: 14, paddingVertical: 14, margin: 'auto' , borderRadius: 50, color:isDarkMode ? '#F4F4F5' : 'black'}}></AntIcon>
                    </View>
                    <Text style={{textAlign: 'center', color: isDarkMode ? '#d0d6e1' : '#000'}}>26.3k</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  {/* <TouchableOpacity  onPress={()=> navigation.navigate('Comments')}  style={{marginRight: 0}}> */}
                  <TouchableOpacity  onPress={()=> navigation.navigate('CommensNew', { postId: item.id})}  style={{marginRight: 0}}>
                    <View style={{backgroundColor: isDarkMode ? '#0C1427' : '#F5F5F5', borderRadius: 50}}>
                      <IoIcon name='chatbubbles-outline' size={25} style={{padding: 14, margin: 'auto', borderRadius: 50, color:isDarkMode ? '#F4F4F5' : 'black'}}></IoIcon>
                    </View>
                    <Text style={{textAlign: 'center', color: isDarkMode ? '#d0d6e1' : '#000'}}>973</Text>
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
              </View>
            )}
            {activeButton === 2 && (
              <View style={{marginBottom: 80}}>
            <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
                <View style={styles.bgimagebox}>
                    <View>
                        <TouchableOpacity>
                        <Image
                            source={require('../../../profile.webp')}
                            style={styles.mediaimage}
                        />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.smimagebox}>
                    <View>
                        <TouchableOpacity>
                        <Image
                            source={require('../../../profile.webp')}
                            style={styles.mediaimagesm}
                        />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity>
                        <Image
                            source={require('../../../profile.webp')}
                            style={styles.mediaimagesm}
                        />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            </View>
            )}
        </View>
        {/* Posts or Media Lists */}
        <View style={{backgroundColor: isDarkMode ? '#2F3131' : 'inherit', paddingHorizontal: 20}}>
        </View></View>
        )}
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerImage: {
    width: '100%',
    height: 100,
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: -50,
  },
  topsettingbtn:{
    marginBottom: -50,
    zIndex: 9,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: '#2F3131',
    marginBottom: 10,
  },
  profilepicedit:{
    marginTop: -35,
    marginBottom: 10,
    paddingLeft: 80,
  },
  userName: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Lato-Regular',
    color: 'white',
  },
  link: {
    fontSize: 14,
    color: '#7490FC',
  },
  bio: {
    fontSize: 16,
    color: '#ADADAD',
    marginBottom: 10,
    marginTop: 5,
  },
  editprofilebox:{
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  editProfileBtn: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 15,
    paddingVertical: 10,
    textAlign: 'center'
  },
  followBtn: {
    borderRadius: 15,
    paddingVertical: 10,
    textAlign: 'center'
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginBottom: 20,
  },
  stat: {
    fontSize: 16,
  },
  highlightsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  storyHighlight: {
    alignItems: 'center',
    marginRight: 20,
  },
  storyIcon: {
    width: 55,
    height: 55,
    borderRadius: 15,
    marginBottom: 5,
  },
  storyName: {
    fontSize: 12,
  },
  addStoryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    backgroundColor: '#3F729B',
    borderRadius: 25,
    marginLeft: 20,
  },
  plusIcon: {
    width: 25,
    height: 25,
    tintColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    borderRadius: 15,
  },
  button: {
    backgroundColor: '#3A71F9',
    padding: 10,
    borderRadius: 15,
    width: '50%',
    alignItems: 'center',
  },
  button1: {
    // backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 20,
    paddingHorizontal: 50
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  statLabel: {
    fontSize: 15,
    color: '#888',
  },
//   storyIcon: {
//     width: 50
//   }
    bgimagebox: {
        width: "70%",
        paddingRight: 10,
    },
    mediaimage: {
        width: "100%",
        height: 210,
        borderRadius: 10,
    },
    smimagebox:{
        width: '30%',
        gap: 10,
    },
    mediaimagesm: {
        width: '100%',
        height: 100,
        borderRadius: 10,
    },
});

export default OthersProfile;
