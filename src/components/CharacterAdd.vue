<template>
   <div class="characterAdd">
       <button v-if="isOpened == false" class="characterAdd__button-open btn-ok" @click="showCharacterInput">Создать персонажа</button>

       <div v-if="isOpened == true" class="characterAdd__form">
            <div class="characterAdd__form_field">
                <div class="characterAdd__form_title">Локация:</div>

                <select v-model="charLocation">
                    <option v-for="place in places" :value="place.id" :key="place.id">{{place.name}}</option>
                </select>
            </div>

            <div class="characterAdd__form_randomButton">
                Заполнить случайно: 

                <DiceButton @click.native="fillRandom" />
            </div>
            
            <div class="characterAdd__form_field">
                <div class="characterAdd__form_title">Раса:</div>

                <input v-model="charRace" type="text">
            </div>

            <div class="characterAdd__form_field">
                <div class="characterAdd__form_title">Пол:</div>

                <input v-model="charSex" type="text">


            </div>
            
            <div class="characterAdd__form_field">
                <div class="characterAdd__form_title">Имя:</div>

                <input v-model="charName" type="text">
            </div>
            

            <div class="characterAdd__form_field">
                <div class="characterAdd__form_title">Описание:</div>

                <textarea v-model="charDesc" type="text" placeholder=""></textarea>
            </div>

            <div class="characterAdd__form_buttons">
                <button class="characterAdd__form_buttons_item btn-cancel" @click="cancelCharacterCreation">Отмена</button>
                <button class="characterAdd__form_buttons_item btn-ok" @click="createCharacter">Сохранить</button>
            </div>
            
       </div>
   </div>
</template>

<script>
    export default {
        name: 'CharacterAdd',
        props: {
            places: Array,
            races: Array
        },
        data() {
            return {
               isOpened: false,
               charName: '',
               charLocation: null,
               charSex: null,
               charRace: '',
               charDesc: '',
               chosenRace: null,
            }
        },
        methods: {
            showCharacterInput() {
                this.isOpened = true;
            },

            cancelCharacterCreation() {
                this.charName = "";
                this.charLocation = null;
                this.charSex = "";
                this.charRace = "";
                this.charDesc = "";
                this.chosenRace = null;

                this.isOpened = false;
            },

            createCharacter() {
                let payload = {
                    location: this.charLocation,
                    name: this.charName,
                    race: this.charRace,
                    sex: this.charSex,
                    desc: this.charDesc,
                };
                
                this.$emit('addNewCharacter', payload);

                this.cancelCharacterCreation();
            },

            fillRandom() {

                let races = this.races;

                this.chosenRace = races[Math.floor(Math.random() * races.length)];

                let sex = Math.floor(Math.random() * 2);

                let fname;

                if (sex == 0) {
                    fname = this.chosenRace.maleFnames[Math.floor(Math.random() * this.chosenRace.maleFnames.length)];
                } else if (sex == 1) {
                    fname = this.chosenRace.femaleFnames[Math.floor(Math.random() * this.chosenRace.femaleFnames.length)];
                }

                let lname = this.chosenRace.lnames[Math.floor(Math.random() * this.chosenRace.lnames.length)];

                this.charRace = this.chosenRace.name;

                if (sex == 0) {
                    this.charSex = 'Мужчина';
                } else if (sex == 1) {
                    this.charSex = 'Женщина';
                }

                this.charName = fname + ' ' + lname;
            }

        }
    };
</script>

<style scoped>

    .characterAdd {
        margin-top: 20px;
    }

    .characterAdd__form_randomButton {
        display: flex;
        align-items: center;

        margin-top: 10px;
    }

    .characterAdd__button-open {
        width: 100%;
    }

    .characterAdd__form {
        border: 2px solid turquoise;
        box-sizing: border-box;
        padding: 10px;
    }

    .characterAdd__form_field {
        display: flex;
        align-items: center;

        margin-top: 10px;
    }

    .characterAdd__form_title {
        min-width: 100px;
    }

    .characterAdd__form select, .characterAdd__form input {
        box-sizing: border-box;

        width: 350px;
        height: 32px;
    }

    .characterAdd__form textarea {
        box-sizing: border-box;
        width: 350px;
        height: 150px;
    }

    .characterAdd__form_buttons {
        display: flex;
        justify-content: flex-end;
    }

    .characterAdd__form_buttons_item {
        margin-left: 10px;
        margin-top: 10px;

        min-width: 180px;
        min-height: 44px;
    }

</style>
