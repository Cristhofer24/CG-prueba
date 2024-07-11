// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJy8c7byngbho-yxqosU5gDjyQn3E5PVU",
  authDomain: "cg-prueba-1eb07.firebaseapp.com",
  projectId: "cg-prueba-1eb07",
  storageBucket: "cg-prueba-1eb07.appspot.com",
  messagingSenderId: "377805571464",
  appId: "1:377805571464:web:3a27d09c06319f483a263d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
  
  export const storage = getStorage(app);