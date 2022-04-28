const Add = {
    data(){
        return{
            myPlaceholder: 'Введите команду заметки',
            titleAdd: 'Список заметок',
            inputValue: '',
            notes: ['Zametka 1', 'Zametka 2']
        }
    },
    methods: {
        inputChangeHandler(event){
            console.log('inputChangeHandler', event.target.value)
            this.inputValue = event.target.value
        },
        addNewNotes(){
            if (this.inputValue !== ''){
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
            
        },
        removeNote(idx, event){
            this.notes.splice(idx, 1)
        }
        // inputKeyPress(event){
        //     if (event.key === 'Enter' ){
        //         this.addNewNotes()
        //     }
        // } для keypress в Методе v-on
    }

}
Vue.createApp(Add).mount('#add1')