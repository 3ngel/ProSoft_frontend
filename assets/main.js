Vue.createApp({
    data() {
        return {
            login: '',
            password: '',
        };
    },
    methods: {
        handlelogin (event) {
        this.login = event.target.value;
        },
        handlepassword (event) {
        this.password = event.target.value;
        },
        async authorization () {
        if(this.login === '' || this.password ==='') { alert("Вы не ввели логин или пароль"); return};
        console.log("Ваш логин "+this.login+"\nВаш пароль "+this.password);
        //запрос к back
        // const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        //   username: this.username,
        //   password: this.password
        // });
        
        this.login = this.password = '';
        },
    }
}
).mount('#app'); //К какому блокуму применяется данный раздел
