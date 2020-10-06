<template>
   <div class="character">
       Имя: {{ name }}<br/>
       Раса: {{ race }} <br/>
       Локация: {{ location }} <br/>
       Пол: {{ sex }} <br/>
       Описание: {{ desc }}
       
   </div>
</template>

<script>
    export default {
        name: 'CharacterPlate',
        props: {
            campaignId: Number,
            id: Number,
            race: String,
            sex: String,
            name: String,
            desc: String,
            location: String
        },
        data() {
            return {
                
            }
        },
        methods: {
            
        }
    };
</script>

<style scoped>

    .character {
        width: 100%;

        border: 2px solid turquoise;

        box-sizing: border-box;
        padding: 5px;
        margin-top: 10px;
    }

</style>
