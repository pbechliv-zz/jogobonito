// todo: why app?
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGYk-W_cIzvE2_kvJ8-JiwG9Era0LMmCo",
  authDomain: "jogo-bonito-gr.firebaseapp.com",
  databaseURL: "https://jogo-bonito-gr.firebaseio.com",
  projectId: "jogo-bonito-gr",
  storageBucket: "jogo-bonito-gr.appspot.com",
  messagingSenderId: "50145972340"
};

//Initialize the Firebase SDK using the code snippet from above:
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true
});
firebase.firestore().enablePersistence();

export default firebase;
