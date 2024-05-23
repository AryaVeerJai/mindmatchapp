import { PermissionsAndroid, Platform } from 'react-native';
import messaging from '@react-native-firebase/messaging';

export const  requestUserPermission = async () => {

  if(Platform.OS === 'android'){
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
  }

  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
   
    let token = await messaging().getToken();
    console.log("sserserser",token);
}

export const notificationListener = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
            'Notification caused app to open from background state:',
            remoteMessage.notification,
        );
    });

    messaging()
        .getInitialNotification()
        .then(remoteMessage => {
        if (remoteMessage) {
            console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
            );
        }
    });
}

const getHeaders = () => {
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'key=AAAAkxQnCV8:APA91bHR2PyAAqCXv4DT1T6DJwvhvsZSw1i6LwhpWgpR4z7bkO6Y_VzGWwXgLzZpi9WmsvofgYBQ0Wy6Du2h8rDXxlqUEd3RGeqvCSscQHBUB7Hwbr3grYNhQZL2hgxyBhen2qDfs7ZG'
    };
    return headers;
};

export const sendSingleDeviceNotification = data => {
    // var myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    // myHeaders.append(
    //   'Authorization',
    //   'key=AAAA7sPYarA:APA91bFfnjzBF29knkdi5snZzUEnvrQtZQ8LvhlikVPHpGawCaoFwTpX6_aXaYPDVZ07TC2HM_70-QcSAr8Ejwov-gIsShUpzIDX2PkK8bBSTdkJcASaQv-3nlFMasESvlzDCcd9KIbH',
    //  );

    var raw = JSON.stringify({
      data: {},
      notification: {
        body: data.body,
        title: data.title,
      },
      to: data.token,
    });
  
    var requestOptions = {
      method: 'POST',
      headers: getHeaders(),
      body: raw,
      redirect: 'follow',
    };
  
     fetch('https://fcm.googleapis.com/fcm/send', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
};