import React from "react";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import Splash from "./Onboarding/Splash";
import Onboarding from "./Onboarding/Onboarding";
import SignIn from "./Auth/SignIn";
import CreateAccount from "./Auth/CreateAccount";
import ForgotPassword from "./Auth/ForgotPassword";
import EnterCode from "./Auth/EnterCode";
import ChangePassword from "./Auth/ChangePassword";
import PostScreen from "./Post/Post";
import ProfileFollow from "./Profile/ProfileFollow";
import Status from "./Status/Status";
import Comments from "../components/Comments";
import Notification from "./Notifications/NotificationScreen";
import ChatScreen from "./Chat/ChatScreen";
import Settings from "./Settings/Settings";
import About from "./About/About";
import PrivacyPolicy from "./About/PrivacyPolicy";
import TermsUse from "./About/Terms&Use";
import Account from "./Account/Account";
import PersonalInformation from "./Account/PersonalInformation";
import Language from "./Account/Language";
import ContactsSyncing from "./Account/ContactsSyncing";
import Security from "./Security/Security";
import LoginActivity from "./Security/LoginActivity";
import SavedLoginInfo from "./Security/SavedLoginInfo";
import TwoFactorAuth from "./Security/TwoFactorAuth";
import PushNotification from "./Settings/PushNotification";
import EditProfile from "./Profile/EditProfile";
// import Explore from "./Search/Explore";
import NewChat from "./Chat/NewChat";
import ProfileLayout from "./Settings/ProfileLayout";
import Theme from "./Settings/Theme";
import Newsfeed from "./Newsfeed/Newsfeed";
import DrawerNavigation from "./DrawerNavigation";
import CreatePostScreen from "./Post/CreatePostScreen";
import CreatePost from "./Post/CreatePost";
import NewNewsfeed from "./Newsfeed/NewNewsFeed";
import CreatePollScreen from "./Post/CreatePollScreen";
import ToggleStyle3 from "./Post/ToogleSwitchTest";
import LookingFor from "./Post/LookingFor";
import NewCreatePollScreen from "./Post/NewCreatePollScreen";
import CommentsNew from "../CommentsNew";
import Profile2 from "./Profile/Profile2";
import OthersProfile from "./Post/OthersProfile";
import Following from "./Profile/Following";
import ProfileNew from "./Profile/ProfileNew";
// import LocationAdd from "./Post/LocationAdd";
// import Components from "../Screens/components";


const StackComponent = createStackNavigator();

const Pages = (props) => {

  return (
    <>
      
      <StackComponent.Navigator
        initialRouteName={"Splash"}
        detachInactiveScreens={true}
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <StackComponent.Screen name={"Splash"} component={Splash} />
        <StackComponent.Screen name={"Onboarding"} component={Onboarding} />
        <StackComponent.Screen name={"SignIn"} component={SignIn} />
        <StackComponent.Screen name={"CreateAccount"} component={CreateAccount} />
        <StackComponent.Screen name={"ForgotPassword"} component={ForgotPassword} />
        <StackComponent.Screen name={"EnterCode"} component={EnterCode} />
        <StackComponent.Screen name={"ChangePassword"} component={ChangePassword} />
        <StackComponent.Screen name={"DrawerNavigation"} component={DrawerNavigation} />
        <StackComponent.Screen name={"PostScreen"} component={PostScreen} />
        <StackComponent.Screen name={"ProfileFollow"} component={ProfileFollow} />
        <StackComponent.Screen name={"Status"} component={Status} />
        <StackComponent.Screen name={"Comments"} component={Comments} />
        <StackComponent.Screen name={"Notification"} component={Notification} />
        <StackComponent.Screen name={"ChatScreen"} component={ChatScreen} />
        <StackComponent.Screen name={"Settings"} component={Settings} />
        <StackComponent.Screen name={"About"} component={About} />
        <StackComponent.Screen name={"PrivacyPolicy"} component={PrivacyPolicy} />
        <StackComponent.Screen name={"TermsUse"} component={TermsUse} />
        <StackComponent.Screen name={"Account"} component={Account} />
        <StackComponent.Screen name={"PersonalInformation"} component={PersonalInformation} />
        <StackComponent.Screen name={"Language"} component={Language} />
        <StackComponent.Screen name={"ContactsSyncing"} component={ContactsSyncing} />
        <StackComponent.Screen name={"Security"} component={Security} />
        <StackComponent.Screen name={"LoginActivity"} component={LoginActivity} />
        <StackComponent.Screen name={"SavedLoginInfo"} component={SavedLoginInfo} />
        <StackComponent.Screen name={"TwoFactorAuth"} component={TwoFactorAuth} />
        <StackComponent.Screen name={"PushNotification"} component={PushNotification} />
        <StackComponent.Screen name={"EditProfile"} component={EditProfile} />
        {/* <StackComponent.Screen name={"Explore"} component={Explore} /> */}
        <StackComponent.Screen name={"NewChat"} component={NewChat} />
        <StackComponent.Screen name={"ProfileLayout"} component={ProfileLayout} />
        <StackComponent.Screen name={"Theme"} component={Theme} />
        {/* <StackComponent.Screen name={"Components"} component={Components} /> */}
        {/* my Screens */}
        {/* <StackComponent.Screen name={"Newsfeed"} component={Newsfeed} /> */}
        <StackComponent.Screen name={"Newsfeed"} component={NewNewsfeed} />
        <StackComponent.Screen name={"CreatePostScreen"} component={CreatePostScreen} />
        {/* <StackComponent.Screen name={"CreatePollScreen"} component={CreatePollScreen} /> */}
        <StackComponent.Screen name={"CreatePollScreen"} component={NewCreatePollScreen} />
        <StackComponent.Screen name={"ToggleSwitchTest"} component={ToggleStyle3} />
        <StackComponent.Screen name={"LookingFor"} component={LookingFor} />
        <StackComponent.Screen name={"CommensNew"} component={CommentsNew} />
        <StackComponent.Screen name={"Profile2"} component={Profile2} />
        <StackComponent.Screen name={"ProfileNew"} component={ProfileNew} />
        <StackComponent.Screen name={"OtherProfile"} component={OthersProfile} />
        <StackComponent.Screen name={"Following"} component={Following} />
        {/* <StackComponent.Screen name={"LocationAdd"} component={LocationAdd} /> */}
        {/* <StackComponent.Screen name={"CreatePostScreen"} component={CreatePost} /> */}
      </StackComponent.Navigator>
    </>
  );
};
export default Pages;
