// Initialize Firebase
/// TODO 1: Change to your firebase config
///         1. New a Firebase project
///         2. Copy and paste firebase config below
///         Important: Make sure there is databaseURL in the config.
///         If there is no databaseURL in the config, go to firebase console -> Realtime Database to find the databaseURL.
var config = {
    apiKey: "AIzaSyAYPxFYKMWDFpSe464cHrb-dq14msOv5t8",
    authDomain: "lab07-109060031.firebaseapp.com",
    databaseURL: "https://lab07-109060031-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "lab07-109060031",
    storageBucket: "lab07-109060031.appspot.com",
    messagingSenderId: "470847253419",
    appId: "1:470847253419:web:3ec64caff8082ac9c6c0ee"
};
firebase.initializeApp(config);