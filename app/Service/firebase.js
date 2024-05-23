import { firebase } from '@react-native-firebase/app';
import '@react-native-firebase/firestore'; // Import other Firebase services if needed

const firebaseConfig = {
  // Your Firebase config object goes here
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore();
// You can also initialize other Firebase services here

export { firestore }; // Export Firestore or any other Firebase services you need
