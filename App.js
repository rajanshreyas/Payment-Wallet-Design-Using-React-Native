import React from 'react';
import {StyleSheet, ScrollView, View, Text, Button} from 'react-native';
import Navigation from './navigation/navigation';
import {enableScreens} from 'react-native-screens';
import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyAq-i8QwNSX-KQ7yRcgW6aVZ2qjqPwLGEo",
  authDomain: "foodapp-8cb4f.firebaseapp.com",
  databaseURL: "https://foodapp-8cb4f.firebaseio.com",
  projectId: "foodapp-8cb4f",
  storageBucket: "foodapp-8cb4f.appspot.com",
  messagingSenderId: "990816713230",
  appId: "1:990816713230:web:0f7973afcfb4ccb70d9a5f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



enableScreens();


export default function App() {
  return (
    <Navigation />
    
  );
   
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      

  }
});

