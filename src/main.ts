
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTHBt_vNcYV00XGNViOgCCHCMBcS8BfLA",
  authDomain: "guitarfrets-a2909.firebaseapp.com",
  projectId: "guitarfrets-a2909",
  storageBucket: "guitarfrets-a2909.appspot.com",
  messagingSenderId: "666269205630",
  appId: "1:666269205630:web:13ae7d17a12fa3330fc42f",
  measurementId: "G-YQ8MS5S70V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
