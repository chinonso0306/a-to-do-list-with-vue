import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

/* import FontAwesome */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

library.add(faPen)
library.add(faTrash)

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

