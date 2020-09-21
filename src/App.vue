<template>
    <div id="app">
        <div class="container">
            <div class="campaigns">
                <div class="campaigns__title">Мои Кампании:</div>
            
                <Campaign v-for="campaign in campaigns"
                    :key="campaign.id"
                    :campaignId="campaign.id" 
                    :name="campaign.name"
                    :isActive="activeCampaign === campaign.id ? true : false"
                    
                    @setActiveCampaign="setActiveCampaign" 
                    
                    ref="campaign{{key}}"/>
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
                activeCampaign: null,
            }
        },
        methods: {
            setActiveCampaign(id) {
                this.activeCampaign = id;
                console.log(id)
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
    }

    .campaigns {
        max-width: 202px;

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

</style>
