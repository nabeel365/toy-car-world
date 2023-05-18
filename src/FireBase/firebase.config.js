// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey:import.meta.env.VITE_APIKEY,
authDomain:import.meta.env.VITE_AUTHDOMAIN,
projectId:import.meta.env.VITE_PROJECTID,
storageBucket:import.meta.env.VITE_STORAGEBUCKET,
messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
appId:import.meta.env.VITE_APPID,

// apiKey: "AIzaSyC2vHwPePyZVtj0mUKRjubYvjXd9bGe87Q",
// authDomain: "toycarworld.firebaseapp.com",
// projectId: "toycarworld",
// storageBucket: "toycarworld.appspot.com",
// messagingSenderId: "711782801940",
// appId: "1:711782801940:web:1c5a18978e6edd1e347d01"
};
console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
