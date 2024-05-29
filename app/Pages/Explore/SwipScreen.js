import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import SwiperCard from './SwipCard';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import IonIcons from "react-native-vector-icons/Ionicons";
import database from '@react-native-firebase/database';
import Auth from '../../Service/Auth';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

const SwipScreen = () => {
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const [users, setUsers] = useState([]);
    const [userid, setUserid] = useState('');
    const [likedUserId, setLikedUserid] = useState([]);
    const [allUsers, setAllUsers] = useState([]);

    // useEffect(() => {
    //     getUser();
    // }, []);

      // Use useFocusEffect hook to trigger the data loading when the screen comes into focus
      useFocusEffect(
        React.useCallback(() => {
            // Define the asynchronous function to fetch user data
            const getUser = async () => {
                setLoading(true); // Set loading state to true while fetching data
                try {
                    // Fetch user data from Auth service
                    let data = await Auth.getAccount();
                    // Update state variables with fetched data
                    setUserid(data.id);
                    fetchUsers(data.id);
                    // fetchCurrentUser(data.id);
                    setLikedUserid(data.userlikes);
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

    // const getUser = async () => {
    //     let data = await Auth.getAccount();
    //     // console.log("Data 25: ", data) 
    //     setUserid(data.id);
    //     fetchUsers(data.id);
    //     fetchCurrentUser(data.id);
    //     setLikedUserid(data.userlikes);
    // };

    // console.log(likedUserId)



    const fetchUsers = (currentUserId) => {
        const userRef = database().ref('users');

        const onUserChange = snapshot => {
            const data = snapshot.val();
            if (data) {
                const usersArray = Object.keys(data).map(key => ({ id: key, ...data[key] }));
                setAllUsers(usersArray)
                const filteredUsersArray = usersArray.filter(user => user.id !== currentUserId);
                setUsers(filteredUsersArray);
            } else {
                setUsers([]);
            }
            setLoading(false);
        };

        userRef.on('value', onUserChange);

        return () => userRef.off('value', onUserChange);
    };


    // console.log("52", users)

    
    const fetchCurrentUser = allUsers.find(user => user.id === userid);

    // Check if fetchCurrentUser is not null or undefined before accessing its properties
    const currentUserLikes = fetchCurrentUser ? fetchCurrentUser.userlikes : [];
    // console.log("Current User Like List", currentUserLikes)
    
    // You might want to render a loading indicator or handle the component's rendering differently until fetchCurrentUser is available
    // const usersNotInLikedUserId = fetchCurrentUser ? users.filter(user => !currentUserLikes.hasOwnProperty(user.id)) : [];
    const usersNotInLikedUserId = fetchCurrentUser ? users.filter(user => !currentUserLikes || !currentUserLikes.hasOwnProperty(user.id)) : [];

    // console.log("Final Liked List", usersNotInLikedUserId)
    

    const onSwipedLeft = (cardIndex) => {
        const userRef = database().ref(`users/${userid}/userlikes`);
        userRef.child(usersNotInLikedUserId[cardIndex].id).set(false)
            .then(() => {
                console.log('Disliked user added to userlikes list');
            })
            .catch(error => {
                console.error('Error updating userlikes list:', error);
            });
    };

    const onSwipedRight = (cardIndex) => {
        const userRef = database().ref(`users/${userid}/userlikes`);
        userRef.child(usersNotInLikedUserId[cardIndex].id).set(true)
            .then(() => {
                console.log('Liked user added to userlikes list');
            })
            .catch(error => {
                console.error('Error updating userlikes list:', error);
            });
    };

    return (
        <View style={{ flex: 1 }}>
            {loading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )}
            <View style={styles.header}>
                <View style={styles.headerSection}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <AntDesignIcon name='arrowleft' style={styles.headerIcon} size={25} />
                    </TouchableOpacity>
                </View>
                <View style={styles.headerSection}>
                    <Text style={styles.headerText}>Explore</Text>
                </View>
                <View style={styles.headerSection} />
            </View>
            <View style={styles.container}>
                <Swiper
                    cards={usersNotInLikedUserId}
                    renderCard={(card) => <SwiperCard key={card} card={card} />}
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
                            title: (
                                <View style={styles.overlayLabel}>
                                    <FontAwesomeIcon name="thumbs-down" size={30} color="white" />
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
                            title: (
                                <View style={styles.overlayLabel}>
                                    <FontAwesomeIcon name="thumbs-up" size={30} color="white" />
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
        flex: 1,
        backgroundColor: '#f0f0f0',
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
    header: {
        backgroundColor: '#0C1427',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerSection: {
        width: "30%",
    },
    headerIcon: {
        margin: 20,
        marginLeft: 15,
    },
    headerText: {
        textAlign: 'center',
        fontSize: 20,
    },
    overlayLabel: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SwipScreen;
