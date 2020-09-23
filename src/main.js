import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false

//Components

import CampaignPlate from './components/CampaignPlate'
Vue.component('CampaignPlate', CampaignPlate);

import PlacePlate from './components/PlacePlate'
Vue.component('PlacePlate', PlacePlate);

import CharacterPlate from './components/CharacterPlate'
Vue.component('CharacterPlate', CharacterPlate);

//End Components

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
