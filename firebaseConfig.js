import { initializeApp } from 'firebase/app';

import { getDatabase } from "firebase/database";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyATbK--ANZEdpV8fj3xqubX8_oJK3Y1tRM",
    authDomain: "tempus-master.firebaseapp.com",
    projectId: "tempus-master",
    storageBucket: "tempus-master.appspot.com",
    databaseURL: 'https://tempus-master-default-rtdb.firebaseio.com',
    messagingSenderId: "820990396271",
    appId: "1:820990396271:web:80f2c1da90b4424c554a9a",
    measurementId: "G-49Z0G6ZJ0W"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
export const db = getDatabase(app);
