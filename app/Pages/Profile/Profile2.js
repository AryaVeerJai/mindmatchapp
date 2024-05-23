import React, { useEffect, useRef, useState } from 'react';
import { 
    Animated,
    Dimensions, 
    StyleSheet, 
    Image, 
    SafeAreaView, 
    ScrollView, 
    Text, 
    TouchableOpacity, 
    View, 
    Modal
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useFocusEffect, useTheme } from "@react-navigation/native";
import ImageViewer from 'react-native-image-zoom-viewer';
import { List } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import RBSheet from 'react-native-raw-bottom-sheet';
import { GlobalStyleSheet } from '../../constants/StyleSheet';
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../constants/theme';
import Header from '../../layout/Header';
import CustomButton from '../../components/CustomButton';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import Post from '../../components/Post';
import Auth from '../../Service/Auth';
import database from '@react-native-firebase/database';
import storage from '@react-native-firebase/storage';

const { width } = Dimensions.get('window');


// const postImages = [
//     {
//         url: '',
//         props : {
//             source : IMAGES.post13
//         }
//     },
//     {
//         url: '',
//         props : {
//             source : IMAGES.post14
//         }
//     },
//     {
//         url: '',
//         props : {
//             source : IMAGES.post18
//         }
//     },
//     {
//         url: '',
//         props : {
//             source : IMAGES.post16
//         }
//     },
//     {
//         url: '',
//         props : {
//             source : IMAGES.post17
//         }
//     },
//     {
//         url: '',
//         props : {
//             source : IMAGES.post19
//         }
//     },
//     {
//         url: '',
//         props : {
//             source : IMAGES.post14
//         }
//     },
//     {
//         url: '',
//         props : {
//             source : IMAGES.post15
//         }
//     },
// ]


const Profile2 = ({ navigation, route }) => {
    const {colors} = useTheme();
    const refRBSheet = React.useRef();
    const RBSheetReport = React.useRef();
    const refSuccessSheet = React.useRef();
    const [postModal , setPostModal] = useState(false);
    const [postIndex , setPostIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current;
    const buttons = ['Posts', 'Videos', 'Tagged'];
    const onCLick = i => this.scrollView.scrollTo({ x: i * width });

          // Define state variables
        //   const [imgUrl, setImgUrl] = useState(null);
        //   const [coverImgUrl, setCoverImgUrl] = useState(null);
        //   const [name, setName] = useState('');
        //   const [username, setUsername] = useState('');
          const [currentUserId, setCurrentUserId] = useState('');
        //   const [bio, setBio] = useState('');
        //   const [profileLink, setProfileLink] = useState('');
          const [loading, setLoading] = useState(false);


    // Use useFocusEffect hook to trigger the data loading when the screen comes into focus
    useFocusEffect (
        React.useCallback(() => {
            // Define the asynchronous function to fetch user data
            const getUser = async () => {
                setLoading(true); // Set loading state to true while fetching data
                try {
                    // Fetch user data from Auth service
                    let data = await Auth.getAccount();
                    // Update state variables with fetched data
                    // setImgUrl(data.img);
                    // setCoverImgUrl(data.coverimg);
                    // setName(data.name);
                    // setUsername(data.username);
                    setCurrentUserId(data.id);
                    // setBio(data.bio);
                    // setProfileLink(data.profileLink);
                    // console.log(data)
                } catch (error) {
                    console.error('Error fetching user data:', error);
                } finally {
                    setLoading(false); // Set loading state to false after data fetching is done (whether successful or not)
                }
            };

            // Call the getUser function when the screen comes into focus
            getUser();

            // Return a cleanup function (optional)
            return () => {
                // This function is called when the component unmounts or when the effect is re-run
                // You can perform any cleanup here if needed
            };
        }, []) // Dependency array is empty, so this effect runs only once when the component mounts
    );

    
    const { userId } = route.params;
    // const currentUser = firebase.auth().currentUser;
    const [isFollowing, setIsFollowing] = useState(false);
  
    useEffect(() => {
      // Check if the current user is already following the profile being viewed
      const followingRef = database().ref(`users/${currentUserId}/following`);
      followingRef.child(currentUserId).once('value', snapshot => {
        setIsFollowing(snapshot.exists());  
      });
    }, []);
  
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

    const postOption = () => {
        return(
            <View>
                <List.Item
                    style={{paddingHorizontal:15}}
                    titleStyle={{...FONTS.font,fontSize:16,color:COLORS.danger}}
                    onPress={() => {RBSheetReport.current.open();refRBSheet.current.close()}}
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
        "Something else"
    ];

    return (
        <>
            {/* <Modal visible={postModal} transparent={true}>
                <SafeAreaView style={{flex:1}}>
                    <ImageViewer
                        index={postIndex}
                        imageUrls={postImages}
                        enableSwipeDown={true}
                        onSwipeDown={()=> setPostModal(false)}
                        renderHeader={()=>(
                            <View style={{alignItems:'flex-end'}}>
                                <TouchableOpacity 
                                    style={{
                                        height:50,
                                        width:50,
                                        alignItems:'center',
                                        justifyContent:'center',
                                    }}
                                    onPress={()=> setPostModal(false)}>
                                    <SvgXml stroke={COLORS.white} xml={ICONS.close}/>
                                </TouchableOpacity>    
                            </View>
                        )}
                    />
                </SafeAreaView>
            </Modal> */}
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
                ref={refRBSheet}
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


            <SafeAreaView style={{flex:1}}>
                <LinearGradient
                    style={{flex:1}}
                    colors={colors.bgGradient}
                >
                    <ScrollView contentContainerStyle={{flexGrow:1}}>
                        <Header leftIcon={'back'} rightIcon={'settings'} />
                        
                        <View style={{...GlobalStyleSheet.container}}>
                            <View style={{alignItems:'center',paddingTop:30,paddingBottom:20}}>
                                <View
                                    style={{
                                        height:120,
                                        width:120,
                                        borderRadius:60,
                                        marginBottom:15,
                                        borderWidth:4,
                                        borderColor: 'rgba(255,144,99,.3)',
                                        padding:4,
                                    }}
                                >
                                    <Image
                                        style={{
                                            height:'100%',
                                            width:'100%',
                                            borderRadius:60,
                                            resizeMode:'cover',
                                        }}
                                        source={IMAGES.user1}
                                    />
                                </View>
                                <Text style={{...FONTS.h4,color:colors.title}}>Gabriel Beristain</Text>
                                <Text style={{...FONTS.font,color:colors.text}}>@Gabriel.co</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-around',marginBottom:25}}>
                                <View>
                                    <Text style={{...FONTS.h6,color:colors.title}}>82k</Text>
                                    <Text style={{...FONTS.fontSm,color:colors.text,lineHeight:14}}>Following</Text>
                                </View>
                                <View>
                                    <Text style={{...FONTS.h6,color:colors.title}}>4.5m</Text>
                                    <Text style={{...FONTS.fontSm,color:colors.text,lineHeight:14}}>Followers</Text>
                                </View>
                                <View>
                                    <Text style={{...FONTS.h6,color:colors.title}}>3k</Text>
                                    <Text style={{...FONTS.fontSm,color:colors.text,lineHeight:14}}>Posts</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'row'}}>
                                <View onPress={handleFollow} style={{flex:1,paddingRight:5}}>
                                {isFollowing ? (
                                    <CustomButton onPress={handleUnfollow}  btnSm title={'Unfollow'}/>
                                ) : (
                                    <CustomButton onPress={handleFollow}  btnSm title={'Follow'}/>
                                )}
                                </View>
                                <View style={{flex:1,paddingLeft:5}}>
                                    <CustomButton btnSm btnLight title={'Message'}/>
                                </View>
                                <TouchableOpacity 
                                    style={{
                                        height:40,
                                        width:40,
                                        borderRadius:20,
                                        alignItems:'center',
                                        justifyContent:'center',
                                        marginLeft:15,
                                        backgroundColor:'#E6E6E6',
                                    }}
                                >
                                    <SvgXml height={18} width={18} stroke={'#646464'} xml={ICONS.addUser}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        
                        <View style={{marginBottom:10}}>
                            <ButtonContainer buttons={buttons} onClick={onCLick} scrollX={scrollX} />
                        </View>

                        <ScrollView
                            contentContainerStyle={{paddingBottom:70}}
                            ref={e => (this.scrollView = e)}
                            horizontal
                            pagingEnabled
                            scrollEventThrottle={16}
                            decelerationRate="fast"
                            showsHorizontalScrollIndicator={false}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                                { useNativeDriver: false },
                            )}>
                            <View style={[styles.card]}>
                                <Post />
                            </View>
                            {/* <View style={[styles.card]}>
                                <View style={{flexDirection:'row',flexWrap:'wrap',paddingHorizontal:2}}>
                                    {postImages.map((data,index) => {
                                        return(
                                            <View
                                                key={index}
                                                style={[{
                                                    width:(SIZES.width - 4 ) / 3,
                                                    height:(SIZES.width - 4 ) / 3,
                                                    marginBottom:10,
                                                }]}
                                            >
                                                <TouchableOpacity 
                                                    onLongPress={() => refRBSheet.current.open()}
                                                    onPress={()=> {setPostIndex(index);setPostModal(true)}}
                                                    style={{
                                                        marginHorizontal:5,
                                                    }}
                                                >
                                                    <Image
                                                        style={{
                                                            width:'100%',
                                                            height:'100%',
                                                            borderRadius:15,
                                                        }}
                                                        source={data.props.source}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View> */}
                            <View style={[styles.card]}>
                                <View style={{alignItems:'center',padding:20}}>
                                    <View
                                        style={{
                                            height:50,
                                            marginBottom:10,
                                            width:50,
                                            borderRadius:25,
                                            backgroundColor:COLORS.primayLight,
                                            alignItems:'center',
                                            justifyContent:'center',
                                        }}
                                    >
                                        <Image style={{height:20,width:20,tintColor:COLORS.primary}} source={IMAGES.video}/>
                                    </View>
                                    <Text style={{...FONTS.h5,color:colors.title}}>No Videos Yet</Text>
                                </View>
                            </View>
                            {/* <View style={[styles.card]}>
                                <View style={{flexDirection:'row',flexWrap:'wrap',paddingHorizontal:2}}>
                                    {postImages.map((data,index) => {
                                        return(
                                            <View
                                                key={index}
                                                style={[{
                                                    width:(SIZES.width - 4 ) / 3,
                                                    height:(SIZES.width - 4 ) / 3,
                                                    marginBottom:10,
                                                }]}
                                            >
                                                <TouchableOpacity 
                                                    onLongPress={() => refRBSheet.current.open()}
                                                    onPress={()=> {setPostIndex(index);setPostModal(true)}}
                                                    style={{
                                                        marginHorizontal:5,
                                                    }}
                                                >
                                                    <Image
                                                        style={{
                                                            width:'100%',
                                                            height:'100%',
                                                            borderRadius:15,
                                                        }}
                                                        source={data.props.source}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View> */}
                        </ScrollView>

                    </ScrollView>
                </LinearGradient>
            </SafeAreaView>
        </>
    );
};


function ButtonContainer({ buttons, onClick, scrollX }) {

    const {colors} = useTheme();

    const [btnContainerWidth, setWidth] = useState(0);
    const btnWidth = btnContainerWidth / buttons.length;
    const translateX = scrollX.interpolate({
        inputRange: [0, width],
        outputRange: [0, btnWidth],
    });
    
    const [active , setActive] = useState(0);

    return (
        <View
            style={[styles.btnContainer,{borderColor:colors.borderColor}]}
            onLayout={e => setWidth(e.nativeEvent.layout.width)}>
            {buttons.map((btn, i) => (
                <TouchableOpacity
                    key={btn}
                    style={styles.btn}
                    onPress={() => {onClick(i); setActive(i)}}>
                    <Text style={[{...FONTS.font,color:colors.text},active == i && {color: colors.title}]}>{btn}</Text>
                </TouchableOpacity>
            ))}
            <Animated.View
                style={[
                    styles.animatedBtnContainer,
                    { width: btnWidth,backgroundColor:colors.title, transform: [{ translateX }] },
                ]}>
               
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        height: 45,
        overflow: 'hidden',
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth:1,
    },
    btn: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animatedBtnContainer: {
        height: 2,
        flexDirection: 'row',
        position: 'absolute',
        overflow: 'hidden',
        bottom:0,
    },
    btnTextActive: {
        color: '#fff',
        fontWeight: 'bold',
    },
    card: {
        width: width,
    },
});

export default Profile2;