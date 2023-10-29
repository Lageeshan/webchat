import { initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



var app;
var storage;

try {
  app = getApp();
} catch (error) {
  const firebaseConfig = {
    apiKey: "AIzaSyBzKuzjKriUidssayDTBTnOzhYhI6EgmbY",
    authDomain: "web-chat-app-2-f13ae.firebaseapp.com",
    projectId: "web-chat-app-2-f13ae",
    storageBucket: "web-chat-app-2-f13ae.appspot.com",
    messagingSenderId: "229937947974",
    appId: "1:229937947974:web:0ed237852f9333d6977147"
  };
  app = initializeApp(firebaseConfig);
}
storage = getStorage(app);



const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, storage };
