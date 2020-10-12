<template>
   <div class="character">
       Имя: <b>{{ name }}</b><br/>
       Раса: <b>{{ race }}</b><br/>
       Локация: <b>{{ location }}</b><br/>
       Пол: {{ sex }} <br/>
       Описание: {{ desc }}
       
       <div class="character__controls">
           <div class="character__controls_button character__controls-edit" @click="editCharacter">
                <svg height="448pt" viewBox="0 0 448 448" width="448pt" xmlns="http://www.w3.org/2000/svg">
                    <path d="m270.222656 177.777344-16.964844-16.96875-101.824218 101.816406 16.964844 16.976562 16.96875 16.964844 101.824218-101.824218zm0 0"/><path d="m224 0c-123.710938 0-224 100.289062-224 224s100.289062 224 224 224 224-100.289062 224-224c-.140625-123.652344-100.347656-223.859375-224-224zm96 328h-192c-2.136719-.011719-4.175781-.875-5.671875-2.398438-.625-.65625-1.132813-1.414062-1.503906-2.242187-.097657-.191406-.175781-.375-.257813-.574219-.339844-.851562-.53125-1.75-.566406-2.664062v-.121094c0-.105469.054688-.183594.054688-.289062 0-.457032.035156-.914063.113281-1.367188l12.121093-57.375c.089844-.3125.199219-.621094.328126-.921875.078124-.222656.144531-.4375.238281-.664063.375-.855468.894531-1.640624 1.535156-2.320312l.074219-.09375 113.136718-113.136719 11.308594-11.3125c15.640625-15.503906 40.875-15.449219 56.445313.125 15.574219 15.570313 15.628906 40.804688.125 56.445313l-11.3125 11.308594-111.601563 111.601562h127.433594c4.417969 0 8 3.582031 8 8s-3.582031 8-8 8zm0 0"/><path d="m304.167969 177.777344c9.375-9.375 9.375-24.574219 0-33.945313-9.503907-9.054687-24.441407-9.054687-33.945313 0l-5.65625 5.664063 33.9375 33.9375zm0 0"/><path d="m144.894531 278.71875-6.527343 30.914062 30.914062-6.527343-12.191406-12.195313zm0 0"/>
                </svg>
           </div>

           <div class="character__controls_button character__controls-remove" @click="removeCharacter">
                <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 26 26"
                    style="enable-background: new 0 0 26 26"
                    xml:space="preserve"
                >
                    <g>
                        <path
                            d="M21.125,0H4.875C2.182,0,0,2.182,0,4.875v16.25C0,23.818,2.182,26,4.875,26h16.25
                                                    C23.818,26,26,23.818,26,21.125V4.875C26,2.182,23.818,0,21.125,0z M18.78,17.394l-1.388,1.387c-0.254,0.255-0.67,0.255-0.924,0
                                                    L13,15.313L9.533,18.78c-0.255,0.255-0.67,0.255-0.925-0.002L7.22,17.394c-0.253-0.256-0.253-0.669,0-0.926l3.468-3.467
                                                    L7.221,9.534c-0.254-0.256-0.254-0.672,0-0.925l1.388-1.388c0.255-0.257,0.671-0.257,0.925,0L13,10.689l3.468-3.468
                                                    c0.255-0.257,0.671-0.257,0.924,0l1.388,1.386c0.254,0.255,0.254,0.671,0.001,0.927l-3.468,3.467l3.468,3.467
                                                    C19.033,16.725,19.033,17.138,18.78,17.394z"
                        />
                    </g>
                </svg>
           </div>
       </div>
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
            removeCharacter() {
                this.$emit("removeCharacter", this.id);
            },
            
            editCharacter() {
                this.$emit("editCharacter", this.id);
            }
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

        position: relative;
    }


    .character__controls {
        position: absolute;
        display: flex;

        top: 5px;
        right: 5px;
    }

    .character__controls_button {
        width: 20px;
        height: 20px;

        margin-left: 10px;

        cursor: pointer;
    }

    .character__controls_button svg {
        max-width: 100%;
        max-height: 100%;
    }

    .character__controls_button path {
        fill: black;
        transition: 0.5s;
    }


    .character__controls-remove:hover path {
        transition: 0.5s;
        fill: red;
    }

    .character__controls-edit:hover path {
        transition: 0.5s;
        fill: cornflowerblue;
    }

</style>
