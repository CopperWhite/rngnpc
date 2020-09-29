<template>
    <div id="app">
        <div class="container">
            <div class="campaigns">
                <div class="campaigns__title">Мои Кампании:</div>
            
                <CampaignPlate v-for="(campaign, index) in campaigns"
                    :key="index"
                    :campaignId="campaign.id" 
                    :name="campaign.name"
                    :isActive="activeCampaignId === campaign.id ? true : false"
                    
                    @setActiveCampaign="setActiveCampaign" 
                    
                    ref="campaign{{key}}"/>

                <div class="campaignAdd"></div>

                <CampaignAdd @addNewCampaign="addNewCampaign"/>
            </div>

            <div class="gameContent">
                <div class="places">
                    <PlaceAdd v-if="activeCampaignId != null"
                        @addNewLocation="addNewLocation"

                        />

                    <PlacePlate v-for="(place, index) in places"
                        :key="index"
                        :placeId="place.id" 
                        :name="place.name"
                        :desc="place.desc"

                        :isActive="activePlaceId === place.id ? true : false"
                    
                        @setActivePlace="setActivePlace" 
                        
                        ref="place{{key}}"/>
                </div>

                <div class="characters">
                    <CharacterPlate v-for="(character, index) in charactersSort"
                        :key="index"
                        :campaignId="activeCampaignId"
                        :id="character.id"
                        :raceId="character.race"
                        :sex="character.sex"
                        :fname="character.fname"
                        :lname="character.lname"
                        :desc="character.desc"
                        :location="getCharacterLocationName(character.location)"
                        
                        ref="character{{key}}"/>
                </div>
            </div>


        </div>
    </div>
</template>

<script>

    export default {
        name: 'App',

        data() {
            return {
                campaigns: this.$store.getters.getCampaigns,
                activeCampaignId: null,
                activeCampaign: null,
                places: null,
                activePlaceId: null,
                characters: null,
                charactersSort: null,
            }
        },

        computed: {
            
        },

        methods: {
            setActiveCampaign(id) {
                this.activeCampaignId = id;
                this.activeCampaign = this.campaigns.filter(item => item.id == this.activeCampaignId)[0];

                this.findPlacesInCampaign(this.activeCampaign);
                
                this.setActivePlace(null);

                this.selectAllCharacters();

                console.log(this.activeCampaignId);
            },

            findPlacesInCampaign(campaign) {
                this.places = campaign.locations;
            },

            setActivePlace(id) {
                this.activePlaceId = id;
            },

            selectAllCharacters() {
                this.characters = this.activeCampaign.npcs;
                this.charactersSort = this.characters;
            },

            getCharacterLocationName(locationId) {
                return this.$store.getters.getLocationName(this.activeCampaignId, locationId);
            },

            addNewCampaign(campaignName) {
                this.$store.commit('addCampaign', campaignName);
            },

            addNewLocation(payload) {
                this.$store.commit('addLocation', { campaignId: this.activeCampaignId, name: payload.name, desc: payload.desc });
            }
        }
    };
</script>

<style>
    body {
        margin: 0px;
    }
</style>>

<style scoped>
    #app {
        background-repeat: repeat-y;
        background-size: cover;
        background-image: url(./assets/img/bg.jpg);

        min-width: 100vw;
        min-height: 100vh;

        display: flex;
        justify-content: center;

        box-sizing: border-box;
        padding-top: 40px;
    }    

    .container {
        width: 100%;
        max-width: 1200px;

        background-color: wheat;

        display: flex;
    }

    .campaigns {
        min-width: 202px;

        box-sizing: border-box;
        border-right: 2px solid coral;

        min-height: 100%;

    }

    .campaigns__title {
        font-size: 20px;
        font-weight: 800;
        
        box-sizing: border-box;
        padding-left: 10px;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .gameContent {
        box-sizing: border-box;
        padding-top: 20px;
        padding-bottom: 20px;

        width: 100%;
    }

    .places {
        display: flex;
        flex-wrap: wrap;

        width: 100%;

        box-sizing: border-box;
        padding-right: 20px;
        padding-left: 20px;
        border-bottom: 2px solid coral;

        min-height: 44px;
    }

    .characters {
        width: 100%;

        box-sizing: border-box;
        padding-right: 20px;
        padding-left: 20px;
    }

</style>
