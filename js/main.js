let eventBus = new Vue()

Vue.component('cols', { 
    template:`
    <div id="cols">
        <div class="col-wrapper">
            <newcard></newcard>
                <div class="col">
                    <ul>
                        <li class="cards" v-for="card in column1" ><p>{{ card.title }}</p>
                            <div>
                                <ul>
                                    <li class="tasks" v-for="t in card.subtasks" v-if="t.title != null">
                                        <input class="checkbox" type="checkbox">
                                        <p>{{t.title}}</p>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col">{{ column2 }}</div>
                <div class="col">{{ column3 }}</div>
        </div>
    </div>

`,
    data() {
        return {
            column1: [],
            column2: [],
            column3: [],
        }
    },
})

Vue.component('column', {
    template:`
    <div class="col">
        <h2>Col1</h2>
    </div>
`,
    data() {
        return {
            column
        }
    },
    methods: {
    },
    mounted() {
        eventBus.$on('card-submitted', card => {
            this.column1.push(card)
        })
    },
    computed: {

    },
    props: {
        card: {
            title: {
                type: Text,
                required: true
            },
            subtasks: {
                type: Array,
                required: true,
            }
        },

    }

})

Vue.component('cards', {
    template: `
    <div>
        
    </div>
    `,

})

Vue.component('newcard', {
    template: `
    <form class="addform" @submit.prevent="onSubmit">
        <p>
            <label for="title">Title</label>
            <input class="title" v-model="title" type="text" placeholder="title">
        </p>
        <div>
            <input class="checkbox" type="checkbox">
            <input class="subtask" v-model="subtasks" type="text" placeholder="subtask1">
        </div>
        <div>
            <input class="checkbox" type="checkbox">
            <input class="subtask" v-model="subtasks" type="text" placeholder="subtask2">
        </div>
        <div>
            <input class="checkbox" type="checkbox">
            <input class="subtask" v-model="subtasks" type="text" placeholder="subtask3">
        </div>
        <div>
            <input class="checkbox" type="checkbox">
            <input class="subtask" v-model="subtasks" type="text" placeholder="subtask4">
        </div>
        <div>
            <input class="checkbox" type="checkbox">
            <input class="subtask" v-model="subtasks" type="text" placeholder="subtask5">
        </div>
        
        <button type="submit">Add a card</button>
    </form>
    `,
    data() {
        return {
            column,
            title: null,
            subtask1: null,
            subtask2: null,
            subtask3: null,
            subtask4: null,
            subtask5: null,
        }
    },
    methods: {
        onSubmit() {
            let card = {
                title: this.title,
                subtasks: [{title: this.subtask1, completed: false},
                            {title: this.subtask2, completed: false},
                            {title: this.subtask3, completed: false},
                            {title: this.subtask4, completed: false},
                            {title: this.subtask5, completed: false}]
            }
            eventBus.$emit('card-submitted', card)
            this.title = null
            this.subtask1 = null
            this.subtask2 = null
            this.subtask3 = null
            this.subtask4 = null
            this.subtask5 = null
            console.log(card)
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        name: 'Notes'
    }
})