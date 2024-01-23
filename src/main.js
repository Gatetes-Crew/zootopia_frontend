import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import HomeView from './views/HomeView.vue'; // Importa tu vista HomeView
import AnimalCounter from './components/AnimalCounter.vue'; // Importa tu componente AnimalCounter



const app = createApp(App)

app.use(createPinia())
app.use(router)

// Registra los componentes para que estén disponibles en toda la aplicación
app.component('home-view', HomeView);
app.component('animal-counter', AnimalCounter);

app.mount('#app')
