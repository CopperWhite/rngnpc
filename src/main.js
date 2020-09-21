import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false

//Components

import Campaign from './components/Campaign'
Vue.component('Campaign', Campaign);



//End Components

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
