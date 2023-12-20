import firebase from "firebase/app";
import "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsxYvpQl9T6HOvdjP6iAJiSiap7D67Z8c",
  authDomain: "vue-fb-1234.firebaseapp.com",
  databaseURL: "https://vue-fb-1234-default-rtdb.firebaseio.com",
  projectId: "vue-fb-1234",
  storageBucket: "vue-fb-1234.appspot.com",
  messagingSenderId: "915495868860",
  appId: "1:915495868860:web:9da284a4bee5e6d00073b9",
};

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database()
