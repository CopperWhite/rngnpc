import Vue from 'vue'
import App from './App.vue'
import store from './store/index'

Vue.config.productionTip = false

//Components

import CampaignPlate from './components/CampaignPlate'
Vue.component('CampaignPlate', CampaignPlate);

import CampaignAdd from './components/CampaignAdd'
Vue.component('CampaignAdd', CampaignAdd);

import PlacePlate from './components/PlacePlate'
Vue.component('PlacePlate', PlacePlate);

import PlaceAdd from './components/PlaceAdd'
Vue.component('PlaceAdd', PlaceAdd);

import CharacterPlate from './components/CharacterPlate'
Vue.component('CharacterPlate', CharacterPlate);

import CharacterAdd from './components/CharacterAdd'
Vue.component('CharacterAdd', CharacterAdd);

import DiceButton from './components/DiceButton'
Vue.component('DiceButton', DiceButton);

//End Components

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
