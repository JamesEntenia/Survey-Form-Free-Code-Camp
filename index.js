// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC1rEgcbqQnN3j_fphUs0OyP42IImMBKGQ",
    authDomain: "survey-form-c36c4.firebaseapp.com",
    projectId: "survey-form-c36c4",
    storageBucket: "survey-form-c36c4.appspot.com",
    messagingSenderId: "722189924260",
    appId: "1:722189924260:web:8cfc890a98b4576577b331",
    measurementId: "G-RHQQYS2JBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);