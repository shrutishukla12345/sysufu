// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getfirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDdnkTlu_BbsL9QI_QIJfXuJwUq02H4mqE",
  authDomain: "my-project-e8995.firebaseapp.com",
  databaseURL: "https://my-project-e8995-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-project-e8995",
  storageBucket: "my-project-e8995.appspot.com",
  messagingSenderId: "142211037929",
  appId: "1:142211037929:web:10ad94738f4c6662a38e78",
  measurementId: "G-C3VF370YBT"
};


const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
export const firestore=getfirestore(app);