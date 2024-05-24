import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { TabView, TabBar } from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../layout/Header';
import { COLORS, SIZES, FONTS } from '../../constants/theme';
import Following from './Following';
import Followers from './Followers';
import database from '@react-native-firebase/database';

const ProfileFollow = ({route}) => {

    const [name, setName] = useState('');
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
                        //   setImgUrl(data.img);
                        //   setCoverImgUrl(data.coverimg);
                          setName(data.name);
                        //   setUsername(data.username);
                        //   setOneUserId(data.id);
                        //   setBio(data.bio);
                        //   setProfileLink(data.profileLink);
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
                              // Return a cleanup function (optional)
              return () => {
                // This function is called when the component unmounts or when the effect is re-run
                // You can perform any cleanup here if needed
            };
        }, []) // Dependency array is empty, so this effect runs only once when the component mounts
    );

    const { userId } = route.params;
    // console.log(userId)
    const {colors} = useTheme(); 
    const renderScene = ({ route }) => {
        switch (route.key) {
          case 'followers':
            return <Followers userId={userId} />;
          case 'following':
            return <Following userId={userId}/>;
          default:
            return null;
        }
    };
    
    
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'following', title: 'Following' },
        { key: 'followers', title: 'Followers' },
    ]);
    const renderTabBar = props => {
        return (
          <TabBar
            {...props}
            
            style={{
                backgroundColor:'transparent',
                elevation:0,
                shadowOpacity:0,
            }}
            tabStyle={{
                height:40,
                marginTop:5,
            }}
            indicatorStyle={{
                backgroundColor:COLORS.secondary,
            }}
            indicatorContainerStyle={{
                borderBottomWidth:1,
                borderColor:colors.borderColor
            }}
            pressColor={"transparent"}
            renderLabel={({ focused, route }) => {
              return (
                <Text
                    style={{
                        ...FONTS.fontLg,
                        fontSize:15,
                        top:-6,
                        color: focused ? colors.title : colors.text
                    }}
                >
                  {route.title}
                </Text>
              );
            }}
          />
        );
    };

    const  renderLazyPlaceholder = ({ route }) => (
        <ActivityIndicator color={COLORS.primary}/>
    );


    return (
        <SafeAreaView style={{flex:1}}>
            <LinearGradient
                style={{flex:1}}
                colors={colors.bgGradient}
            >
                <Header leftIcon={'back'} title={name} />

                <TabView
                    lazy
                    renderLazyPlaceholder={renderLazyPlaceholder}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    //swipeEnabled={false}
                    initialLayout={{ width: SIZES.width , height:0}}
                    renderTabBar={renderTabBar}
                />

            </LinearGradient>
        </SafeAreaView>
    );
};


export default ProfileFollow;