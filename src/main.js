import Vue from 'vue'
import App from './App.vue'
import { Carousel3d, Slide } from 'vue-carousel-3d'

Vue.config.productionTip = false
Vue.component('carousel-3d',Carousel3d);
Vue.component('slide', Slide);

new Vue({
  render: h => h(App),

  mounted(){
    // Bulma Carousel CDN
    let bulmaCarousel = document.createElement('script')
    bulmaCarousel.setAttribute('src', 'https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.24/dist/js/bulma-carousel.min.js')
    document.head.appendChild(bulmaCarousel)

    // BULMA CDN
    let bulmaCDN = document.createElement('link')
    bulmaCDN.setAttribute('rel', 'stylesheet')
    bulmaCDN.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css')
    document.head.appendChild(bulmaCDN)
  }
}).$mount('#app')