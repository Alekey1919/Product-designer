import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnp8hMtTbBt0S0p-Rv2Qyee4r3ywPWO-A",
  authDomain: "tiess-test.firebaseapp.com",
  databaseURL: "https://tiess-test-default-rtdb.firebaseio.com",
  projectId: "tiess-test",
  storageBucket: "tiess-test.appspot.com",
  messagingSenderId: "686603565240",
  appId: "1:686603565240:web:8e2824ba98f7dc0d139c4d",
};

var fire = firebase.initializeApp(firebaseConfig);

export default fire;
