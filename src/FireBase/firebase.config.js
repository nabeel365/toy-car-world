// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apikey:import.meta.env.VITE_APIKEY,
authdomain:import.meta.env.VITE_AUTHDOMAIN,
projectid:import.meta.env.VITE_PROJECTID,
storagebucket:import.meta.env.VITE_STORAGEBUCKET,
messagingsenderid:import.meta.env.VITE_MESSAGINGSENDERID,
appid:import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
