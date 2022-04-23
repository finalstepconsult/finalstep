import firebase from "firebase/app";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDNx32KUC3SgKxUW6-b-3j7LqwfwBtJjcA",
    authDomain: "finalstep-1c9bc.firebaseapp.com",
    projectId: "finalstep-1c9bc",
    storageBucket: "finalstep-1c9bc.appspot.com",
    messagingSenderId: "740986920937",
    appId: "1:740986920937:web:80a9d735b74808e244b578",
    measurementId: "G-54YFTXBH07"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();