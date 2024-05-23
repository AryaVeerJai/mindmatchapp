// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import firebase from '@react-native-firebase/app';



// // useEffect (() => {
//     const firebaseConfig = {
//       apiKey: "AIzaSyCcIQy2X7tFG0G-vP_ceRiPBXhCfPEzmrk",
//       authDomain: "mindmatchapp.firebaseapp.com",
//       projectId: "mindmatchapp",
//       storageBucket: "mindmatchapp.appspot.com",
//       messagingSenderId: "198772319044",
//       appId: "1:198772319044:web:1e55f6b83161d5902cad11",
//       measurementId: "G-Q1FQ5796EE"
//     };
//     if (!firebase.apps.length) {
//       firebase.initializeApp(firebaseConfig);
//     }
// //   }, []);


// AppRegistry.registerComponent(appName, () => App);


import firebase from '@react-native-firebase/app';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import firestore from '@react-native-firebase/firestore';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCcIQy2X7tFG0G-vP_ceRiPBXhCfPEzmrk",
    authDomain: "mindmatchapp.firebaseapp.com",
    databaseURL: "https://mindmatchapp-default-rtdb.firebaseio.com",
    projectId: "mindmatchapp",
    storageBucket: "mindmatchapp.appspot.com",
    messagingSenderId: "198772319044",
    appId: "1:198772319044:web:158b657e599927e12cad11",
    measurementId: "G-VXWQEZ2GWL"
  };



//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


// Register the app component
AppRegistry.registerComponent(appName, () => App);



// Initialize Firebase
if (!firestore().app) {
  firestore().initializeApp(firebaseConfig);
}