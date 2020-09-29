<template>
   <div class="locationAdd">
       <input type="text" v-model="locationName" class="locationAdd__input" placeholder="Имя новой локации">
       <button @click="addNewLocation" class="locationAdd__button">Создать</button>
       <textarea class="locationAdd__textarea" :class="{ opened: locationName != '' }" cols="30" rows="10" v-model="locationDesc" placeholder="Описание локации"></textarea>
   </div>
</template>

<script>
    export default {
        name: 'PlaceAdd',
        props: {
            
        },
        data() {
            return {
                locationName: '',
                locationDesc: '',
            }
        },
        methods: {

            addNewLocation() {
                this.$emit('addNewLocation', { name: this.locationName, desc: this.locationDesc });

                this.locationName = '';
            }
        }
    };
</script>

<style scoped>

    .locationAdd {
        display: flex;
        flex-direction: row;

        margin-right: 20px;

        position: relative;
    }

    .locationAdd__input {
        display: block;
        box-sizing: border-box;
        min-height: 30px;

        margin-bottom: 10px;
    } 

    .locationAdd__button {
        height: 32px;
        background-color: turquoise;
        border-color: coral;
    }

    .locationAdd__textarea {
        position: absolute;
        left: 0;
        right: 0;
        top: 32px;
        width: 100%;
        max-width: 238px;

        display: none;
    }

    .locationAdd__textarea.opened {
        display: block;
    }
</style>
