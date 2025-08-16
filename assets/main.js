// import { useRoute, useRouter } from 'vue-router';

// const router = useRouter()
const logins = {login:'user', password:'1'}
// const key = '52495A2D33333039313675'
// const CryptoJS = require('crypto-js'); 
Vue.createApp({
    data() {
        return {
            login: '',
            password: '',
            folder: 'Проект разработан группой РИЗ-330916у'
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
        // const hash = CryptoJS.HmacSHA256(this.password, key).toString();
        // console.log("Ваш логин "+this.login+"\nВаш пароль "+hash);
        console.log("Ваш логин "+this.login+"\nВаш пароль "+this.password);
        //запрос к back
        // const response = await axios.post('https://jsonplaceholder.typicode.com/users', {
        //   username: this.username,
        //   password: this.password
        // });
        if(this.login == logins.login && this.password == logins.password){
            this.login = this.password = '';
            window.location = './pages/activites_list/activites_list.html'
        }
        else{
            alert("Логин и/или пароль неверны")
        }
        // router.push({path:'./pages/user_browse/user_browse.html'})
        },
    }
}
).mount('#app'); //К какому блокуму применяется данный раздел
