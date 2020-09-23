import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        campaigns: [
            {
                id: 0,
                name: 'Кампания Default',
                npcs: [
                    {
                        id: 0,
                        race: 0,
                        sex: 'Мужчина',
                        fname: 'Джон',
                        lname: 'Доу',
                        desc: 'Самый обычный человек. Скорее всего, трактирщик. Характер стойкий, нордический. Не женат.',
                        location: 1,
                    },
                    {
                        id: 1,
                        race: 1,
                        sex: 'Мужчина',
                        fname: 'Ауст',
                        lname: 'Найло (Ночной бриз)',
                        desc: 'Самый обычный эльф. Скорее всего, колдун. Характер стойкий, нордический. Не женат.',
                        location: 0,
                    },
                ],
                locations: [
                    {
                        id: 0,
                        name: 'Глубоководье',
                        desc: 'город-государство в вымышленной вселенной Forgotten Realms, расположенный на Побережье Мечей континента Фейрун. Вотердип, прозванный также «Сияющий Город» — один из самых крупных и влиятельных городов всех Забытых Королевств. Город анонимно управляется Лордами в Масках.',
                    },
                    {
                        id: 1,
                        name: 'Шарн',
                        desc: 'Самый густонаселенный город во всем Кхорвайре, и, возможно, во всем Эберроне. Город буквально возвышается на вершине скалы выше устья реки Кинжал в южной Бренландии. Шарн известен как Город Башен, но также имеет и много других имен, в том числе — Город Ножей, Город Потерянных Душ, Город Тысячи Глаз, Ворота Ксен’дрика, и Ворота в Погибель.',
                    }
                ]
                
            },
            {
                id: 1,
                name: 'Кампания Default 1',
                npcs: [
                    {
                        id: 0,
                        race: 0,
                        sex: 'Мужчина',
                        fname: 'Джон',
                        lname: 'Доу',
                        desc: 'Самый обычный человек. Скорее всего, трактирщик. Характер стойкий, нордический. Не женат.',
                        location: 0,
                    },
                ],
                locations: [
                    {
                        id: 0,
                        name: 'Глубоководье',
                        desc: 'город-государство в вымышленной вселенной Forgotten Realms, расположенный на Побережье Мечей континента Фейрун. Вотердип, прозванный также «Сияющий Город» — один из самых крупных и влиятельных городов всех Забытых Королевств. Город анонимно управляется Лордами в Масках.',
                    },
                ]
                
            }
        ],
        
        races: [
            {
                id: 0,
                name: 'Человек',
                maleFnames: ['Айвор', 'Бор', 'Глэр', 'Григор', 'Иган', 'Козеф', 'Миваль', 'Орел', 'Павел', 'Сергор', 'Фодель', 'Блас', 'Бран', 'Гет', 'Ландер', 'Лют', 'Малсер', 'Стор', 'Таман', 'Урт', 'Фрат', 'Эндер', 'Асеир', 'Бардеид', 'Зашеир', 'Кхемед', 'Мехмен', 'Судейман', 'Хасеид', 'Боривик', 'Владислак', 'Джандар', 'Канитар', 'Мадислак', 'Ральмевик', 'Фаургар', 'Шаумар', 'Антон', 'Диеро', 'Маркон', 'Пьерон', 'Римардо', 'Ромеро', 'Салазар', 'Умберо', 'Горстаг', 'Грим', 'Дарвин', 'Дорн', 'Маларк', 'Морн', 'Рэндал', 'Стедд', 'Хельм', 'Эвендур'],
                femaleFnames: ['Алетра', 'Зора', 'Кара', 'Катернин', 'Мара', 'Натали', 'Ольма', 'Тана', 'Амафрея', 'Бетха', 'Вестра', 'Кетра', 'Мара', 'Ольга', 'Силифрей', 'Цефрея', 'Атала', 'Джасмаль', 'Зашеида', 'Мейлиль', 'Сейдиль', 'Сейпора', 'Хама', 'Яшеира', 'Имзель', 'Иммит', 'Наварра', 'Таммит', 'Файварра', 'Хульмарра', 'Шеварра', 'Юльдра', 'Балама', 'Вонда', 'Джалана', 'Дона', 'Куара', 'Луиза', 'Марта', 'Селизе', 'Фаила', 'Арвин', 'Джессаиль', 'Керри', 'Лурин', 'Мири', 'Рован', 'Тесселе', 'Шандри', 'Эсвель'],
                Lnames: ['Берск', 'Дотск', 'Куленов', 'Марск', 'Немецк', 'Стараг', 'Чернин', 'Шемов', 'Брайтвуд', 'Виндривер', 'Лакмэн', 'Хелдер', 'Хорнрейвен', 'Штормвинд', 'Баша', 'Джассан', 'Думеин', 'Кхалид', 'Мостана', 'Пашар', 'Рейн', 'Дайрнина', 'Илтазяра', 'Мурнитара', 'Стаянога', 'Улмокина', 'Чергоба', 'Агосто', 'Асторио', 'Домине', 'Калабра', 'Маривальди', 'Писакар', 'Рамондо', 'Фалоне', 'Бакмэн', 'Грэйкасл', 'Дандрэгон', 'Толстаг', 'Эвенвуд', 'Эмблкроун'],
                desc: 'В большинстве миров люди — это самая молодая из распространённых рас. Они поздно вышли на мировую сцену и живут намного меньше, чем дварфы, эльфы и драконы. Возможно, именно краткость их жизней заставляет их стремиться достигнуть как можно большего в отведённый им срок. А быть может, они хотят что-то доказать старшим расам, и поэтому создают могучие империи, основанные на завоеваниях и торговле. Что бы ни двигало ими, люди всегда были инноваторами и пионерами во всех мирах.'
            },
            {
                id: 1,
                name: 'Эльф',
                maleFnames: ['Адран', 'Арамиль', 'Араннис', 'Ауст', 'Аэлар', 'Бейро', 'Берриан', 'Варис', 'Галинндан', 'Ивеллиос', 'Иммераль', 'Каррик', 'Куарион', 'Лаусиан', 'Миндартис', 'Паэлиас', 'Перен', 'Риардон', 'Ролен', 'Совелисс', 'Тамиорн', 'Таривол', 'Терен', 'Хадарай', 'Химо', 'Хэйян', 'Эниалис', 'Эрдан', 'Эреван'],
                femaleFnames: ['Адрие', 'Альтеа', 'Анастрианна', 'Андрасте', 'Антинуа', 'Бетринна', 'Бирель', 'Вадания', 'Валанте', 'Джеленетт', 'Друсилиа', 'Йелениа', 'Каэлинн', 'Квеленна', 'Квиласи', 'Кейлет', 'Ксанафия', 'Лешанна', 'Лиа', 'Миали', 'Мэриэль', 'Найвара', 'Сариэль', 'Силакви', 'Теирастра', 'Тиа', 'Фелосиаль', 'Шава', 'Шанайра', 'Энна'],
                Lnames: ['Амакиир (Сверкающий Цветок)', 'Амастасия (Звёздный Цветок)', 'Галанодель (Лунный Шёпот)', 'Ильфелкиир (Сверкающий Бутон)', 'Ксилосент (Золотой Лепесток)', 'Лиадон (Серебряный Лист)', 'Найло (Ночной Бриз)', 'Сианодель (Лунный Ручей)', 'Холимион (Алмазная Роса)'],
                desc: 'Эльфы это волшебный народ, обладающий неземным изяществом, живущий в мире, но не являющийся его частью. Они живут в местах, наполненных воздушной красотой, в глубинах древних лесов или в серебряных жилищах, увенчанных сверкающими шпилями и переливающихся волшебным светом. Там лёгкие дуновения ветра разносят обрывки тихих мелодий и нежные ароматы. Эльфы любят природу и магию, музыку и поэзию, и всё прекрасное, что есть в мире.'
            }
        ]
    },
    actions: {

    },
    mutations: {

    },
    getters: {
        getState(state) {
            return state;
        },
        getCampaigns(state) {
            return state.campaigns;
        },
        getRaceName: state => raceId => {
            return state.races.filter(item => item.id == raceId)[0].name;
        },
        getLocationName: state => (campaignId, locationId) => {
            let locations = state.campaigns.filter(item => item.id == campaignId)[0].locations;
            return locations.filter(loc => loc.id == locationId)[0].name;
        }
        
    },
    modules: {
        
    }
})