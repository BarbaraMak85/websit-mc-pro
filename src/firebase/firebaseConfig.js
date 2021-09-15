import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "mc-pro-b1852.firebaseapp.com",
  databaseURL: "https://mc-pro-b1852-default-rtdb.firebaseio.com",
  projectId: "mc-pro-b1852",
  storageBucket: "mc-pro-b1852.appspot.com",
  messagingSenderId: "679886642946",
  appId: "1:679886642946:web:142135528c533b3eaf2c1b",
  measurementId: "G-ETSV1D3QLY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
