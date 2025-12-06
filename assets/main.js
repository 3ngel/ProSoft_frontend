// import { useRoute, useRouter } from 'vue-router';
//import cfg from './config.json' with { type:"json"};

// const md5 = require("md5");
const logins = {login:'user', password:'1'}
Vue.createApp({
    data() {
        // const config = cfg
        return {
            login: '',
            password: '',
            folder: 'Проект разработан группой РИЗ-330916у',
            api_url: "http://pro-soft.g-shamkhal.ru/api"
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
            // запрос к back
                let xhr = new XMLHttpRequest();

                xhr.open('GET', this.api_url+'/user_verify');

                xhr.responseType = 'json';

                xhr.send({
                    login: this.username,
                    password: this.password //Хеш от пароля
                });

                // тело ответа {"message": "Привет, мир!"}
                xhr.onload = function() {
                    let responseObj = xhr.response;
                    alert(responseObj.message); // Привет, мир!
                };

            // const response = await axios.post(this.api_url+'/user_verify', 
            // {
            //     login: this.username,
            //     password: this.password //Хеш от пароля
            // });
            // let response = await fetch(this.api_url+'/user_verify',{
            //     method: 'POST',
            //     mode:'no-cors',
            //     data:{
            //         login: this.username,
            //         password: this.password
            //     }
            //     // credentials: 'include'
            //     }).then((response)=>{
            //     return response.text();
            //     })
            //     .then(function(data) {
            //     console.log(data);
            //     return new Promise((resolve, reject)=>{
            //         resolve(data ? JSON.parse(data) : {})
            //     })
            //     });
            //     console.log(response.text())
            //Успешная аутентификация
            if(response.error==null){
                if (navigator.cookieEnabled === false){
                    alert("Cookies отключены!");
                }
                //Задаю куки авторизованного пользователя
                document.cookie = "user_id="+response.user_id
                document.cookie = "user="+response.user
                this.login = this.password = '';            
                window.location = './pages/activites_list/activites_list.html'
            }
            else{
                alert("Логин и/или пароль неверны")
            }
        },
    }
}
).mount('#app'); //К какому блокуму применяется данный раздел
