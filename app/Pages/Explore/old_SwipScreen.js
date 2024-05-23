import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwiperCard from './SwipCard';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import IonIcons from "react-native-vector-icons/Ionicons";
import database from '@react-native-firebase/database';
import Auth from '../../Service/Auth';

import { useNavigation } from '@react-navigation/native';

const SwipScreen = () => {

    const [loading, setLoading] = useState(false); // Add loading state 
    const navigation = useNavigation();
    // Functions To Fetch all users
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const userRef = database().ref('users');
    
        // Listen for data changes at the "users" node
        const onUserChange = snapshot => {
          const data = snapshot.val();
        //   if (data) {
            // Convert the data object to an array of posts
            const usersArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
            const filteredUsersArray = usersArray.filter(users => users.id !== userid );
            setUsers(filteredUsersArray);
        //   } else {
        //     setUsers([]);
        //   }

          if(usersArray){
            
          }
          
        };
    
        // Attach the listener
        userRef.on('value', onUserChange);
    
        // Detach the listener when the component unmounts
        return () => userRef.off('value', onUserChange);
      }, []); // Run this effect only once, on component mount

    console.log(users)

    const [userid, setUserid] = useState('');

    useEffect(() => {
        getUser();
      },[]);

    const getUser = async () => {
        let data = await Auth.getAccount();
        // console.log(data)
        // setName(data.name);
        // setUsername(data.username);
        setUserid(data.id);
        // setemail(data.emailId);
        // setImgUrl(data.img);
        // setBio(data.bio);
        console.log(data.username) 
    }
    console.log("user id 59: ",userid)
    
  const [cards, setCards] = useState([
    { id: 1, text: 'Card 1', img: '1647447318764.jpg', bio: 'Innovative coder shaping digital realms'  },
    { id: 2, text: 'Card 2', img: '1659432638952.jpg', bio: 'Innovative coder shaping digital realms'  },
    { id: 3, text: 'Card 3', img: '1693591204065.jpg', bio: 'Innovative coder shaping digital realms'  },
    // Add more cards as needed
  ]);

//   const onSwipedLeft = (cardIndex) => {
//     // console.log('Disliked: ', cards[cardIndex].text);
//     console.log('Disliked: ', users[cardIndex].username);
//   };

//   const onSwipedRight = (cardIndex) => {
//     // console.log('Liked: ', cards[cardIndex].text);
//     console.log('Liked: ', users[cardIndex].username);
//   };

  const onSwipedLeft = (cardIndex) => {
    // Reference to the user being followed (to update their followers list)
      const userRef = database().ref(`users/${userid}/userlikes`);

      // Add the current user to the other user's followers list
      userRef.child(users[cardIndex].id).set(false)
          .then(() => {
          console.log('Current user Set False user\'s userlikes list');
          })
          .catch(error => {
          console.error('Error Adding current user\'s userlikes list:', error);
          });
  };

  const onSwipedRight = (cardIndex) => {
    // Reference to the user being unfollowed (to update their followers list)
    const userRef = database().ref(`users/${userid}/userlikes`);
    console.log("userref 95", userRef)
  
    // Remove the current user from the other user's followers list
    userRef.child(users[cardIndex].id).set(true)
      .then(() => {
        console.log('Current user Set False user\'s userlikes list');
      })
      .catch(error => {
        console.error('Error Adding current user\'s userlikes list:', error);
      });
  };

  return (
    <View>
        {loading && ( // Render loading animation if loading is true
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
        <View style={{backgroundColor: '#0C1427', flexDirection: 'row', justifyContent:'space-between', alignItems: 'center'}} >
            <View style={{width:"30%"}}>
                <TouchableOpacity onPress={()=> navigation.goBack()} ><AntDesignIcon name='arrowleft' style={{margin: 20, marginLeft: 15}} size={25}></AntDesignIcon></TouchableOpacity>
            </View>
            <View style={{width:"30%"}}>
                <Text style={{textAlign: 'center', fontSize: 20}}>Explore</Text>
            </View>
            <View style={{width:"30%"}}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('ChatScreen')} ><IonIcons name='chatbubble-ellipses-outline' style={{margin: 20, marginLeft: 15}} size={25}></IonIcons></TouchableOpacity> */}
            </View>
        </View>
        <View style={styles.container}>

        <Swiper
            cards={users}
            renderCard={(card) => <SwiperCard card={card} />}
            onSwipedLeft={onSwipedLeft}
            onSwipedRight={onSwipedRight}
            stackSize={3}
            cardIndex={0}
            backgroundColor="#f0f0f0"
            cardVerticalMargin={50}
            disableTopSwipe={true}
            disableBottomSwipe={true}
            overlayLabels={{
            left: {
                // title: 'DISLIKE',
                title: (
                <View style={styles.overlayLabel}>
                    <FontAwesomeIcon name="thumbs-down" size={30} color="white" />
                    {/* <Text style={styles.overlayLabelText}>DISLIKE</Text> */}
                </View>
                ),
                style: {
                label: {
                    backgroundColor: 'red',
                    borderColor: 'red',
                    color: 'white',
                    borderWidth: 1,
                    fontSize: 24,
                },
                wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: -20,
                },
                },
            },
            right: {
                // title: 'LIKE',
                title: (
                    <View style={styles.overlayLabel}>
                        <FontAwesomeIcon name="thumbs-up" size={30} color="white" />
                        {/* <Text style={styles.overlayLabelText}>DISLIKE</Text> */}
                    </View>
                    ),
                style: {
                label: {
                    backgroundColor: 'green',
                    borderColor: 'green',
                    color: 'white',
                    borderWidth: 1,
                    fontSize: 24,
                },
                wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: 20,
                },
                },
            },
            }}
            animateCardOpacity
        />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#f0f0f0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },loadingContainer: {
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

export default SwipScreen;
