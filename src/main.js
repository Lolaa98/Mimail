import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import VueLazyload from 'vue-Lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

Vue.prototype.axios = axios

Vue.config.productionTip = false

export default {
    components: { Swiper, SwiperSlide }
}

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')