<template>
  <div class="blog-list-container">
    <div class="blog-list-header" style="margin-left: 650px; margin-right: 390px;">
      <!-- Search Form -->
      <q-form class="row justify-end">
        <q-input filled v-model="searchQuery" class="col-9" placeholder="Blog Ara" />
        <q-btn icon="search" class="col-3" @click="searchBlogs" />
      </q-form>
    </div>

    <div class="blog-list-content">
      <div class="row">
        <div class="col-12" v-for="blog in filteredBlogs" :key="blog.id">
          <div class="blog-list-item">
            <div class="row">
              <!-- Blog Image -->
              <div class="col-4">
                <q-img :src="blog.image" :alt="blog.title" />
              </div>

              <!-- Blog Content -->
              <div class="col-8">
                <div class="blog-content" style="margin-right: 390px;">
                  <h4 style="font-size: 22px;">{{ blog.title }}</h4>
                  <p>{{ blog.excerpt }}</p>
                  <q-btn  label="Devamı" :to="blog.link" color="primary" />
                  <div class="blog-date">{{ blog.date }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'BlogListComponent',
  setup() {
    const searchQuery = ref('');
    const blogs = ref([
    {
        id: 1,
        title: 'HOBIE PEDALLI KANOLAR',
        excerpt: 'HOBIE MARKA PEDALLI KANOLAR 20 YILA AŞKIN SÜRE İLE GELİŞTİRDİĞİ MIRAGE DRIVE TEKNOLOJİSİ İLE HER YIL PEDAL SİSTEMİNİ YENİLEMEKTE',
        date: '25/02/2021 14:23',
        image: 'https://ideacdn.net/idea/hh/66/myassets/blogs/homepage-difference-redefine.jpg?revision=1614252206',
        link: '/blog/icerik/hobie-pedalli-kanolar'
      },
      // ... previous entries
      {
        id: 2,
        title: 'HOBIE MIRAGE iTREK 11',
        excerpt: 'Yer ve depolama bir sorun teşkil ediyorsa, seyahat ederken kanom yanımda olsun diyorsanız sizlere tavsiyemiz Hobie\'nin ITrek 11',
        date: '14/01/2021 10:15',
        image: 'https://ideacdn.net/idea/hh/66/myassets/blogs/hobie-sailaway-pompa-sisirilebilir-kano-kurekli-2021-1-kisilik-kano-itrek-11-fish-man.jpg?revision=1613667934',
        link: '/blog/icerik/hobie-mirage-itrek-11'
      },
      {
        id: 3,
        title: 'HOBIE MIRAGE ECLIPSE',
        excerpt: 'ÜSTÜNE ÇIKIN VE SÜRMEYE BAŞLAYIN! ECLİPSİ KULLANMAK YÜRÜMEK KADAR KOLAY',
        date: '22/12/2020 14:07',
        image: 'https://ideacdn.net/idea/hh/66/myassets/blogs/hobie-eclipse-sailaway.jpg?revision=1608635246',
        link: '/blog/icerik/hobie-mirage-eclipse-1'
      },
      // ... continue with the rest of the blogs
      {
        id: 4,
        title: 'HOBIE MIRAGE iTREK FİESTA',
        excerpt: 'Pro Limit firmasının kaliteli ürünlerini 2018 itibariyle sizlere sunabilmekten mutluluk duyarız.',
        date: '22/12/2020 13:58',
        image: 'https://ideacdn.net/idea/hh/66/myassets/blogs/hobie-sailaway-pompa-sisirilebilir-kano-kurekli-2021-4-kisilik-kano-itrek-fiesta-image.jpg?revision=1610608825',
        link: '/blog/icerik/prolimit-urunleri-sailawayturkey-ile-turkiyede'
      },
      // ... remaining entries
      {
        id: 5,
        title: 'Bic Sport',
        excerpt: 'BICSPORT Sup, Rüzgar Sörfü, Yelken ve Kano konusunda dünyanın önde gelen Markasıdır.',
        date: '22/12/2020 11:34',
        image: 'https://ideacdn.net/idea/hh/66/myassets/blogs/bic-sup-sport-sailaway-blog-supboard-kureksorfu-surf.jpg?revision=1608626152',
        link: '/blog/icerik/bic-sport'
      },
      {
        id: 6,
        title: 'PROLİMİT ÜRÜNLERİ SAİLAWAYTURKEY İLE TÜRKİYE`DE',
        excerpt: 'Pro Limit firmasının kaliteli ürünlerini 2018 itibariyle sizlere sunabilmekten mutluluk duyarız.',
        date: '22/12/2020 13:58',
        image: 'https://ideacdn.net/idea/hh/66/myassets/blogs/prolimit-urunleri-sailawayturkey-ile-turkiyede.jpg?revision=1608634704',
        link: '/blog/icerik/prolimit-urunleri-sailawayturkey-ile-turkiyede'
      },
      {
        id: 7,
        title: 'Hobie Mirage Compass',
        excerpt: 'Hobie ailesinin en yeni üyesi Mirage Compass. Ayrıca pedallı kanolar arasında en uygun fiyatlı olan kano.',
        date: '22/12/2020 13:57',
        image: 'https://ideacdn.net/idea/hh/66/myassets/blogs/hobie-mirage-compass-sailaway-balikci-pedalli-kano.jpg?revision=1608634626',
        link: '/blog/icerik/hobie-mirage-compass'
      },
      {
        id: 8,
        title: 'Hobie Katamaran',
        excerpt: 'Hobie çift gövdeli yelkencilikte çığır açmıştır.',
        date: ' 22/12/2020  13:55',
        image: 'https://ideacdn.net/idea/hh/66/myassets/blogs/hobie-katamaran-sailaway-yelkenli-pearl.jpg?revision=1608634536',
        link: '/blog/link-for-blog-8'
      },
      {
        id: 9,
        title: 'Hobie Catsy ile çocukları sevindirin',
        excerpt: 'Kolayca monte edilebilir Hobie Catsy, küçük yelkencilerin katamaran yelken sporunun tadını çıkarabilmeleri için özel olarak tasarlanmıştır.',
        date: ' 22/12/2020  13:53',
        image: 'https://ideacdn.net/idea/hh/66/myassets/blogs/hobie-catsy-yelkenli-sailaway-tr-kids.jpg?revision=1608634428',
        link: '/blog/link-for-blog-9'
      },
      {
        id: 10,
        title: 'Bic Sport',
        excerpt: 'BICSPORT Sup, Rüzgar Sörfü, Yelken ve Kano konusunda dünyanın önde gelen Markasıdır.',
        date: '22/12/2020 11:34',
        image: 'https://ideacdn.net/idea/hh/66/myassets/blogs/bic-sup-sport-sailaway-blog-supboard-kureksorfu-surf.jpg?revision=1608626152',
        link: '/blog/icerik/bic-sport'
      }
      // Add more blog objects here
    ]);

    const filteredBlogs = computed(() => {
      if (searchQuery.value) {
        return blogs.value.filter(blog => blog.title.toLowerCase().includes(searchQuery.value.toLowerCase()));
      }
      return blogs.value;
    });

    const searchBlogs = () => {
      // Implement search functionality if needed
    };

    return { searchQuery, filteredBlogs, searchBlogs };
  },
});
</script>

<style scoped>

.blog-list-item .q-img {
  height: 226px;
  width: 340px; /* Set a fixed height for all images */
  object-fit: cover; /* This will ensure the images cover the area without stretching */
  margin-bottom: 30px;
  margin-left: 160px;
  font-size: 22px;
}
.blog-content{
  margin-right: 100px;
  font-size: 14px;
}
.blog-date {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 60px;
}

</style>
