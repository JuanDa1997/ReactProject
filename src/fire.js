import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDgLvWO8iXpwebpFz1dTCgHXWbsKzNBUG8",
    authDomain: "nocturnalgames-3d6e7.firebaseapp.com",
    projectId: "nocturnalgames-3d6e7",
    storageBucket: "nocturnalgames-3d6e7.appspot.com",
    messagingSenderId: "830830208076",
    appId: "1:830830208076:web:4ed691cd03cb23d90b00e9",
    measurementId: "G-YM1NGWY5HH"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default fire;