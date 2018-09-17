import firebase from 'firebase';

const  config = {
    apiKey: "AIzaSyC6HywsnYKdYoOw5yGPcbu3ZgwqnqYVSfc",
    authDomain: "koalastickers-d344f.firebaseapp.com",
    databaseURL: "https://koalastickers-d344f.firebaseio.com",
    projectId: "koalastickers-d344f",
    storageBucket: "koalastickers-d344f.appspot.com",
    messagingSenderId: "1059003803653"
  };


  const Firebase = firebase.initializeApp(config);

  export default Firebase;