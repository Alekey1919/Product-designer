import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// Tiess-test

// const firebaseConfig = {
//   apiKey: "AIzaSyDnp8hMtTbBt0S0p-Rv2Qyee4r3ywPWO-A",
//   authDomain: "tiess-test.firebaseapp.com",
//   databaseURL: "https://tiess-test-default-rtdb.firebaseio.com",
//   projectId: "tiess-test",
//   storageBucket: "tiess-test.appspot.com",
//   messagingSenderId: "686603565240",
//   appId: "1:686603565240:web:8e2824ba98f7dc0d139c4d",
// };

// Product-designer

const firebaseConfig = {
  apiKey: "AIzaSyBnpzuqU4h3k5tPuiG6NkZD87u6WraCAAA",
  authDomain: "product-designer-fb458.firebaseapp.com",
  projectId: "product-designer-fb458",
  storageBucket: "product-designer-fb458.appspot.com",
  messagingSenderId: "182691813666",
  appId: "1:182691813666:web:3307723453795f07146d7b",
};

const fire = firebase.initializeApp(firebaseConfig);

const db = fire.firestore();
const auth = fire.auth();

export { fire, db, auth };
