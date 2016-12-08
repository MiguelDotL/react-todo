import firebase from 'firebase';

// Initialize Firebase
try {
  var config = {
    apiKey: "AIzaSyAqUw8v0J_yrtLFZucm57UqK07DKU2-nOM",
    authDomain: "react-my-todos.firebaseapp.com",
    databaseURL: "https://react-my-todos.firebaseio.com",
    storageBucket: "react-my-todos.appspot.com",
    messagingSenderId: "373043931340"
  };

  firebase.initializeApp(config);
} catch(e) {

};

export var firebaseRef = firebase.database().ref();
export default firebase;
