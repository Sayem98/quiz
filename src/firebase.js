import { initializeApp } from "firebase/app";
//problem with environment variable.
const app = initializeApp({
  apiKey: "AIzaSyAV5KDz5m0nFNY0bk80St3vUnixd3nFd38",
  authDomain: "quiz-test-74cf8.firebaseapp.com",
  databaseURL:
    "https://quiz-test-74cf8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "quiz-test-74cf8",
  storageBucket: "quiz-test-74cf8.appspot.com",
  messagingSenderId: "641170158003",
  appId: "1:641170158003:web:1869c561b7fff2e3505bc6",
});

export default app;

// {
//   apiKey: "AIzaSyBx4pMSiKflxWTY5j6rOjWtGZY-KlXXa_Y",
//   authDomain: "quiz-dev-b7f2b.firebaseapp.com",
//   databaseURL:
//     "https://quiz-dev-b7f2b-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "quiz-dev-b7f2b",
//   storageBucket: "quiz-dev-b7f2b.appspot.com",
//   messagingSenderId: "104859974249",
//   appId: "1:104859974249:web:207f134404e038614c00f8",
// }
