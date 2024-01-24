import { defineStore } from 'pinia';
import { UserCredential } from 'firebase/auth'; // Firebase Authentication'dan UserCredential'ı içe aktarın
import { useFirebase } from '@/composables/firebase'; // Firebase'e erişim için kullanabileceğiniz bir composable dosyasıdır

const { auth } = useFirebase();

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as firebase.User | null, // Kullanıcı bilgilerini burada saklayacağız
    error: null as string | null, // Hata durumları için
  }),
  getters: {
    isAuthenticated: (state) => !!state.user, // Kullanıcı oturum açtı mı?
  },
  actions: {
    // Kullanıcıyı giriş yaparken oturum açık olarak ayarlayan eylem
    setUser(user: firebase.User | null) {
      this.user = user;
    },
    // Hata durumlarını saklayan eylem
    setError(error: string | null) {
      this.error = error;
    },
    // Hata durumunu temizleyen eylem
    clearError() {
      this.error = null;
    },
    // Firebase Authentication kullanarak giriş yapma işlemi
    async login({ email, password }: { email: string; password: string }) {
      try {
        // Firebase Authentication ile giriş yapın
        const userCredential: UserCredential = await auth.signInWithEmailAndPassword(email, password);

        // Başarılı giriş durumunda kullanıcı bilgilerini saklayın
        this.setUser(userCredential.user);

        // Hata durumunu temizleyin
        this.clearError();
      } catch (error) {
        // Giriş hatası durumunda hata mesajını saklayın
        this.setError(error.message);
      }
    },
    // Firebase Authentication kullanarak çıkış yapma işlemi
    async logout() {
      try {
        // Firebase Authentication ile çıkış yapın
        await auth.signOut();

        // Kullanıcıyı null olarak ayarlayın
        this.setUser(null);
      } catch (error) {
        // Çıkış hatası durumunda hata mesajını saklayın
        this.setError(error.message);
      }
    },
  },
});

// Bu dosyayı kullanmak için bir setup fonksiyonu ekleyin
export function setupAuthStore() {
  return useAuthStore();
}
