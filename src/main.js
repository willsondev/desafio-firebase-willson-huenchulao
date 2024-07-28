import { createApp } from 'vue';
import App from './App.vue';
import { initializeApp, getApps } from 'firebase/app';
import firebaseConfig from './firebaseconfig';


if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const app = createApp(App);
app.mount('#app');
