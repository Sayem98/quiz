import { initializeApp } from "firebase/app";
//problem with environment variable.
const app = initializeApp({
  apiKey: "AIzaSyBx4pMSiKflxWTY5j6rOjWtGZY-KlXXa_Y",
  authDomain: "quiz-dev-b7f2b.firebaseapp.com",
  projectId: "quiz-dev-b7f2b",
  storageBucket: "quiz-dev-b7f2b.appspot.com",
  messagingSenderId: "104859974249",
  appId: "1:104859974249:web:207f134404e038614c00f8",
});

export default app;
