const {createApp} = Vue
createApp({
// contiene tutti i dati / le variabili 
data(){
    return {
        apiURL: 'https://flynn.boolean.careers/exercises/api/random/mail',
        emailArray: [],
    }
},
// contiene le funzioni e i metodi
methods: {
},
mounted() {
    for(let i = 0; i < 10; i++){
        axios.get(this.apiURL).then((resp) => {
            this.emailArray.push(resp.data.response);
            console.log(resp.data.response);
        })
    }
}
}).mount('#app')