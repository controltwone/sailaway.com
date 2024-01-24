// useCarouselStore.ts
import { defineStore } from 'pinia';
import { firestore } from 'boot/firebase'; // Firebase konfigürasyonunuzun yolu
import { collection, getDocs } from 'firebase/firestore';

interface CarouselImage {
  name: number;
  imgSrc: string;
}

export const useCarouselStore = defineStore('carousel', {
  state: () => ({
    images: [] as CarouselImage[],
  }),
  actions: {
    async fetchImages() {
      const imagesCol = collection(firestore, 'carouselImages'); // Koleksiyon adınız
      const imageSnapshot = await getDocs(imagesCol);
      const imageList: CarouselImage[] = imageSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          name: data.name,
          imgSrc: data.imgSrc,
        };
      });
      this.images = imageList;
    },
  },
});
