<template>
    <div class="campaignAdd">
            <div v-if="inputsShown == false" class="campaignAdd__button">
                <button @click="showCampaignInput" class="btn-ok">Создать кампанию</button>
            </div>

            <div v-if="inputsShown == true" class="campaignAdd__form">
                <input v-model="campaignName" type="text" class="campaignAdd__form_input">
                <button @click="addNewCampaign" class="campaignAdd__form_input-commit btn-ok">Создать кампанию</button>
                <button @click="cancelCampaignCreation" class="campaignAdd__form_input-cancel btn-cancel">Отмена</button>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'CampaignAdd',
        props: {
            
        },
        data() {
            return {
                inputsShown: false,
                campaignName: '',
            }
        },
        methods: {
            showCampaignInput() {
                this.inputsShown = true;
            },

            cancelCampaignCreation() {
                this.campaignName = '',
                this.inputsShown = false;
            },

            addNewCampaign() {
                this.$emit('addNewCampaign', this.campaignName);

                this.cancelCampaignCreation();
            }
        }
    };
</script>

<style scoped>

    .campaignAdd {
        box-sizing: border-box;

        padding-left: 10px;
        padding-right: 10px;
    }

    .campaignAdd__button button {
        width: 100%;
    }

    .campaignAdd__form_input {
        width: 100%;
        display: block;
        box-sizing: border-box;
        min-height: 30px;

        margin-bottom: 10px;
    }

    .campaignAdd__form_input-commit {
        width: 100%;

        margin-bottom: 10px;
    }

    .campaignAdd__form_input-cancel {
        width: 100%;

        margin-bottom: 10px;
    }

</style>
