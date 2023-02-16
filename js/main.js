let eventBus = new Vue()

Vue.component('cols', {
    template:`
    <div id="cols">
        <newcard></newcard>
        <div class="col-wrapper">
            <col1 :column1="column1"></col1>
            <col2 :column2="column2"></col2>
            <col3 :column3="column3"></col3>
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
            <input class="subtask" v-model="subtasks" type="text" placeholder="subtask">
        </div>
        <div>
            <input class="checkbox" type="checkbox">
            <input class="subtask" v-model="subtasks" type="text" placeholder="subtask">
        </div>
        <div>
            <input class="checkbox" type="checkbox">
            <input class="subtask" v-model="subtasks" type="text" placeholder="subtask">
        </div>
        
        <button type="submit">Add a card</button>
    </form>
    `,
    data() {
        return {
            column,
            title: null,
            subtasks: [],
        }
    },
    methods: {
        onSubmit() {
            let card = {
                title: this.title,
                subtasks: this.subtasks,
            }
            eventBus.$emit('card-submitted', card)
            this.title = null
            this.subtasks = null
        }
    }
})

let app = new Vue({
    el: '#app',
    data: {
        name: 'Notes'
    }
})