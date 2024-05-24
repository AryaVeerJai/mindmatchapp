import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from "@react-navigation/native";
import Ripple from 'react-native-material-ripple';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { SvgXml } from 'react-native-svg';
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from '../../constants/theme';
import FeatherIcon from 'react-native-vector-icons/Feather';
import database from '@react-native-firebase/database';


const FollowersData = [
    {
        id : '1',
        image : IMAGES.user1,
        name : 'Andy Lee',
        active : true,
        isFollow : true,
    },
    {
        id : '2',
        image : IMAGES.user2,
        name : 'Brian Harahap',
        active : true,
        isFollow : true,
    },
    {
        id : '3',
        image : IMAGES.user3,
        name : 'Christian Hang',
        isFollow : true,
    },
    {
        id : '4',
        image : IMAGES.user4,
        name : 'Chloe Mc. Jenskin',
        isFollow : true,
    },
    {
        id : '5',
        image : IMAGES.user5,
        name : 'David Bekam',
        active : true,
        isFollow : true,
    },
    {
        id : '6',
        image : IMAGES.user6,
        name : 'Dons John',
        isFollow : true,
    },
    {
        id : '7',
        image : IMAGES.user7,
        name : 'Eric Leew',
        active : true,
        isFollow : true,
    },
    {
        id : '8',
        image : IMAGES.user8,
        name : 'Richard Sigh',
        isFollow : true,
    },
    {
        id : '9',
        image : IMAGES.user5,
        name : 'David Bekam',
        active : true,
        isFollow : true,
    },
    {
        id : '10',
        image : IMAGES.user6,
        name : 'Dons John',
        isFollow : true,
    },
    {
        id : '11',
        image : IMAGES.user7,
        name : 'Eric Leew',
        active : true,
        isFollow : true,
    },
    {
        id : '12',
        image : IMAGES.user8,
        name : 'Richard Sigh',
        isFollow : true,
    },
]

const Followers = ({userId}) => {

    // const { userId } = route.params;

    const [follower, setFollower] = useState([]);

    useEffect(() => {
        fetchFollowerList(userId);
    }, []);

    const fetchFollowerList = async (userId) => {
        try {
            // Fetch the user's Follower List list from the database
            const followerRef = database().ref(`users/${userId}/followers`);
            const followerSnapshot = await followerRef.once('value');
            const followerIds = followerSnapshot.val();
            console.log(followerIds)
    
            if (followerIds) {
                // Convert the object keys to an array of user IDs
                const followerArray = Object.keys(followerIds);
    
                // Fetch user details for each follower user
                const followerDetails = followerArray.map(async followerId => {
                    const userRef = database().ref(`users/${followerId}`);
                    const userSnapshot = await userRef.once('value');
                    return userSnapshot.val();
                });
    
                // Wait for all user details to be fetched
                const followerUsers = await Promise.all(followerDetails);
                console.log("124",followerUsers)
                setFollower(followerUsers); // Update the state with fetched follower list
            } else {
                setFollower([]);
            }
        } catch (error) {
            console.error('Error fetching follower list:', error);
            setFollower([]);
        }
    };
    
      

    console.log(follower)

    
    const {colors} = useTheme();
    const searchArea = useSharedValue(SIZES.width);
    const [postView ,setPostView] = useState('list');

    const searchBarStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: searchArea.value,
                }
            ]
        }
    })

    const [followData, setFollowData] = useState(FollowersData);

    const handleFollow = (id) => {
        let temp = followData.map((data,index) => {
            if (id === index) {
                return { ...data, isFollow: !data.isFollow};
            }
            return data;
        });
        setFollowData(temp);
    };


    return (
        <ScrollView contentContainerStyle={{flexGrow:1}}>

            <View style={{
                flex:1,
                backgroundColor:colors.card,
                borderTopLeftRadius:26,
                borderTopRightRadius:26,
                paddingBottom:10,
                marginTop:10,
                shadowColor: "rgba(0,0,0,.5)",
                shadowOffset: {
                    width: 0,
                    height: 6,
                },
                shadowOpacity: 0.37,
                shadowRadius: 7.49,

                elevation: 12,
            }}>
                <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:15,marginTop:10}}>
                    <Text style={[FONTS.h6,{flex:1,color:colors.title}]}>Friends</Text>

                    <Ripple
                        accessible={true}
                        accessibilityLabel="Grid"
                        accessibilityHint="show item in grid view"
                        onPress={() => setPostView('grid')}
                        style={{
                            height:50,
                            width:50,
                            alignItems:'center',
                            justifyContent:'center',
                            opacity: postView === "grid" ? 1 : 0.5,
                        }}
                        >
                        {/* <SvgXml
                            xml={ICONS.grid}
                            stroke={COLORS.title}
                        /> */}
                        <FeatherIcon size={30} name='grid' />
                    </Ripple>

                    <Ripple
                        accessible={true}
                        accessibilityLabel="List"
                        accessibilityHint="show item in list view"
                        onPress={() => setPostView('list')}
                        style={{
                            height:50,
                            width:50,
                            alignItems:'center',
                            justifyContent:'center',
                            opacity: postView === "list" ? 1 : 0.5,
                        }}
                        >
                        {/* <SvgXml
                            xml={ICONS.list}
                            /> */}
                            <FeatherIcon size={30} name='list' />
                    </Ripple>
                    
                    <Ripple
                        onPress={()=> searchArea.value = withTiming(0)}
                        style={{
                            height:50,
                            width:50,
                            alignItems:'center',
                            justifyContent:'center',
                        }}
                    >
                        <SvgXml
                            stroke={colors.title}
                            style={{opacity:.5}}
                            xml={ICONS.search}
                        />
                    </Ripple>
                    
                    
                    <Animated.View
                        style={[searchBarStyle,{
                            height:45,
                            borderWidth:1,
                            borderColor: colors.borderColor,
                            position:'absolute',
                            width:SIZES.width - 30,
                            left:15,
                            borderRadius:SIZES.radius,
                            backgroundColor:colors.card,
                        }]}
                    >
                        <TextInput
                            style={{
                                ...FONTS.font,
                                color:COLORS.title,
                                paddingHorizontal:12,
                                height:42,
                            }}
                            placeholder='Search here...'
                            placeholderTextColor={colors.text}
                        />
                        <TouchableOpacity
                            onPress={()=> searchArea.value = withTiming(SIZES.width)}
                            style={{
                                position:'absolute',
                                zIndex:1,
                                height:45,
                                width:45,
                                alignItems:'center',
                                justifyContent:'center',
                                right:0,
                                top:-1,
                            }}
                        >
                            <SvgXml
                                stroke={colors.text}
                                xml={ICONS.close}
                            />
                        </TouchableOpacity>
                    </Animated.View>


                </View>
                
                <View style={[postView === "grid" && {flexDirection:'row',flexWrap:'wrap',paddingHorizontal:10}]}>
                    {follower.map((data,index) => {
                        return(
                            <View
                                key={index}
                                style={[
                                    postView === "grid" &&
                                    {
                                        width: (SIZES.width - 20) / 2,
                                        paddingHorizontal:5,
                                    }
                                ]}
                            >
                                <View 
                                    
                                    style={[{
                                        flexDirection:'row',
                                        alignItems:'center',
                                        paddingHorizontal:15,
                                        marginVertical:8,
                                    }, postView === "grid" && {
                                        flexDirection:'column',
                                        borderWidth:1,
                                        borderColor:colors.borderColor,
                                        borderRadius:SIZES.radius,
                                        paddingHorizontal:10,
                                        paddingVertical:15,
                                    }]}
                                >
                                    <View style={[{marginRight:10},postView === "grid" && {marginBottom:10,marginRight:0}]}>
                                        {data.active &&
                                            <View
                                                style={{
                                                    height:17,
                                                    width:17,
                                                    borderRadius:17,
                                                    backgroundColor:COLORS.success,
                                                    position:'absolute',
                                                    bottom:-2,
                                                    zIndex:1,
                                                    left:-2,
                                                    borderWidth:2,
                                                    borderColor:COLORS.white,
                                                }}
                                            />
                                        }
                                        <Image 
                                            style={{
                                                height:50,
                                                width:50,
                                                borderRadius:SIZES.radius,
                                            }}
                                            source={{uri: data.img}}
                                        />
                                    </View>
                                    <Text style={[FONTS.font,{flex:1,color:colors.title,fontSize:16},postView === "grid" && {marginBottom:8,fontSize:14}]}>{data.name}</Text>
                                    <TouchableOpacity
                                        onPress={()=> handleFollow(index)}
                                        style={{
                                            height:33,
                                            borderWidth:1,
                                            borderRadius:8,
                                            // borderColor:data.isFollow ? COLORS.danger : COLORS.secondary,
                                            borderColor: COLORS.white,
                                            alignItems:'center',
                                            justifyContent:'center',
                                            paddingHorizontal:12,
                                            backgroundColor:data.isFollow ? 'transparent' : COLORS.secondary
                                        }}
                                    >
                                        <Text style={{...FONTS.fontSm,color : COLORS.white,...FONTS.fontBold}}>{data.isFollow ? 'UNFOLLOW' : 'FOLLOW'}</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )
                    })}
                </View>
            </View>
        </ScrollView>
    );
};


export default React.memo(Followers);