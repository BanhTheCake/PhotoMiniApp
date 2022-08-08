import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGo_GQrN_iV7uC2X7gETVcWaK6S3p_QyM",
  authDomain: "photoapp-e6f96.firebaseapp.com",
  projectId: "photoapp-e6f96",
  storageBucket: "photoapp-e6f96.appspot.com",
  messagingSenderId: "382889888805",
  appId: "1:382889888805:web:e8bb6a51948948cb48c3cc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}
export default app
