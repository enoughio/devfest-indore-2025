import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/styles'; 

// Material Design Icons
import '@mdi/font/css/materialdesignicons.css'

// Vuetify imports
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// reate Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})

// Mount the app
createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
