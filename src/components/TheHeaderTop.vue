<template>
  <div>
    <!-- Header Message at the Top -->
    <div class="header-message-container">
      <h6 class="header-message">
        Sipariş İçin Bize Ulaşın:
        <a href="tel:05444638251">0544 463 8251</a>
        <span>|</span>
        <a href="mailto:info@sailaway.com.tr">info@sailaway.com.tr</a>
      </h6>
    </div>

    <!-- Toolbar with Menu Items -->
    <q-toolbar class="header-top">
      <div class="container">
        <!-- Menu Items Row -->
        <div class="row justify-between">
          <div class="col">
            <div class="menu-items row q-gutter-x-sm">
              <q-item v-for="item in menuItems" :key="item.name" class="menu-item">
                <q-item-section>
                  <q-item-label>
                    <a :href="item.link" :target="item.target">{{ item.name }}</a>
                  </q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>
        </div>
      </div>
    </q-toolbar>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
  data() {
    return {
      menuItems: [
        { name: 'TAHE MARINE', link: '/TheHeader', target: '_self' },
        { name: 'HOBIE', link: 'http://www.sailaway.com.tr/marka/hobie', target: '_self' },
        { name: 'BICSPORT', link: 'http://www.sailaway.com.tr/marka/bicsport', target: '_self' },
        { name: 'STX', link: 'http://www.sailaway.com.tr/marka/bicsport', target: '_self' },
        { name: 'SIC', link: 'http://www.sailaway.com.tr/marka/bicsport', target: '_self' },
        { name: 'TIKI', link: 'http://www.sailaway.com.tr/marka/bicsport', target: '_self' },
        { name: 'PROLIMIT', link: 'http://www.sailaway.com.tr/marka/bicsport', target: '_self' },
        { name: 'TOPCAT', link: 'http://www.sailaway.com.tr/marka/bicsport', target: '_self' },
        { name: 'RONIX', link: 'http://www.sailaway.com.tr/marka/bicsport', target: '_self' },
        { name: 'LAMPUGA', link: 'http://www.sailaway.com.tr/marka/bicsport', target: '_self' },
        { name: 'SCUBA JET', link: 'http://www.sailaway.com.tr/marka/bicsport', target: '_self' },
        { name: 'AUDI', link: 'http://www.sailaway.com.tr/marka/bicsport', target: '_self' },
        { name: 'SEABOB', link: 'http://www.sailaway.com.tr/marka/seabob', target: '_self' }
      ],
    };
  },
});
</script>

<style scoped>
.header-message-container {
  background-color: #F1F1F1;
  padding-left: 217px;
  text-align: start;
}

.header-message {
  margin: 0;
  font-size: smaller;
  font-weight: 550;
  color: #8c8c8c;
}

.header-message a {
  color: #8c8c8c;
  text-decoration: none;
}

.header-top {
  padding-left: 200px;
  background-color: #F1F1F1;
}

.menu-items {
  font-size: smaller;
}

.menu-item {
  margin-right: 8px;
}

.menu-item:last-child {
  margin-right: 0;
}

.menu-item a {
  text-decoration: none;
  color: inherit;
}

.menu-item a:hover {
  color: blue;
}
</style>
