import { createApp } from 'vue';
import VueParticles from 'vue-particles';
import App from './App.vue';
import router from './router';
import { YoutubeAPI } from './plugins/youtube';
import './assets/styles.styl';

createApp(App)
  .use(router)
  .use(VueParticles)
  .provide(YoutubeAPI.name, YoutubeAPI)
  .mount('#app');
