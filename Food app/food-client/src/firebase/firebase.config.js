
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// console.log(import.meta.env.VITE_SOME_KEY) // 123
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvCuGf3GasXMDWB3XhcjBkX4PVU6Ub4gg",
  authDomain: "food-1b16a.firebaseapp.com",
  projectId: "food-1b16a",
  storageBucket:"food-1b16a.appspot.com",
  messagingSenderId: "855615508754",
  appId: "1:855615508754:web:087c9847f4de69510563cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app