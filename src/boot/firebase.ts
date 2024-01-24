import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyB6NY430RuqdoK1K_c4ElZ7ahreN6gFR4A',
  authDomain: 'sailaway-7f050.firebaseapp.com',
  projectId: 'sailaway-7f050',
  storageBucket: 'sailaway-7f050.appspot.com',
  messagingSenderId: '56119614110',
  appId: '1:56119614110:web:d6ad483d31792defc0f98f'
};
const app = initializeApp(firebaseConfig); // Firebase'i başlatın
const firestore = getFirestore(app); // Firestore bağlantısını alın


export { firestore }; // Firestore bağlantısını dışa aktarın
