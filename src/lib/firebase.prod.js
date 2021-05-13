import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAI514JTK-ZzwYiVEIGdj2zgFnO45EKxH4",
  authDomain: "netflix-clone-911c4.firebaseapp.com",
  projectId: "netflix-clone-911c4",
  storageBucket: "netflix-clone-911c4.appspot.com",
  messagingSenderId: "985888447796",
  appId: "1:985888447796:web:2d8d05490914df1b749961"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };