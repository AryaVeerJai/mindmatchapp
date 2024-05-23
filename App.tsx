// // // Privious App.tsx
// // /**
// //  * Sample React Native App
// //  * https://github.com/facebook/react-native
// //  *
// //  * @format
// //  */
// import React, { useEffect } from 'react';
// import { StatusBar, StyleSheet, Text, View, SafeAreaView, useColorScheme} from 'react-native';
// import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import IoIcon from 'react-native-vector-icons/Ionicons';
// import Profile from './app/Pages/Profile/Profile';
// import Newsfeed from './app/Pages/Newsfeed/Newsfeed';
// import { ThemeProvider } from './src/context/ThemeContext';
// import NotificationScreen from './app/Pages/Notifications/NotificationScreen';
// import store from './app/Redux/Store';
// import ChatListScreen from './app/Pages/Chat/ChatList';
// import ChatScreen from './app/Pages/Chat/ChatScreen';
// import SearchScreen from "./app/Search/Search";
// import ProfileNew from './app/Pages/Profile/ProfileNew';
// // Import your font files
// import ChatNewScreen from './app/Pages/Chat/ChatNewScreen';
// import { Provider } from 'react-redux';
// import Settings from './app/Pages/Settings/Settings';


// // import firebase from '@react-native-firebase/app';
// import SignIn from './app/Pages/Auth/SignIn';
// import CreateAccount from './app/Pages/Auth/CreateAccount';
// import ForgotPassword from './app/Pages/Auth/ForgotPassword';
// import Onboarding from './app/Pages/Onboarding/Onboarding';
// import NewChat from './app/Pages/Chat/NewChat';
// import Security from './app/Pages/Security/Security';
// import PrivacyPolicy from './app/Pages/About/PrivacyPolicy';
// import TermsUse from './app/Pages/About/Terms&Use';
// import Theme from './app/Pages/Settings/Theme';
// import PushNotification from './app/Pages/Settings/PushNotification';
// import Account from './app/Pages/Account/Account';







// // Register the font

// const HomeScreen = () => (
//   <View style={styles.screen}>
//     <Text>Home Screen</Text>
//   </View>
// );

// // const SearchScreen = () => (
// //   <View style={styles.screen}>
// //     <Text>Search Screen</Text>
// //   </View>
// // );

// const PlusScreen = () => (
//   <View style={styles.screen}>
//     <Text>Plus Screen</Text>
//   </View>
// );

// const FavoritesScreen = () => (
//   <View style={styles.screen}>
//     <Text>Favorites Screen</Text>
//   </View>
// );

// const ProfileScreen = () => (
//   <View style={styles.screen}>
//     <Text>Profile Screen</Text>
//   </View>
// );

// const Tab = createBottomTabNavigator();

// const TopBar = () => (
//   <SafeAreaView>
//     <View style={styles.iconsContainer}>
//       <IoIcon.Button name="search-outline" size={30} backgroundColor="#fff" color='#000' />
//       <Icon.Button name="sliders" backgroundColor="#fff" size={30} color='#293241' />
//     </View>
//   </SafeAreaView>
// );

// const Stack = createStackNavigator();
// const NewsfeedStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
//     <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
//     <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
//     <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
//     <Stack.Screen name="Newsfeed" component={Newsfeed} options={{ headerShown: false }} />
//     <Stack.Screen name="NotificationsScreen" component={NotificationScreen} options={{ headerShown: false }} />
//     <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }} />
//     <Stack.Screen name="ChatListScreen" component={ChatListScreen} options={{ headerShown: false }} />
//     <Stack.Screen name="NewChat" component={NewChat} options={{ headerShown: false }} />
//     <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
//     <Stack.Screen name="Security" component={Security} options={{ headerShown: false }} />
//     <Stack.Screen name="Privacy" component={PrivacyPolicy} options={{ headerShown: false }} />
//     <Stack.Screen name="Terms" component={TermsUse} options={{ headerShown: false }} />
//     <Stack.Screen name="Theme" component={Theme} options={{ headerShown: false }} />
//     <Stack.Screen name="PushNotification" component={PushNotification} options={{ headerShown: false }} />
//     <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
//   </Stack.Navigator>
// );

// const App = () => {
//   const isDarkMode = useColorScheme() === 'dark';
//   const theme = isDarkMode ? DarkTheme : DefaultTheme;

  
//   return (
//     <Provider store={store}>
//     <ThemeProvider>
//     <NavigationContainer theme={theme}>
//       {/* <StatusBar barStyle="dark-content" backgroundColor="#fff" /> */}
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'light-content'} backgroundColor={isDarkMode ? '#000' : '#fff'} />
//       {/* <TopBar /> */}
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={NewsfeedStack}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="home" size={size} color={color} />
//             ),
//             headerShown: false
//           }}
//         />
//         <Tab.Screen
//           name="Search"
//           component={SearchScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="search" size={size} color={color} />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Plus"
//           component={ChatNewScreen}
          
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="plus-square-o" size={size} color={color} />
//             ),
//             headerShown: false
//           }}
//         />
//         <Tab.Screen
//           name="chat"
//           component={ChatNewScreen}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               // <Icon name="heart-o" size={size} color={color} />
//               <IoIcon name="chatbubbles-outline" size={size} color={color} />
//             ),
//             headerShown: false
//           }}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileNew}
//           options={{
//             tabBarIcon: ({ color, size }) => (
//               <Icon name="user-o" size={size} color={color} />
//             ),
//             headerShown: false
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//     </ThemeProvider>
//     </Provider>
//   );
// };

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   iconsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     paddingHorizontal: 10,
//   },
// });



// export default App;



import 'react-native-gesture-handler'
import React, { useEffect } from 'react';
import Routes from './app/Navigations/Route';
import { Provider } from 'react-redux';
import store from './app/Redux/Store';
import { notificationListener, requestUserPermission } from './app/helper/notification_helper';
//import messaging from '@react-native-firebase/messaging';
import {Alert, Platform} from 'react-native';

const App = () =>{
  
  // useEffect(() => {
  //   const unsubscribe = messaging().onMessage(async remoteMessage => {
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });
  
  //   return unsubscribe;
  // }, []);
  
 
  
  
  useEffect(() => {
    if(Platform.OS === 'android') {
      requestUserPermission();
      notificationListener();
    }
    },[]);

  return (
    <>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </>
  );
};

export default App;
