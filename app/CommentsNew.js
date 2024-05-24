import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, TextInput, Image, Dimensions,  } from 'react-native';
import { SvgXml } from "react-native-svg";
import { COLORS, FONTS, ICONS, IMAGES, SIZES } from "./constants/theme";
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';
import firebase from 'firebase/app';
import database from '@react-native-firebase/database';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Auth from './Service/Auth';



const CommentsNew = ({ navigation, route }) => {

    const [userId, seUserId] = useState('');

    useEffect(() => {
        const getUser = async () => {
            let data = await Auth.getAccount();
            seUserId(data.id);
        }
        getUser();
      },[]);
      
const { colors } = useTheme();
const { postId } = route.params;
const [commentsData, setCommentsData] = useState([]);
const [newComment, setNewComment] = useState('');
const [repliesData, setRepliesData] = useState({});

const [postData, setPostData] = useState(null);
const [userData, setUserData] = useState(null);

useEffect(() => {
  const fetchUserData = async () => {
    try {
      const additionalDataRef = database().ref(`users/`);
      additionalDataRef.once('value', snapshot => {
        const data = snapshot.val();
        setUserData(data);
      });
    } catch (error) {
      console.error('Error fetching additional data:', error);
    }
  };

  fetchUserData();
  const fetchPostData = async () => {
    try {
      const additionalDataRef = database().ref(`posts/${postId}`);
      additionalDataRef.once('value', snapshot => {
        const data = snapshot.val();
        setPostData(data);
      });
    } catch (error) {
      console.error('Error fetching additional data:', error);
    }
  };

  fetchPostData();

  // Cleanup function if needed
  // return () => { /* cleanup code */ };
}, []); // Run only once when the component mounts


useEffect(() => {
    const fetchCommentsData = () => {
        try {
            const commentsRef = database().ref('comments/' + postId);
            commentsRef.on('value', snapshot => {
                const comments = snapshot.val();
                if (comments) {
                    const commentsArray = Object.keys(comments).map(key => ({
                        id: key,
                        ...comments[key]
                    }));
                    setCommentsData(commentsArray);

                    // Fetch user data for each comment
                        fetchUserData(commentsArray);
                    // Fetch replies for each comment
                    commentsArray.forEach(comment => {
                        fetchReplies(comment.id);
                    });
                } else {
                    setCommentsData([]);
                }
            });
            return () => commentsRef.off();
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    };

    const fetchUserData = async (commentsArray) => {
        try {
            const userIds = commentsArray.map(comment => comment.commentByUserId);
            const userDataRef = database().ref('users/');
            userDataRef.once('value', snapshot => {
                const userAllData = snapshot.val();
                // Filter user data based on user IDs in comments
                const filteredUserData = Object.keys(userAllData)
                    .filter(userId => userIds.includes(userId))
                    .reduce((obj, userId) => {
                        obj[userId] = userAllData[userId];
                        return obj;
                    }, {});
                setUserData(filteredUserData);
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const fetchReplies = (commentId) => {
        try {
            const repliesRef = database().ref(`comments/${postId}/${commentId}/replies`);
            repliesRef.on('value', snapshot => {
                const replies = snapshot.val();
                if (replies) {
                    const repliesArray = Object.keys(replies).map(key => ({
                        id: key,
                        ...replies[key]
                    }));
                    // Fetch user data for each reply
                    fetchUserDataForReplies(repliesArray, commentId);
                } else {
                    setRepliesData(prevState => ({
                        ...prevState,
                        [commentId]: [] // Initialize as empty array if no replies
                    }));
                }
            });
            return () => repliesRef.off();
        } catch (error) {
            console.error('Error fetching replies:', error);
        }
    };
    
    const fetchUserDataForReplies = async (repliesArray, commentId) => {
        try {
            const userIds = repliesArray.map(reply => reply.replyByUserId);
            const userDataRef = database().ref('users/');
            userDataRef.once('value', snapshot => {
                const userData = snapshot.val();
                // Filter user data based on user IDs in replies
                const filteredUserData = Object.keys(userData)
                    .filter(userId => userIds.includes(userId))
                    .reduce((obj, userId) => {
                        obj[userId] = userData[userId];
                        return obj;
                    }, {});
                setRepliesData(prevState => ({
                    ...prevState,
                    [commentId]: repliesArray.map(reply => ({
                        ...reply,
                        userDetails: filteredUserData[reply.replyByUserId] // Add user details to each reply
                    }))
                }));
            });
        } catch (error) {
            console.error('Error fetching user data for replies:', error);
        }
    };
    


    fetchCommentsData();

    // Cleanup function
    return () => {
        database().ref('comments/' + postId).off();
        Object.keys(repliesData).forEach(commentId => {
            database().ref('replies/' + commentId).off();
        });
    };
}, [postId]);

// const handleAddComment = async () => {
//     try {
//         await database().ref('comments/' + postId).push({
//             comment: newComment,
//             commentByUserId: userId,
//             timestamp: database.ServerValue.TIMESTAMP
//         });
//         setNewComment('');
//     } catch (error) {
//         console.error('Error adding comment:', error);
//     }
// };

const handleAddComment = async () => {
    try {
        // Add the new comment to the 'comments' node
        await database().ref('comments/' + postId).push({
            comment: newComment,
            commentByUserId: userId,
            timestamp: database.ServerValue.TIMESTAMP
        });

        // Increment the commentsCount in the corresponding post document
        await database().ref('posts/' + postId + '/commentsCount').transaction((currentCount) => {
            // Increment the current count by 1 or initialize to 1 if it doesn't exist
            return (currentCount || 0) + 1;
        });

        // Clear the comment input field
        setNewComment('');
    } catch (error) {
        console.error('Error adding comment:', error);
    }
};


const [replyInputs, setReplyInputs] = useState({}); // State for reply input values

const handleAddReply = async (commentId, reply) => {
    try {
        // await database().ref(`comments/${postId}/${commentId}`).push({
        await database().ref(`comments/${postId}/${commentId}/replies`).push({
            // replies: {
            reply: reply,
            replyByUserId: userId,
            timestamp: database.ServerValue.TIMESTAMP
            // }
        });
    } catch (error) {
        console.error('Error adding reply:', error);
    }
};



const sortedComments = commentsData.slice().sort((a, b) => {
    const dateA = new Date(a.timestamp);
    const dateB = new Date(b.timestamp);
    return dateB - dateA;
});


  // Create an empty object to store sorted replies
const sortedRepliesData = {};

// Iterate over each comment ID in repliesData
for (const commentId in repliesData) {
    // Sort the replies array for the current comment based on the timestamp property
    const sortedReplies = repliesData[commentId].slice().sort((a, b) => {
        const dateA = new Date(a.timestamp);
        const dateB = new Date(b.timestamp);
        return dateA - dateB;
    });

    // Store the sorted replies in sortedRepliesData under the current comment ID
    sortedRepliesData[commentId] = sortedReplies;
}
const navigationfor = useNavigation();
const [visibilityStates, setVisibilityStates] = useState({}); // State to store visibility states

const toggleVisibility = (index) => {
  setVisibilityStates(prevStates => ({
    ...prevStates,
    [index]: !prevStates[index] // Toggle visibility state for the clicked index
  }));
};
const { width } = Dimensions.get('window');
const getTimeAgoString = (timestamp) => {
    const currentDate = new Date();
    const commentDate = new Date(timestamp);

    const timeDifference = currentDate - commentDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (weeks > 1) {
        return `${weeks}w ago`;
    } else if (days > 1) {
        return `${days}d ago`;
    } else if (hours > 1) {
        return `${hours}h ago`;
    } else if (minutes >= 1) {
        return `${minutes}m ago`;
    } else {
        return `${seconds}s ago`;
    }
};

return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: colors.background, width: '100%' }}>
    <SafeAreaView style={{ flex: 1, backgroundColor: "#070D19", width: '100%' }}>
        <ScrollView contentContainerStyle={{ }}>
        <View style={{backgroundColor: '#333436',flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20}}>
            <View style={{width: '20%',}}><TouchableOpacity style={{paddingVertical: 10, paddingHorizontal: 25}} onPress={()=> navigationfor.goBack()}><FontAwesomeIcon style={{}} size={35} name='angle-left' /></TouchableOpacity></View>
            <View style={{alignSelf: 'center', width: '60%'}} ><TouchableOpacity><Text style={{textAlign: 'center',fontSize: 17, fontWeight: '500'}}>Comments</Text></TouchableOpacity></View>
            <View style={{alignSelf: 'center', width: '20%'}}><TouchableOpacity><Text style={{fontSize: 17, fontWeight: '500'}}></Text></TouchableOpacity></View>
        </View>
        {postData && postData.postType === "post" ? ( 
            <View style={{padding: 10,}}>
                <Text style={{fontSize: 20, marginBottom: 15}}>{postData.text}</Text>
                <Image style={{width: '100%', height: 360, borderRadius: 10}} source={{uri : postData.postImage}} />
            </View> )
            : <></>
        }
        {/* {
            postData.text  ?
                <Text style={{color: 'white'}}>{postData.text}</Text>
            :<></>
    } */}
        {postData && postData.postType === "polls" ? (
            
            <View style={{width: '100%', paddingHorizontal: 10}}>
                {/* <View style={{justifyContent: 'space-between', flexDirection: 'row', marginBottom: 20 }}>
                <View style={{flexDirection: 'row'}}>
                  <Image source={item.userImage ? {uri : item.userImage} : require('../painting.jpg')} style={{paddingVertical: 15, width: 50, height: 50 ,marginEnd: 10 ,paddingHorizontal: 18, backgroundColor: isDarkMode ? '#0C1427' : '#293241', borderRadius: 30,}}></Image>
                  <View style={{marginTop:5}}>
                    <Text style={{fontSize:18, fontWeight: '700', color: isDarkMode ? '#d0d6e1' : '#293241' }}>{item.createdUserDetails.displayName ? item.createdUserDetails.displayName : 'Wes Frances'}</Text>
                    <Text style={{color: isDarkMode ? '#7987a1' : 'black'}}>{item.username ? item.username : 'Wesfrances'}</Text> 
                  </View>
                </View>
                <View>
                  <View style={{flexDirection: 'row', paddingTop: 10}}>
                    <Text style={[styles.tab,{backgroundColor: isDarkMode ? '#0C1427' : '#F4F4F5', color: isDarkMode ? '#d0d6e1' : '#000'}]}>Following</Text>
                    <Text style={{fontSize: 20, marginHorizontal: 10}}>...</Text>
                  </View>
                </View>
              </View> */}
                <View>
                {
                        postData.pollTitle|| postData.pollDiscription ?
                        <View>
                            <Text style={{fontSize: 25, fontWeight: '700'}}>{postData.pollTitle}</Text>
                            <Text>{postData.pollDiscription}</Text>
                        </View>
                        :<></>
                    }
                    
                {postData.postImage || postData.pollDiscriptionImage  ?
                    <Image
                  source={postData.postImage ? {uri : postData.postImage} : postData.pollDiscriptionImage ? {uri : postData.pollDiscriptionImage} : require('../painting.jpg')}
                  style={{width: '100%', height: 360, borderRadius: 10, marginRight: 15}}
                  /> : null
                }
              </View>
            <View style={{marginBottom: 20}}>
              {/* {posts.textOptions.map((option, index)=>{
                <TouchableOpacity key={index}><Text>{option.text}</Text></TouchableOpacity>
              })} */}
              {postData.textOptions[0].text !== '' && postData.textOptions.map((option, index) => {
                return (
                  <TouchableOpacity key={index} style={{backgroundColor: '#0C1427', borderWidth: 0.8, borderColor: 'grey', paddingHorizontal: 20, paddingVertical: 10, marginTop: 10, borderRadius: 7}}>
                    <Text style={{color: 'white'}}>{option.text}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap'}}>
              {postData.imageOptions !== 'Not Added' && postData.imageOptions.map((option, index) => {
                return (
                  <TouchableOpacity key={index} style={{backgroundColor: '#0C1427', marginTop: 10, }}>
                    <Image style={{flexGrow: 1, height: 120, width: width * 0.45, borderRadius: 10, borderWidth: 0.8, borderColor: 'grey',}} source={{uri: option.image}} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>) : <></>
        }
        
            {sortedComments.map((comment, index) => (
                <View key={index} style={{ paddingHorizontal: 15, paddingVertical: 20, borderTopWidth: 1, borderColor: 'grey' }}>
                    {userData[comment.commentByUserId] && (
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
                                <Image
                                    source={{ uri: userData[comment.commentByUserId].img }}
                                    style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
                                />
                                <View >
                                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}> 
                                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{userData[comment.commentByUserId].name}</Text>
                                        <Text style={{ fontSize: 11, marginLeft: 10}}>{getTimeAgoString(comment.timestamp)}</Text>
                                    </View>
                                    <View>
                                        <Text>{comment.comment}</Text>
                                    </View>
                                </View>
                            </View>
                        )}
                {sortedRepliesData[comment.id] && sortedRepliesData[comment.id].length > 0 && (
                    sortedRepliesData[comment.id].map((reply, index) => (
                        // <View key={index} style={{ marginLeft: 20 }}>
                        //     <Text>{reply.reply}</Text>
                        // </View>
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start', marginLeft: 20, marginTop: 20 }}>
                            {/* Render user image */}
                            {reply.userDetails && (
                                <Image
                                    source={{ uri: reply.userDetails.img }}
                                    style={{ width: 35, height: 35, borderRadius: 30, marginRight: 5 }}
                                />
                            )}
                            <View style={{width: '80%', marginLeft: 10}}>
                            {/* Render user name */}
                            {reply.userDetails && (
                                <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                                <Text style={{ color: 'white', fontWeight: 'bold', marginRight: 10 }}>
                                    {reply.userDetails.name}
                                </Text>
                                <Text style={{fontSize: 11, marginRight: 5 }}>
                                    {getTimeAgoString(reply.timestamp)}
                                </Text>
                                </View>
                            )}
                            {/* Render reply text */}
                            <Text style={{}}>{reply.reply}</Text>
                            </View>
                        </View>
                    ))
                )}
                <TouchableOpacity style={{marginTop: 20}} onPress={() => toggleVisibility(index)}>
                    <Text>Add Reply</Text>
                </TouchableOpacity>
                {visibilityStates[index] && (
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                    {/* <TextInput
                        style={{ ...FONTS.font, color: colors.title, flex: 1, height: 48, marginRight: 10, borderWidth: 1, borderColor: colors.borderColor, borderRadius: 5, paddingHorizontal: 10 }}
                        placeholder='Add a reply...'
                        placeholderTextColor={colors.text}
                        onChangeText={text => setRepliesData(prevState => ({
                            ...prevState,
                            [comment.id]: [text] // Append new text to array
                        }))}
                    />
                    <TouchableOpacity
                        style={{ height: 35, backgroundColor: COLORS.primary, alignItems: 'center', justifyContent: 'center', borderRadius: 5, paddingHorizontal: 10 }}
                        onPress={() => handleAddReply(comment.id, repliesData[comment.id])}
                    >
                        <Text style={{ color: COLORS.white }}>Submit</Text>
                    </TouchableOpacity> */}
                    <TextInput
                            style={{ ...FONTS.font, backgroundColor: '#0C1427', color: colors.title, flex: 1, height: 35, marginRight: 10, borderWidth: 1, borderColor: colors.borderColor, borderRadius: 5, paddingHorizontal: 10 }}
                            placeholder='Add a reply...'
                            placeholderTextColor={colors.text}
                            value={replyInputs[comment.id] || ''} // Use replyInputs[comment.id] as value
                            onChangeText={text => setReplyInputs(prevState => ({
                                ...prevState,
                                [comment.id]: text // Update reply input value for this comment
                            }))}
                        />
                        <TouchableOpacity
                            style={{ height: 35, backgroundColor: '#0C1427', borderWidth: 1, borderColor: 'grey', alignItems: 'center', justifyContent: 'center', borderRadius: 5, paddingHorizontal: 10 }}
                            onPress={() => {
                                handleAddReply(comment.id, replyInputs[comment.id]); // Pass reply input value to handleAddReply
                                setReplyInputs(prevState => ({
                                    ...prevState,
                                    [comment.id]: '' // Clear the input value after submitting
                                }));
                            }}
                        >
                            <Text style={{ color: COLORS.white }}>Submit</Text>
                        </TouchableOpacity>
                </View>)}
            </View>
            
            ))}
        </ScrollView>
        <View style={{ paddingHorizontal: 15, paddingVertical: 10, borderTopWidth: 1, borderColor: colors.borderColor, flexDirection: 'row', alignItems: 'flex-end', gap: 10 }}>
            <TextInput
                style={{ ...FONTS.font, color: 'white', flex: 1, height: 'auto', borderWidth: 1, borderColor: 'grey', borderRadius: 10, paddingHorizontal: 10 }}
                placeholder='Add a comment...'
                placeholderTextColor={'grey'}
                value={newComment}
                multiline={true}
                onChangeText={text => setNewComment(text)}
            />
            <TouchableOpacity
                style={{ height: 35, width: 35, borderRadius: 35, borderWidth: 1, borderColor: 'grey', backgroundColor: "#0C1427", alignItems: 'center', justifyContent: 'center', paddingRight: 2, paddingTop: 2, marginBottom: 10 }}
                onPress={handleAddComment}
            >
                <SvgXml
                    height={16}
                    width={16}
                    stroke={COLORS.white}
                    xml={ICONS.send}
                />
            </TouchableOpacity>
        </View>
    </SafeAreaView>
);
};

export default CommentsNew;