<template>
   <div class="campaign" @click="setActive" :class="{ active: isActive }">
       {{name}}
   </div>
</template>

<script>
    export default {
        name: 'CampaignPlate',
        props: {
            name: String,
            campaignId: Number,
            isActive: Boolean,
        },
        data() {
            return {
                
            }
        },
        methods: {
            setActive() {
                this.$emit('setActiveCampaign', this.campaignId);
                
            }
        }
    };
</script>

<style scoped>
    .campaign {
        box-sizing: border-box;
        padding: 10px;

        margin-bottom: 5px;

        cursor: pointer;
    }

    .campaign.active {
        background-color: turquoise;
    }
</style>
