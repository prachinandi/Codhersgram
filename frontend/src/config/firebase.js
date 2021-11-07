import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTrRQ47fIncMr24wA6zfktPbR0SIYstOw",
  authDomain: "school-directoru.firebaseapp.com",
  projectId: "school-directoru",
  storageBucket: "school-directoru.appspot.com",
  messagingSenderId: "743870807788",
  appId: "1:743870807788:web:82fc4fe7cb8a0faf306fc9",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
