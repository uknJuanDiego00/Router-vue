import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from "./routes/router.js"
import { Quasar, Notify } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'

const app = createApp(App)

app.use(router)

app.use(Quasar, {
    plugins: {
        Notify
    },
})

app.mount('#app')