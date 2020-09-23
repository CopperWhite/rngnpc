<template>
   <div class="place" @click="setActive" :class="{ active: isActive }">
       {{ name }}
   </div>
</template>

<script>
    export default {
        name: 'PlacePlate',
        props: {
            name: String,
            placeId: Number,
            desc: String,
            isActive: Boolean,
        },
        data() {
            return {
                
            }
        },
        methods: {
            setActive() {
                this.$emit('setActivePlace', this.placeId);
                
            }
        }
    };
</script>

<style scoped>

    .place {
        border-radius: 10px;
        border: 2px solid black;
        font-weight: 800;
        color: black;

        box-sizing: border-box;
        padding: 5px;

        margin-right: 10px;
        margin-bottom: 10px;

        cursor: pointer;
    }

    .place.active {
        color: coral;
        border-color: coral;

        pointer-events: none;
    }

</style>
