import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import Profile1 from "./Profile1";
import Profile2 from "./Profile2";
import Profile3 from "./Profile3";
import Profile4 from "./Profile4";

const ProfileScreen = () => {

    const [profileLayout , setProfileLayout] = useState('');
    
    useFocusEffect(
        React.useCallback(() => {
            getUser();
          return () => {};
        }, [profileLayout])
    );

    const getUser = async () => {
      let data = await AsyncStorage.getItem('profileLayout');
      setProfileLayout(data);
    }


    return(
        <>
            {profileLayout === "profileLayout1" ?
                <Profile1/>
                :
            profileLayout === "profileLayout2" ?
                <Profile2/>
                :
            profileLayout === "profileLayout3" ?
                <Profile3/>
                :
            profileLayout === "profileLayout4" ?
                <Profile4/>
                :
                <Profile1/>
            }
        </>
    )
}



export default ProfileScreen;