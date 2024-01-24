import { defineStore } from 'pinia';
import { collection, addDoc, } from 'firebase/firestore';

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


interface UserState {
  firstname: string;
  surname: string;
  email: string;
  password: string;
  gender: string;
  cell: string;
  campaignStatus: boolean;
  agreement: boolean;
  personalDataAgreement: boolean;
}

export const useUserStore = defineStore({
  id: 'user',
  state: (): UserState => ({
    firstname: '',
    surname: '',
    email: '',
    password: '',
    gender: '',
    cell: '',
    campaignStatus: false,
    agreement: false,
    personalDataAgreement: false,
  }),
  getters: {
    // İhtiyaca göre gerekli getter'ları tanımlayabilirsiniz
  },
  actions: {
    async saveUserToFirebase(userState: UserState) {
      try {
        // Firebase'e kullanıcı bilgilerini ekleyin
        const docRef = await addDoc(collection(getFirestore(), 'users'), userState);
        console.log('User added with ID: ', docRef.id);
      } catch (error) {
        console.error('Error adding user: ', error);
      }
    },
    updateUser(newUserState: UserState) {
      // Kullanıcı verilerini güncelleyin
      this.firstname = newUserState.firstname;
      this.surname = newUserState.surname;
      this.email = newUserState.email;
      this.password = newUserState.password;
      this.gender = newUserState.gender;
      this.cell = newUserState.cell;
      this.campaignStatus = newUserState.campaignStatus;
      this.agreement = newUserState.agreement;
      this.personalDataAgreement = newUserState.personalDataAgreement;
    },
  },
});
