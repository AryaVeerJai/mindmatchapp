import React from "react";
import { Image, TouchableOpacity, View, Platform } from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from "react-native-svg";
import HomeScreen from "./Home/Home";
import SearchScreen from "./Search/Search";
import ProfileScreen from "./Profile/Profile";
import PostScreen from "./Post/Post";
import ChatList from "./Chat/ChatList";
import { COLORS, ICONS, IMAGES, SIZES } from "../constants/theme";
import ProfileNew from "./Profile/ProfileNew";
import Newsfeed from "./Newsfeed/Newsfeed";
import CreatePostScreen from "./Post/CreatePostScreen";
import NewNewsfeed from "./Newsfeed/NewNewsFeed";
import SwipScreen from "./Explore/SwipScreen";
import IoIcon from 'react-native-vector-icons/Ionicons';
// import MainSlider from "../components/MainSlider/MainSlider";

const Tab = createBottomTabNavigator();


const CustomTabBarButton = () => {
  
  const navigation = useNavigation();

  return(
    <View style={{flex:1.2,alignItems:'center'}}>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel="Post"
        accessibilityHint="create the post"
        // onPress={()=> navigation.navigate('PostScreen')}
        // onPress={()=> navigation.navigate('CreatePostScreen')}
        onPress={()=> navigation.navigate('SwipScreen')}
        style={{
          height:50,
          width:50,
          top:-15,
          borderRadius:18,
          alignItems:'center',
          justifyContent:'center',
          // backgroundColor:COLORS.primary,
          backgroundColor:'#55288E',
        }}
        >
        {/* <SvgXml
          height={20}
          width={20}
          xml={ICONS.plus}
        /> */}
        <IoIcon size={30} name="compass-outline"/>
      </TouchableOpacity>
    </View>
  )
}

const BottomNavigation = () => {

  const theme = useTheme();
  const {colors} = theme;
  
 
  return (
    <>
      
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle:{
            height:55,
            position:'absolute',
            bottom:0,
            borderTopWidth:0,
            borderTopLeftRadius:SIZES.radius_md,
            borderTopRightRadius:SIZES.radius_md,
            backgroundColor:  theme.dark ? 'rgba(75,91,157,1)' : '#fff',
            // backgroundColor:  theme.dark ? '#55288E' : '#fff',
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,

            elevation: 8,
          },
          
        }}
      >
        <Tab.Screen 
          name="Home"
          // component={HomeScreen}
          // component={Newsfeed}
          component={NewNewsfeed}
          options={{
            tabBarIconStyle:{
              top: Platform.OS === 'ios' ? 12 : 0,
            },
            tabBarIcon:({focused}) => (
              <View>
                <Image
                  source={IMAGES.home}
                  style={{
                    height:22,
                    width:22,
                    tintColor:colors.title,
                    opacity: focused ? 1 : .6,
                  }}
                />
              </View>
            ),
            tabBarLabel:()=>(<></>)
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen} 
          // component={MainSlider} 
          options={{
            tabBarIconStyle:{
              top: Platform.OS === 'ios' ? 12 : 0,
            },
            tabBarIcon:({focused}) => (
              <View>
                <Image
                  source={IMAGES.search}
                  style={{
                    height:22,
                    width:22,
                    tintColor:colors.title,
                    opacity: focused ? 1 : .6,
                  }}
                />
              </View>
            ),
            tabBarLabel:()=>(<></>)
          }}
        />
        {/* <Tab.Screen
          name="SwipScreen"
          component={SwipScreen} 
          options={{
            tabBarIconStyle:{
              top: Platform.OS === 'ios' ? 12 : 0,
            },
            tabBarIcon:({focused}) => (
              <View>
                <Image
                  source={IMAGES.search}
                  style={{
                    height:22,
                    width:22,
                    tintColor:colors.title,
                    opacity: focused ? 1 : .6,
                  }}
                />
              </View>
            ),
            tabBarLabel:()=>(<></>)
          }}
        /> */}
        {/* <Tab.Screen
          name="Post"
          // component={PostScreen} 
          component={CreatePostScreen } 
          options={{
            tabBarButton: props => <CustomTabBarButton {...props} />
          }}
        /> */}
        <Tab.Screen
          name="SwipScreen"
          // component={PostScreen} 
          component={SwipScreen } 
          options={{
            tabBarButton: props => <CustomTabBarButton {...props} />
          }}
        />
        <Tab.Screen 
          name="Chat"
          component={ChatList}
          options={{
            tabBarIconStyle:{
              top: Platform.OS === 'ios' ? 12 : 0,
            },
            tabBarIcon:({focused}) => (
              <View>
                <Image
                  source={IMAGES.chat}
                  style={{
                    height:22,
                    width:22,
                    tintColor:colors.title,
                    opacity: focused ? 1 : .6,
                  }}
                />
              </View>
            ),
            tabBarLabel:()=>(<></>)
          }}
        />
        <Tab.Screen 
          name="Profile" 
          // component={ProfileScreen} 
          component={ProfileNew} 
          options={{
            tabBarIconStyle:{
              top: Platform.OS === 'ios' ? 12 : 0,
            },
            tabBarIcon:({focused}) => (
              <View>
                <Image
                  source={IMAGES.profile}
                  style={{
                    height:22,
                    width:22,
                    tintColor:colors.title,
                    opacity: focused ? 1 : .6,
                  }}
                />
              </View>
            ),
            tabBarLabel:()=>(<></>)
          }}
        />
      </Tab.Navigator>
    </>
  );
};



export default BottomNavigation;
